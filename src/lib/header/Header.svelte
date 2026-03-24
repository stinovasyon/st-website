<script>
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { t } from '$lib/i18n';
	import LangSwitcher from '$lib/components/LangSwitcher.svelte';
	import logo from './st-logo.png';

	let { theme = 'dark', toggleTheme = null } = $props();

	let currentPath = $state('/');
	let mobileMenuOpen = $state(false);

	afterNavigate(() => {
		currentPath = $page.url.pathname;
		mobileMenuOpen = false;
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function handleToggleTheme() {
		if (toggleTheme) {
			toggleTheme(event);
		}
	}
</script>

<header>
	<div class="header-content">
		<a href={resolve('/')} class="logo">
			<img src={logo} alt="ST İnovasyon Logo" />
			<span class="logo-text">ST İnovasyon</span>
		</a>

		<div class="header-actions">
			{#if toggleTheme}
				<button class="theme-toggle" onclick={handleToggleTheme} aria-label="Toggle theme">
					{theme === 'dark' ? '🌙' : '☀️'}
				</button>
			{/if}

			<LangSwitcher />

			<button class="mobile-toggle" onclick={toggleMobileMenu} aria-label="Toggle menu">
				{#if mobileMenuOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"
						></line></svg
					>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"
						></line><line x1="3" y1="18" x2="21" y2="18"></line></svg
					>
				{/if}
			</button>
		</div>

		<div class="header-right" class:open={mobileMenuOpen}>
			<nav>
				<ul>
					<li class:active={currentPath === '/' || currentPath === ''}>
						<a data-sveltekit-preload-data="hover" href={resolve('/')}>{$t('nav.home')}</a>
					</li>
					<li class:active={currentPath.startsWith('/about')}>
						<a data-sveltekit-preload-data="hover" href={resolve('/about/')}>{$t('nav.about')}</a>
					</li>
					<li class:active={currentPath.startsWith('/reference')}>
						<a data-sveltekit-preload-data="hover" href={resolve('/reference/')}
							>{$t('nav.references')}</a
						>
					</li>
					<li class:active={currentPath.startsWith('/product')}>
						<a data-sveltekit-preload-data="hover" href={resolve('/product/')}
							>{$t('nav.product')}</a
						>
					</li>
					<li class:active={currentPath.startsWith('/contact')}>
						<a data-sveltekit-preload-data="hover" href={resolve('/contact/')}
							>{$t('nav.contact')}</a
						>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</header>

<style>
	header {
		background: var(--bg-color);
		border-bottom: 1px solid var(--border-color);
		box-shadow: 0 2px 8px rgba(30, 58, 95, 0.05);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.header-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 72px;
	}

	.header-right {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		transition: opacity 0.2s ease;
	}

	.logo:hover {
		opacity: 0.85;
		text-decoration: none;
	}

	.logo img {
		width: 40px;
		height: 40px;
		object-fit: contain;
	}

	.logo-text {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--primary-color);
		letter-spacing: -0.01em;
	}

	nav ul {
		display: flex;
		gap: 0.25rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav li {
		position: relative;
	}

	nav a {
		display: flex;
		align-items: center;
		padding: 0.625rem 1rem;
		color: var(--text-muted-color);
		font-weight: 500;
		font-size: 0.9rem;
		text-decoration: none;
		border-radius: 8px;
		transition:
			color 0.2s ease,
			background 0.2s ease;
	}

	nav a:hover {
		color: var(--primary-color);
		background: rgba(37, 99, 235, 0.05);
		text-decoration: none;
	}

	li.active a {
		color: var(--pure-white);
		background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
	}

	.mobile-toggle {
		display: none;
		background: none;
		border: none;
		padding: 0.5rem;
		cursor: pointer;
		color: var(--text-color);
	}

	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		background: var(--surface-color);
		border: 1px solid var(--border-color);
		border-radius: 50%;
		cursor: pointer;
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		.mobile-toggle {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.header-actions {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}

		.header-right {
			position: fixed;
			top: 64px;
			left: 0;
			right: 0;
			bottom: 0;
			background: var(--bg-color);
			flex-direction: column;
			padding: 1rem;
			gap: 0;
			overflow-y: auto;
			overflow-x: hidden;
			transform: translateX(100%);
			transition: transform 0.3s ease;
			z-index: 99;
			box-sizing: border-box;
		}

		.header-right.open {
			transform: translateX(0);
		}

		nav {
			width: 100%;
		}

		nav ul {
			flex-direction: column;
			gap: 0.25rem;
		}

		nav li {
			width: 100%;
		}

		nav a {
			width: 100%;
			padding: 1rem;
			font-size: 1.1rem;
			justify-content: center;
			box-sizing: border-box;
		}

		.header-content {
			height: 64px;
			padding: 0 1rem;
		}

		.logo-text {
			display: none;
		}

		.logo img {
			width: 36px;
			height: 36px;
		}
	}
</style>
