<script lang="ts">
	import { page } from '$app/stores';
	import logo from './st-logo.png';

	const pathname = () => $page.url.pathname as string;
</script>

<header>
	<div class="header-content">
		<a href="/" class="logo">
			<img src={logo} alt="ST İnovasyon Logo" />
			<span class="logo-text">ST İNOVASYON</span>
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
		background: rgba(13, 13, 13, 0.95);
		border-bottom: 2px solid var(--primary-color);
		box-shadow:
			0 0 20px var(--primary-glow),
			inset 0 -1px 0 rgba(0, 255, 136, 0.2);
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
		transition: all 0.3s ease;
	}

	.logo:hover {
		text-decoration: none;
	}

	.logo:hover .logo-text {
		text-shadow:
			0 0 10px var(--primary-glow),
			0 0 20px var(--primary-glow),
			0 0 40px var(--primary-glow);
	}

	.logo:hover img {
		filter: drop-shadow(0 0 10px var(--primary-glow));
	}

	.logo img {
		width: 40px;
		height: 40px;
		object-fit: contain;
		transition: filter 0.3s ease;
	}

	.logo-text {
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--primary-color);
		text-transform: uppercase;
		letter-spacing: 0.15em;
		text-shadow: 0 0 10px var(--primary-glow);
	}

	nav ul {
		display: flex;
		gap: 0;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav a {
		display: flex;
		align-items: center;
		padding: 0.625rem 1.25rem;
		color: var(--text-secondary);
		font-weight: 600;
		font-size: 0.875rem;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		border: 1px solid transparent;
		transition: all 0.3s ease;
		position: relative;
	}

	nav a:hover {
		color: var(--primary-color);
		text-shadow: 0 0 10px var(--primary-glow);
		border-color: var(--primary-color);
		box-shadow:
			0 0 10px var(--primary-glow),
			inset 0 0 10px rgba(0, 255, 136, 0.1);
		text-decoration: none;
	}

	li.active a {
		color: var(--bg-primary);
		background: var(--primary-color);
		border-color: var(--primary-color);
		box-shadow:
			0 0 20px var(--primary-glow),
			inset 0 0 10px rgba(0, 255, 136, 0.2);
		text-shadow: none;
	}

	@media (max-width: 768px) {
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

		nav a {
			padding: 0.5rem 0.75rem;
			font-size: 0.75rem;
			letter-spacing: 0.03em;
		}
	}

	@media (max-width: 640px) {
		header {
			border-bottom-width: 1px;
		}

		nav ul {
			flex-wrap: wrap;
		}

		nav a {
			padding: 0.5rem 0.625rem;
			font-size: 0.7rem;
		}
	}
</style>
