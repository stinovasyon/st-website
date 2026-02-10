<svelte:head>
	<title>Referanslar</title>
	<meta name="description" content="Referanslar Sayfası" />
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
  
  interface Reference {
    title: string;
    videoId: string;
    category: string;
  }

  let references: Reference[] = [
    {
      title: "Zero g Üç Boyutlu Ürün Tanıtım Standı",
      videoId: "saaAck9vyfs",
      category: "Ürün Tanıtımı"
    },
    {
      title: "Zero G - Ürün Tanıtımı 2014 Ankamall - St inovasyon",
      videoId: "DuoOqC57cN0",
      category: "Ürün Tanıtımı"
    },
    {
      title: "Zero G Folli Follie",
      videoId: "hv08PzUvD44",
      category: "Ürün Tanıtımı"
    },
    {
      title: "THY Farklı Konsept Çalışması",
      videoId: "qbMO44oJckY",
      category: "Konsept Çalışmalar"
    },
    {
      title: "KALP ve YÜZÜK - ZERO G",
      videoId: "wfLx9vYNRK0",
      category: "Ürün Tanıtımı"
    },
    {
      title: "ZERO G - BİLEZİK 3D ÜRÜN TANITIM STANDI",
      videoId: "TAP9G-soywc",
      category: "Ürün Tanıtımı"
    },
    {
      title: "İkili kalp",
      videoId: "z0ORGeU6oPo",
      category: "Ürün Tanıtımı"
    }
  ];

  let filteredReferences: Reference[] = [];
  let selectedCategory = "Tümü";
  let searchQuery = "";

  const categories = ["Tümü", "Ürün Tanıtımı", "Konsept Çalışmalar"];

  function filterReferences() {
    filteredReferences = references.filter(ref => {
      const matchesCategory = selectedCategory === "Tümü" || ref.category === selectedCategory;
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


<div class="references-container">
  <header class="references-header">
    <h1>Referanslarımız</h1>
    <p>ST İnovasyon tarafından oluşturulan başarılı projeler ve üretim çalışmalarımız</p>
  </header>

  <div class="filters-section">
    <div class="search-box">
      <i class="fas fa-search"></i>
      <input 
        type="text" 
        placeholder="Referansları ara..." 
        on:input={handleSearch}
        value={searchQuery}
      />
    </div>
    
    <div class="category-filters">
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

  <div class="references-grid">
    {#each filteredReferences as reference (reference.videoId)}
      <div class="reference-card">
        <div class="video-container">
          <iframe 
            src={`https://www.youtube.com/embed/${reference.videoId}`}
            title={reference.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="reference-info">
          <h3>{reference.title}</h3>
          <span class="category">{reference.category}</span>
        </div>
      </div>
    {/each}
  </div>

  {#if filteredReferences.length === 0}
    <div class="no-results">
      <i class="fas fa-search"></i>
      <h3>Referans bulunamadı</h3>
      <p>Arama kriterlerinize uygun referans bulunamadı</p>
    </div>
  {/if}
</div>



