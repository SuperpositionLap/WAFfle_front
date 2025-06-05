# 멀티스테이지 빌드를 사용한 프로덕션 최적화 Dockerfile

# Stage 1: Build stage
FROM node:22-alpine AS builder

# 보안을 위한 사용자 생성
RUN addgroup -g 1001 -S nodejs
RUN adduser -S svelte -u 1001

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 설치를 위한 파일들 복사 (캐시 최적화)
COPY package*.json ./

# 개발 의존성 포함 모든 의존성 설치
RUN npm ci --only=production=false

# 소스 코드 복사
COPY . .

# 빌드 실행
RUN npm run build

# 프로덕션 의존성만 재설치 (devDependencies 제거)
RUN npm ci --omit=dev

# Stage 2: Production stage
FROM node:22-alpine AS production

# 보안을 위한 사용자 생성
RUN addgroup -g 1001 -S nodejs
RUN adduser -S svelte -u 1001

# 작업 디렉토리 설정
WORKDIR /app

# 보안 업데이트
RUN apk update && apk upgrade && apk add --no-cache dumb-init

# 빌드된 앱과 프로덕션 의존성 복사
COPY --from=builder --chown=svelte:nodejs /app/build build/
COPY --from=builder --chown=svelte:nodejs /app/node_modules node_modules/
COPY --from=builder --chown=svelte:nodejs /app/package.json .

# 권한이 없는 사용자로 전환
USER svelte

# 포트 노출
EXPOSE 3000

# 환경 변수 설정
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# 헬스체크 추가
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/hello', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })" || exit 1

# dumb-init을 사용해서 시그널 처리 개선
ENTRYPOINT ["dumb-init", "--"]

# 앱 실행
CMD ["node", "build"]
