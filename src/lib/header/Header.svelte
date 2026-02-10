<script>
// @ts-nocheck

	import { page } from '$app/stores';
	import logo from './st-logo.png';
</script>

<header>
	<div class="corner">
		<a href="https://www.stinovasyon.com.tr/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<!-- svelte-ignore attribute_illegal_colon -->
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Açılış</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<!-- svelte-ignore attribute_illegal_colon -->
				<a sveltekit:prefetch href="/about">Hakkında</a>
			</li>
			<li class:active={$page.url.pathname === '/reference'}>
				<!-- svelte-ignore attribute_illegal_colon -->
				<a sveltekit:prefetch href="/reference">Referanslar</a>
			</li>

			<li class:active={$page.url.pathname === '/product'}>
				<!-- svelte-ignore attribute_illegal_colon -->
				<a sveltekit:prefetch href="/product">Ürün</a>
			</li>
			<li class:active={$page.url.pathname === '/contact'}>
				<!-- svelte-ignore attribute_illegal_colon -->
				<a sveltekit:prefetch href="/contact">İletişim</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

