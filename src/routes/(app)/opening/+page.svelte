<script>
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$t('home.title')}</title>
	<meta name="description" content={$t('home.metaDescription')} />
</svelte:head>

<div class="page">
	<section class="card">
		<h2>{$t('home.whatIsZeroG')}</h2>
		<p>
			{@html $t('home.whatIsZeroGDesc')}
		</p>
	</section>

	<section class="card">
		<h2>{$t('home.promoVideo')}</h2>
		<div class="video-wrapper">
			<iframe
				src="https://www.youtube.com/embed/DuoOqC57cN0"
				title="ZeroG {$t('home.promoVideo')}"
				frameborder="0"
				referrerpolicy="strict-origin-when-cross-origin"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</section>

	<section class="card tagline-card">
		<p class="tagline">
			{$t('home.tagline')}
		</p>
		<h3 class="tagline-info">{$t('home.taglineAuthor')}</h3>
	</section>

	<section class="card">
		<h2>{$t('home.ourReferences')}</h2>
		<div class="refs-grid">
			<a
				href="https://www.youtube.com/watch?v=ime8da_ne8s"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img class="black-logo" src="/vakko-logo.png" alt="Vakko" />
			</a>
			<a
				href="https://www.youtube.com/watch?v=L_YILEbWQD4"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img class="black-logo" src="/loreal-logo.png" alt="L'Oréal" />
			</a>
			<a
				href="https://www.youtube.com/watch?v=hv08PzUvD44"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img src="/folli-follie-logo.png" alt="Folli Follie" />
			</a>
			<a
				href="https://www.youtube.com/@zerog-stinovasyon9768/videos"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img class="trt-logo" src="/trt_1_logo_2021.png" alt="TRT 1" />
			</a>
			<a
				href="https://www.youtube.com/@zerog-stinovasyon9768/videos"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img class="sb-logo" src="/tc-sanayi-tek-logo.png" alt="T.C. Sanayi ve Teknoloji Bakanlığı" />
			</a>
			<a
				href="https://www.youtube.com/watch?v=C00ovZf8wOU"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img src="/aselsan-logo.png" alt="Aselsan" />
			</a>
			<a
				href="https://www.youtube.com/watch?v=DuoOqC57cN0"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img class="ankamall-logo" src="/ankamall-logo.png" alt="Ankamall" />
			</a>
			<a
				href="https://www.youtube.com/watch?v=YpN-C2dsUzU"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img src="/tekmar-logo.png" alt="Tekmar" />
			</a>
		</div>
	</section>
</div>

<style>
	:global(html[data-theme='dark']) .black-logo {
		filter: brightness(0) invert(1);
	}
	:global(html[data-theme='dark']) .trt-logo {
		filter: brightness(2.5);
	}
	:global(html[data-theme='dark']) .sb-logo {
		filter: brightness(5) invert(0.25);
	}
	:global(html[data-theme='dark']) .ankamall-logo {
		filter: brightness(5) invert(0.25);
	}
</style>
