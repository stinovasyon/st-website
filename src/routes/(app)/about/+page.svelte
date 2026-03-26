<script>
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$t('about.title')}</title>
	<meta name="description" content={$t('about.metaDescription')} />
</svelte:head>

<div class="page">
	<section class="page-header">
		<h1>{$t('about.titleMain')}</h1>
		<p>
			{$t('about.subtitle')}
		</p>
	</section>

	<section class="card">
		<h2>{$t('about.patentTitle')}</h2>
		<p>
			{@html $t('about.patentP1')}
		</p>
		<p>
			{$t('about.patentP2')}
		</p>
	</section>

	<section class="card">
		<h2>{$t('about.visionTitle')}</h2>
		<p>
			{$t('about.visionP1')}
		</p>
		<p>
			{$t('about.visionP2')}
		</p>
	</section>

	<section class="card">
		<h2>{$t('about.pressTitle')}</h2>
		<div class="video-wrapper">
			<iframe
				src="https://www.youtube.com/embed/4hik2i4isZc"
				title="ST Inovasyon {$t('about.pressTitle')}"
				frameborder="0"
				referrerpolicy="strict-origin-when-cross-origin"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</section>
</div>
