<script lang="ts">
	import { page } from '$app/stores';
	import logo from './st-logo.png';

	const pathname = () => $page.url.pathname as string;
</script>

<header>
	<div class="header-content">
		<a href="/" class="logo">
			<img src={logo} alt="ST İnovasyon Logo" />
			<span class="logo-text">ST İnovasyon</span>
		</a>

		<nav>
			<ul>
				<li class:active={pathname() === '/'}>
					<a href="/">Açılış</a>
				</li>
				<li class:active={pathname() === '/about'}>
					<a href="/about">Hakkında</a>
				</li>
				<li class:active={pathname() === '/reference'}>
					<a href="/reference">Referanslar</a>
				</li>
				<li class:active={pathname() === '/product'}>
					<a href="/product">Ürün</a>
				</li>
				<li class:active={pathname() === '/contact'}>
					<a href="/contact">İletişim</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		background: var(--bg-primary);
		border-bottom: 1px solid var(--border-color);
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

	.logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
	}

	.logo:hover {
		text-decoration: none;
	}

	.logo img {
		width: 36px;
		height: 36px;
		object-fit: contain;
	}

	.logo-text {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--text-primary);
		letter-spacing: -0.01em;
	}

	nav ul {
		display: flex;
		gap: 0.25rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav a {
		display: flex;
		align-items: center;
		padding: 0.5rem 1rem;
		color: var(--text-secondary);
		font-weight: 500;
		font-size: 0.875rem;
		text-decoration: none;
		border-radius: 4px;
		transition:
			color 0.2s ease,
			background 0.2s ease;
	}

	nav a:hover {
		color: var(--text-primary);
		background: var(--bg-secondary);
		text-decoration: none;
	}

	li.active a {
		color: var(--text-primary);
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.header-content {
			height: 64px;
			padding: 0 1.5rem;
		}

		.logo-text {
			display: none;
		}

		.logo img {
			width: 32px;
			height: 32px;
		}

		nav a {
			padding: 0.5rem 0.75rem;
			font-size: 0.8125rem;
		}
	}

	@media (max-width: 640px) {
		.header-content {
			padding: 0 1rem;
		}

		nav ul {
			gap: 0;
		}

		nav a {
			padding: 0.5rem 0.625rem;
			font-size: 0.75rem;
		}
	}
</style>
