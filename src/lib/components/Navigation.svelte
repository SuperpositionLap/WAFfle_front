<script lang="ts">
	import { onMount } from 'svelte';
	import { 
		createNavStyles, 
		createLogoStyles, 
		createButtonStyles,
		layout,
		gradients,
		animations,
		transitions
	} from '$lib/style/style';
	
	let isScrolled = false;
	let navElement: HTMLElement;

	// 스크롤 감지로 네비게이션 바 상태 변경
	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 0;
		};
		
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav 
	bind:this={navElement}
	class={createNavStyles(isScrolled)}
>
	<div class={layout.container}>
		<div class={layout.nav}>
			<div class="flex items-center">
				<a 
					href="/" 
					class={createLogoStyles()}
					aria-label="WAFfle 홈으로 이동"
				>
					<!-- 로고 배경 효과 -->
					<span class="absolute inset-0 -m-2 rounded-lg {gradients.primaryBg} {animations.glowEffect}"></span>
					
					<!-- 로고 텍스트 -->
					<span class="relative inline-block {transitions.transform} 
						group-hover:-translate-y-0.5 group-active:translate-y-0">
						WAFfle
					</span>
					
					<!-- 언더라인 효과 -->
					<span class="{animations.underline} {gradients.primaryLine}"></span>
				</a>
			</div>
			
			<!-- 오른쪽: 로그인 버튼 -->
			<div class="flex items-center">
				<button 
					type="button"
					class={createButtonStyles()}
					aria-label="로그인"
				>
					<!-- 버튼 배경 글로우 효과 -->
					<span class="{animations.buttonGlow} {gradients.primaryGlow}"></span>
					
					<!-- 버튼 텍스트 -->
					<span class="relative font-medium">로그인</span>
					
					<!-- 버튼 아이콘 (선택적) -->
					<svg class={animations.iconMove}
						fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
							d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</nav>
