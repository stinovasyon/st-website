<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';

	interface Reference {
		title: string;
		videoId: string;
		category: string;
	}

	let references: Reference[] = [
		{
			title: 'Zero g Üç Boyutlu Ürün Tanıtım Standı',
			videoId: 'saaAck9vyfs',
			category: 'productShowcase'
		},
		{
			title: 'Zero G - Ürün Tanıtımı 2014 Ankamall - St inovasyon',
			videoId: 'DuoOqC57cN0',
			category: 'productShowcase'
		},
		{ title: 'Zero G Folli Follie', videoId: 'hv08PzUvD44', category: 'productShowcase' },
		{
			title: 'THY Farklı Konsept Çalışması',
			videoId: 'qbMO44oJckY',
			category: 'conceptWork'
		},
		{ title: 'KALP ve YÜZÜK - ZERO G', videoId: 'wfLx9vYNRK0', category: 'productShowcase' },
		{
			title: 'ZERO G - BİLEZİK 3D ÜRÜN TANITIM STANDI',
			videoId: 'TAP9G-soywc',
			category: 'productShowcase'
		},
		{ title: 'İkili kalp', videoId: 'z0ORGeU6oPo', category: 'productShowcase' }
	];

	let filteredReferences: Reference[] = [];
	let selectedCategory = 'all';
	let searchQuery = '';

	function filterReferences() {
		filteredReferences = references.filter((ref) => {
			const matchesCategory = selectedCategory === 'all' || ref.category === selectedCategory;
			const matchesSearch = ref.title.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		});
	}

	function handleSearch(event: Event) {
		searchQuery = (event.target as HTMLInputElement).value;
		filterReferences();
	}

	function handleCategoryChange(category: string) {
		selectedCategory = category;
		filterReferences();
	}

	onMount(() => {
		filterReferences();
	});
</script>

<svelte:head>
	<title>{$t('reference.title')}</title>
	<meta name="description" content={$t('reference.metaDescription')} />
</svelte:head>

<div class="page">
	<section class="page-header">
		<h1>{$t('reference.titleMain')}</h1>
		<p>{$t('reference.subtitle')}</p>
	</section>

	<div class="filters card">
		<input
			type="text"
			placeholder={$t('reference.searchPlaceholder')}
			oninput={handleSearch}
			value={searchQuery}
		/>

		<div class="category-btns">
			<button class:active={selectedCategory === 'all'} onclick={() => handleCategoryChange('all')}>
				{$t('reference.all')}
			</button>
			<button
				class:active={selectedCategory === 'productShowcase'}
				onclick={() => handleCategoryChange('productShowcase')}
			>
				{$t('reference.productShowcase')}
			</button>
			<button
				class:active={selectedCategory === 'conceptWork'}
				onclick={() => handleCategoryChange('conceptWork')}
			>
				{$t('reference.conceptWork')}
			</button>
		</div>
	</div>

	{#if filteredReferences.length > 0}
		<div class="reference-grid">
			{#each filteredReferences as reference (reference.videoId)}
				<div class="reference-card card">
					<div class="video-wrapper">
						<iframe
							src={`https://www.youtube.com/embed/${reference.videoId}`}
							title={reference.title}
							referrerpolicy="strict-origin-when-cross-origin"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
					<div class="ref-info">
						<h3>{reference.title}</h3>
						<span class="tag">{$t(`reference.${reference.category}`)}</span>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div class="no-results card">
			<h3>{$t('reference.noResults')}</h3>
			<p>{$t('reference.noResultsText')}</p>
		</div>
	{/if}
</div>
