<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import '$lib/styles/shared.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>© 2023-2026 ST İnovasyon. Tüm hakları saklıdır.</p>
	<p>
		Web sitesi: <a href="https://www.stinovasyon.com" class="website-link" target="_blank"
			>www.stinovasyon.com</a
		>
	</p>
</footer>

<style>
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

	@media (max-width: 600px) {
		footer {
			padding: 24px 16px;
			gap: 6px;
			text-align: center;
		}

		footer p {
			margin: 0;
			font-size: 0.95rem;
		}
	}
</style>
