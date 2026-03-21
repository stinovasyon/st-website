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
		<p class="copyright">© 2023-2026 ST İnovasyon. Tüm hakları saklıdır.</p>
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
		padding: 2rem 1.5rem;
		box-sizing: border-box;
	}

	footer {
		background: var(--bg-secondary);
		padding: 2.5rem 1.5rem;
		margin-top: auto;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background: var(--bg-primary);
		border-radius: 24px;
		padding: 2rem;
		box-shadow: var(--shadow-raised);
	}

	footer p {
		margin: 0;
		color: var(--text-secondary);
		font-size: 0.9rem;
	}

	footer a {
		color: var(--primary-color);
		font-weight: 600;
		transition: color 0.2s ease;
	}

	footer a:hover {
		color: var(--primary-hover);
	}

	@media (max-width: 640px) {
		main {
			padding: 1.5rem 1rem;
		}

		footer {
			padding: 1.5rem 1rem;
		}

		.footer-content {
			padding: 1.5rem;
			border-radius: 20px;
		}

		footer p {
			font-size: 0.85rem;
		}
	}
</style>
