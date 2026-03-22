<script lang="ts">
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import logo from './st-logo.png';

	let currentPath = '/';

	afterNavigate(() => {
		currentPath = $page.url.pathname;
	});
</script>

<header>
	<div class="header-content">
		<a href={resolve('/')} class="logo">
			<img src={logo} alt="ST İnovasyon Logo" />
			<span class="logo-text">ST İnovasyon</span>
		</a>

		<nav>
			<ul>
				<li class:active={currentPath === '/' || currentPath === ''}>
					<a href={resolve('/')}>Açılış</a>
				</li>
				<li class:active={currentPath.startsWith('/about')}>
					<a href={resolve('/about/')}>Hakkında</a>
				</li>
				<li class:active={currentPath.startsWith('/reference')}>
					<a href={resolve('/reference/')}>Referanslar</a>
				</li>
				<li class:active={currentPath.startsWith('/product')}>
					<a href={resolve('/product/')}>Ürün</a>
				</li>
				<li class:active={currentPath.startsWith('/contact')}>
					<a href={resolve('/contact/')}>İletişim</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		background: rgba(17, 24, 39, 0.8);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border-color);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.header-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
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

	nav li {
		position: relative;
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
		color: var(--text-primary);
		background: rgba(59, 130, 246, 0.1);
		text-decoration: none;
	}

	li.active a {
		color: var(--primary-color);
		background: rgba(59, 130, 246, 0.1);
	}

	li.active::before {
		content: '';
		position: absolute;
		bottom: -1px;
		left: 50%;
		transform: translateX(-50%);
		width: 24px;
		height: 2px;
		background: var(--primary-color);
		border-radius: 2px;
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
			font-size: 0.85rem;
		}
	}

	@media (max-width: 640px) {
		nav ul {
			gap: 0;
		}

		nav a {
			padding: 0.5rem 0.6rem;
			font-size: 0.8rem;
		}

		li.active::before {
			display: none;
		}
	}
</style>
