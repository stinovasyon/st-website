<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { initLocale, t } from '$lib/i18n';

	let { children } = $props();

	let theme = $state('dark');

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			theme = savedTheme;
		}
		document.documentElement.setAttribute('data-theme', theme);

		initLocale();
	});

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', theme);
		document.documentElement.setAttribute('data-theme', theme);
	}
</script>

<div class="theme-wrapper">
	<Header {toggleTheme} {theme} />

	<main>
		{@render children()}
	</main>

	<footer>
		<p>{$t('footer.copyright')}</p>
		<p>
			{$t('footer.website')}
			<a href="https://www.stinovasyon.com" class="website-link" target="_blank"
				>www.stinovasyon.com</a
			>
		</p>
	</footer>
</div>
