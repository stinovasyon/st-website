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

<style>
	h1 {
		font-size: clamp(2rem, 4vw, 3rem);
		color: var(--text-color);
		margin: 0 0 0.75rem;
		line-height: 1.2;
	}

	h2 {
		font-size: 1.6rem;
		margin: 0 0 1.5rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid var(--border-color);
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.25rem;
	}

	.feature-item {
		padding: 1.25rem;
		background: var(--bg-color);
		border: 1px solid var(--border-color);
		border-radius: 8px;
	}

	h3 {
		font-size: 1.05rem;
		color: var(--text-color);
		margin: 0 0 0.5rem;
	}

	.commercial-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1rem;
	}

	.commercial-list li {
		padding: 1.25rem;
		background: var(--bg-color);
		border: 1px solid var(--border-color);
		border-radius: 8px;
		color: var(--text-muted-color);
		line-height: 1.5;
		font-size: 0.95rem;
	}

	.cta {
		text-align: center;
	}

	.cta h2 {
		border-bottom: none;
		margin-bottom: 1rem;
	}

	.cta p {
		font-size: 1.05rem;
		max-width: 600px;
		margin: 0 auto 1.75rem;
	}

	.btn {
		display: inline-block;
		background: var(--primary-color);
		color: var(--bg-color);
		padding: 0.75rem 2rem;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		transition: opacity 0.2s;
	}

	.btn:hover {
		opacity: 0.85;
		text-decoration: none;
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 1.8rem;
		}
		h2 {
			font-size: 1.4rem;
		}
	}
</style>
