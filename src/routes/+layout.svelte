<script>
	import Header from '$lib/header/Header.svelte';
	import { webVitals } from '$lib/vitals';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import '../app.css';

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		});
	}
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>© 2023-2026 ST İnovasyon. Tüm hakları saklıdır.</p>
	<p>
		Web sitesi: <a href="https://www.stinovasyon.com.tr" class="website-link" target="_blank"
			>www.stinovasyon.com.tr</a
		>
	</p>
</footer>

<style>
	:root {
		--bg-color: #121212;
		--surface-color: #1e1e1e;
		--primary-color: #00aaff;
		--text-color: #e0e0e0;
		--text-muted-color: #a0a0a0;
		--border-color: #333;

		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		background-color: var(--bg-color);
		color: var(--text-color);
		margin: 0;
		padding: 0;
		font-size: 16px;
		line-height: 1.6;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
