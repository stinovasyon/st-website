<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	let theme = $state('light');

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			theme = savedTheme;
		}
		document.documentElement.setAttribute('data-theme', theme);
	});

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', theme);
		document.documentElement.setAttribute('data-theme', theme);
	}
</script>

<div class="theme-wrapper">
	<button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
		{theme === 'light' ? '🌙' : '☀️'}
	</button>

	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<p>© 2023-2026 ST İnovasyon. Tüm hakları saklıdır.</p>
		<p>
			Web sitesi: <a href="https://www.stinovasyon.com" class="website-link" target="_blank"
				>www.stinovasyon.com</a
			>
		</p>
	</footer>
</div>

<style>
	.theme-wrapper {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.theme-toggle {
		position: fixed;
		top: 1rem;
		right: 1rem;
		z-index: 1000;
		background: var(--surface-color);
		border: 1px solid var(--border-color);
		border-radius: 50%;
		width: 44px;
		height: 44px;
		cursor: pointer;
		font-size: 1.2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition:
			background 0.2s,
			transform 0.2s;
	}

	.theme-toggle:hover {
		transform: scale(1.1);
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
