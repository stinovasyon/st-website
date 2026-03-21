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
	<div class="footer-content">
		<p>© 2023-2026 ST İnovasyon. Tüm hakları saklıdır.</p>
		<p>
			Web sitesi: <a href="https://www.stinovasyon.com" target="_blank" rel="noreferrer"
				>www.stinovasyon.com</a
			>
		</p>
	</div>
</footer>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		background-color: var(--bg-primary);
		color: var(--text-primary);
		margin: 0;
		padding: 0;
		font-size: 16px;
		line-height: 1.6;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 3rem 2rem;
		box-sizing: border-box;
	}

	footer {
		background: var(--bg-secondary);
		border-top: 1px solid var(--border-color);
		padding: 3rem 2rem;
		margin-top: auto;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	footer p {
		margin: 0;
		color: var(--text-muted-color);
		font-size: 0.875rem;
	}

	footer a {
		color: var(--accent-color);
		font-weight: 500;
		transition: color 0.2s ease;
	}

	footer a:hover {
		color: var(--primary-hover);
	}

	@media (max-width: 640px) {
		main {
			padding: 2rem 1.5rem;
		}

		footer {
			padding: 2rem 1.5rem;
		}

		footer p {
			font-size: 0.8125rem;
		}
	}
</style>
