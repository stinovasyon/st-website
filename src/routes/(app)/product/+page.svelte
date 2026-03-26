<script>
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$t('product.title')}</title>
	<meta name="description" content={$t('product.metaDescription')} />
</svelte:head>

<div class="page">
	<section class="page-header">
		<h1>{$t('product.titleMain')}</h1>
		<p>{$t('product.subtitle')}</p>
	</section>

	<section class="card">
		<h2>{$t('product.features')}</h2>

		<div class="features-grid">
			<div class="feature-item">
				<h3>{$t('product.flexibleSizes')}</h3>
				<p>{$t('product.flexibleSizesDesc')}</p>
			</div>
			<div class="feature-item">
				<h3>{$t('product.modularStructure')}</h3>
				<p>{$t('product.modularStructureDesc')}</p>
			</div>
			<div class="feature-item">
				<h3>{$t('product.multipleInstallations')}</h3>
				<p>{$t('product.multipleInstallationsDesc')}</p>
			</div>
			<div class="feature-item">
				<h3>{$t('product.rechargeableOption')}</h3>
				<p>{$t('product.rechargeableOptionDesc')}</p>
			</div>
		</div>
	</section>

	<section class="card">
		<h2>{$t('product.specs')}</h2>
		<div class="features-grid">
			<div class="feature-item">
				<h3>{$t('product.shapeStructure')}</h3>
				<p>{$t('product.shapeStructureDesc')}</p>
			</div>
			<div class="feature-item">
				<h3>{$t('product.weight')}</h3>
				<p>{$t('product.weightDesc')}</p>
			</div>
			<div class="feature-item">
				<h3>{$t('product.outerSurface')}</h3>
				<p>{$t('product.outerSurfaceDesc')}</p>
			</div>
			<div class="feature-item">
				<h3>{$t('product.innerContent')}</h3>
				<p>{$t('product.innerContentDesc')}</p>
			</div>
			<div class="feature-item">
				<h3>{$t('product.environmentEffect')}</h3>
				<p>{$t('product.environmentEffectDesc')}</p>
			</div>
			<div class="feature-item">
				<h3>{$t('product.installationAreas')}</h3>
				<p>{$t('product.installationAreasDesc')}</p>
			</div>
		</div>
	</section>

	<section class="card">
		<h2>{$t('product.commercialAreas')}</h2>
		<ul class="commercial-list">
			<li>{$t('product.distributor')}</li>
			<li>{$t('product.licenseAgreement')}</li>
			<li>{$t('product.advertising')}</li>
			<li>{$t('product.promotional')}</li>
		</ul>
	</section>

	<section class="card cta">
		<h2>{$t('product.ctaTitle')}</h2>
		<p>
			{$t('product.ctaText')}
		</p>
		<a href="https://www.stinovasyon.com" class="btn" target="_blank" rel="noreferrer">
			{$t('product.website')}
		</a>
	</section>
</div>
