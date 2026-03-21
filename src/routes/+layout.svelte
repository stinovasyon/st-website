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
		<p class="copyright">© 2023-2026 ST İNOVASYON</p>
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
		line-height: 1.4;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0;
		box-sizing: border-box;
	}

	footer {
		background: var(--bg-inverted);
		border-top: var(--border-thick) solid var(--border-color);
		padding: 0;
		margin-top: auto;
	}

	.footer-content {
		max-width: 1400px;
		margin: 0 auto;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	footer p {
		margin: 0;
		color: var(--text-inverted);
		font-size: 0.875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	footer a {
		color: var(--accent-color);
		font-weight: 700;
	}

	footer a:hover {
		background: var(--accent-color);
		color: var(--text-inverted);
	}

	@media (max-width: 640px) {
		.footer-content {
			padding: 1.5rem;
		}

		footer p {
			font-size: 0.75rem;
		}
	}
</style>
