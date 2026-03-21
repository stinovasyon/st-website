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
		background: var(--bg-secondary);
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

	nav a {
		display: flex;
		align-items: center;
		padding: 0.625rem 1rem;
		color: var(--text-secondary);
		font-weight: 500;
		font-size: 0.9rem;
		text-decoration: none;
		border-radius: 8px;
		transition:
			color 0.2s ease,
			background 0.2s ease;
	}

	nav a:hover {
		color: var(--primary-light);
		background: rgba(37, 99, 235, 0.05);
		text-decoration: none;
	}

	li.active a {
		color: var(--pure-white);
		background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
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
			width: 36px;
			height: 36px;
		}

		nav a {
			padding: 0.5rem 0.75rem;
			font-size: 0.85rem;
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
			font-size: 0.8rem;
		}
	}
</style>
