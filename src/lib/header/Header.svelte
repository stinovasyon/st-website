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

		<nav class="nav-container">
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
		padding: 1rem;
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.header-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border-radius: 16px;
		background: var(--bg-primary);
		box-shadow: var(--shadow-soft);
		transition:
			box-shadow 0.3s ease,
			transform 0.2s ease;
	}

	.logo:hover {
		transform: translateY(-2px);
		box-shadow:
			8px 8px 16px var(--shadow-dark),
			-8px -8px 16px var(--shadow-light);
		text-decoration: none;
	}

	.logo img {
		width: 36px;
		height: 36px;
		object-fit: contain;
	}

	.logo-text {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--text-primary);
	}

	.nav-container {
		background: var(--bg-primary);
		border-radius: 50px;
		padding: 0.5rem;
		box-shadow: var(--shadow-pressed);
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
		color: var(--text-secondary);
		font-weight: 600;
		font-size: 0.9rem;
		text-decoration: none;
		border-radius: 50px;
		transition:
			color 0.2s ease,
			background 0.2s ease;
	}

	nav a:hover {
		color: var(--text-primary);
		background: var(--bg-primary);
		box-shadow: var(--shadow-soft);
		text-decoration: none;
	}

	li.active a {
		background: var(--primary-color);
		color: var(--pure-white);
		box-shadow: var(--shadow-soft);
	}

	@media (max-width: 768px) {
		.logo-text {
			display: none;
		}

		.logo {
			padding: 0.5rem;
		}

		.logo img {
			width: 32px;
			height: 32px;
		}

		nav a {
			padding: 0.5rem 0.75rem;
			font-size: 0.85rem;
		}
	}

	@media (max-width: 640px) {
		header {
			padding: 0.75rem;
		}

		nav a {
			padding: 0.5rem 0.6rem;
			font-size: 0.8rem;
		}
	}
</style>
