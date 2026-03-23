<script>
	import { locale, setLocale } from '$lib/i18n';

	function toggleLocale() {
		const currentLocale = $locale;
		const nextLocale = currentLocale === 'tr' ? 'en' : 'tr';
		setLocale(nextLocale);
	}
</script>

<button class="lang-switcher" onclick={toggleLocale} aria-label="Toggle language">
	<span class="lang-code">{$locale.toUpperCase()}</span>
</button>

<style>
	.lang-switcher {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.375rem 0.75rem;
		background: rgba(59, 130, 246, 0.1);
		border: 1px solid var(--border-color);
		border-radius: 6px;
		cursor: pointer;
		transition: all 0.2s ease;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.05em;
	}

	.lang-switcher:hover {
		background: rgba(59, 130, 246, 0.2);
	}

	.lang-code {
		color: var(--primary-color);
	}
</style>
