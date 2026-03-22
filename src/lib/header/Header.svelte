<script lang="ts">
	import { page } from '$app/stores';
	import logo from './st-logo.png';

	$: pathname = $page.url.pathname as string;
</script>

<header>
	<div class="header-content">
		<a href="/" class="logo">
			<img src={logo} alt="ST İnovasyon Logo" />
			<span class="logo-text">ST İNOVASYON</span>
		</a>

		<nav>
			<ul>
				<li class:active={pathname === '/'}>
					<a href="/">Açılış</a>
				</li>
				<li class:active={pathname === '/about/'}>
					<a href="/about/">Hakkında</a>
				</li>
				<li class:active={pathname === '/reference/'}>
					<a href="/reference/">Referanslar</a>
				</li>
				<li class:active={pathname === '/product/'}>
					<a href="/product/">Ürün</a>
				</li>
				<li class:active={pathname === '/contact/'}>
					<a href="/contact/">İletişim</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		background: var(--bg-primary);
		border-bottom: var(--border-thick) solid var(--border-color);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.header-content {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		gap: 0;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 1rem;
		text-decoration: none;
		padding: 1rem;
		border-right: var(--border-thick) solid var(--border-color);
		transition: background 0.1s ease;
	}

	.logo:hover {
		background: var(--primary-color);
		text-decoration: none;
	}

	.logo:hover .logo-text {
		color: var(--text-inverted);
	}

	.logo:hover img {
		filter: brightness(0) invert(1);
	}

	.logo img {
		width: 40px;
		height: 40px;
		object-fit: contain;
	}

	.logo-text {
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--text-primary);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	nav {
		display: flex;
	}

	nav ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav li {
		border-left: var(--border-thick) solid var(--border-color);
	}

	nav a {
		display: flex;
		align-items: center;
		padding: 1rem 1.5rem;
		color: var(--text-primary);
		font-weight: 700;
		font-size: 0.875rem;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		transition: all 0.1s ease;
	}

	nav a:hover {
		background: var(--primary-color);
		color: var(--text-inverted);
		text-decoration: none;
		padding: 1rem 1.5rem;
		margin: 0;
	}

	li.active a {
		background: var(--accent-color);
		color: var(--text-inverted);
	}

	@media (max-width: 768px) {
		.header-content {
			flex-direction: column;
			padding: 0;
		}

		.logo {
			border-right: none;
			border-bottom: var(--border-thick) solid var(--border-color);
			justify-content: center;
		}

		.logo-text {
			font-size: 1rem;
		}

		nav ul {
			flex-wrap: wrap;
		}

		nav li {
			flex: 1 0 33.33%;
			border-left: none;
			border-top: var(--border-thick) solid var(--border-color);
		}

		nav a {
			justify-content: center;
			padding: 0.875rem 1rem;
			font-size: 0.75rem;
		}

		nav a:hover {
			padding: 0.875rem 1rem;
		}
	}
</style>
