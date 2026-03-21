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
		border-top: 2px solid var(--primary-color);
		box-shadow: 0 -10px 40px var(--primary-glow);
		padding: 3rem 2rem;
		margin-top: auto;
		position: relative;
	}

	footer::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(
			90deg,
			transparent,
			var(--primary-color),
			var(--neon-cyan),
			var(--neon-pink),
			var(--primary-color),
			transparent
		);
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
		color: var(--text-secondary);
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	footer a {
		color: var(--primary-color);
		font-weight: 700;
		text-shadow: 0 0 10px var(--primary-glow);
		transition: all 0.3s ease;
	}

	footer a:hover {
		color: var(--neon-cyan);
		text-shadow:
			0 0 10px var(--neon-cyan),
			0 0 20px var(--neon-cyan),
			0 0 40px var(--neon-cyan);
	}

	@media (max-width: 640px) {
		main {
			padding: 2rem 1.5rem;
		}

		footer {
			padding: 2rem 1.5rem;
		}

		footer p {
			font-size: 0.75rem;
			letter-spacing: 0.05em;
		}
	}
</style>
