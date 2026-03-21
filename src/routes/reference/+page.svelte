<script lang="ts">
	import { onMount } from 'svelte';

	interface Reference {
		title: string;
		videoId: string;
		category: string;
	}

	let references: Reference[] = [
		{
			title: 'Zero g Üç Boyutlu Ürün Tanıtım Standı',
			videoId: 'saaAck9vyfs',
			category: 'Ürün Tanıtımı'
		},
		{
			title: 'Zero G - Ürün Tanıtımı 2014 Ankamall - St inovasyon',
			videoId: 'DuoOqC57cN0',
			category: 'Ürün Tanıtımı'
		},
		{ title: 'Zero G Folli Follie', videoId: 'hv08PzUvD44', category: 'Ürün Tanıtımı' },
		{
			title: 'THY Farklı Konsept Çalışması',
			videoId: 'qbMO44oJckY',
			category: 'Konsept Çalışmalar'
		},
		{ title: 'KALP ve YÜZÜK - ZERO G', videoId: 'wfLx9vYNRK0', category: 'Ürün Tanıtımı' },
		{
			title: 'ZERO G - BİLEZİK 3D ÜRÜN TANITIM STANDI',
			videoId: 'TAP9G-soywc',
			category: 'Ürün Tanıtımı'
		},
		{ title: 'İkili kalp', videoId: 'z0ORGeU6oPo', category: 'Ürün Tanıtımı' }
	];

	let filteredReferences: Reference[] = [];
	let selectedCategory = 'Tümü';
	let searchQuery = '';

	const categories = ['Tümü', 'Ürün Tanıtımı', 'Konsept Çalışmalar'];

	function filterReferences() {
		filteredReferences = references.filter((ref) => {
			const matchesCategory = selectedCategory === 'Tümü' || ref.category === selectedCategory;
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
	<title>Referanslar | ST İnovasyon</title>
	<meta
		name="description"
		content="ST İnovasyon tarafından oluşturulan başarılı projeler ve üretim çalışmaları"
	/>
</svelte:head>

<div class="page">
	<section class="page-header">
		<h1>Referanslarımız</h1>
		<p>ST İnovasyon tarafından oluşturulan başarılı projeler ve üretim çalışmalarımız</p>
	</section>

	<div class="filters card">
		<input
			type="text"
			placeholder="Referansları ara..."
			on:input={handleSearch}
			value={searchQuery}
		/>

		<div class="category-btns">
			{#each categories as category}
				<button
					class:active={selectedCategory === category}
					on:click={() => handleCategoryChange(category)}
				>
					{category}
				</button>
			{/each}
		</div>
	</div>

	{#if filteredReferences.length > 0}
		<div class="grid">
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
						<span class="tag">{reference.category}</span>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div class="no-results card">
			<h3>Referans bulunamadı</h3>
			<p>Arama kriterlerinize uygun referans bulunamadı.</p>
		</div>
	{/if}
</div>

<style>
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: center;
	}

	.category-btns {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1.5rem;
	}

	.reference-card {
		padding: 0;
		overflow: hidden;
	}

	.ref-info {
		padding: 1rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	h3 {
		font-size: 1rem;
		color: var(--text-color);
		margin: 0;
		line-height: 1.4;
	}

	.tag {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		background: var(--bg-color);
		border: 1px solid var(--border-color);
		border-radius: 20px;
		font-size: 0.8rem;
		color: var(--primary-color);
		width: fit-content;
	}

	.no-results {
		text-align: center;
		padding: 3rem;
	}

	.no-results h3 {
		color: var(--text-color);
		margin: 0 0 0.5rem;
		font-size: 1.2rem;
	}

	.no-results p {
		font-size: 0.95rem;
	}

	@media (max-width: 600px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
