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
			>www.stinovasyon.com.tr</a>
	</p>
</footer>

<style>
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
