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


<style>
  .references-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .references-header {
    text-align: center;
    margin-bottom: 40px;
    padding: 20px 0;
  }

  .references-header h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 15px;
    font-weight: 700;
  }

  .references-header p {
    font-size: 1.1rem;
    color: #7f8c8d;
    max-width: 700px;
    margin: 0 auto;
  }

  .filters-section {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 40px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }

  .search-box {
    flex: 1;
    min-width: 250px;
    position: relative;
    display: flex;
    align-items: center;
  }

  .search-box input {
    width: 100%;
    padding: 12px 45px 12px 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .search-box input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }

  .search-box i {
    position: absolute;
    left: 15px;
    color: #7f8c8d;
  }

  .category-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    min-width: 200px;
  }

  .category-filters button {
    padding: 10px 20px;
    background: #ecf0f1;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    color: #7f8c8d;
  }

  .category-filters button:hover {
    background: #3498db;
    color: white;
  }

  .category-filters button.active {
    background: #3498db;
    color: white;
    box-shadow: 0 2px 5px rgba(52, 152, 219, 0.3);
  }

  .references-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
  }

  .reference-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .reference-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }

  .video-container {
    height: 300px;
    position: relative;
  }

  .video-container iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  .reference-info {
    padding: 20px;
  }

  .reference-info h3 {
    margin: 0 0 10px;
    font-size: 1.1rem;
    color: #2c3e50;
    line-height: 1.4;
  }

  .category {
    display: inline-block;
    padding: 5px 12px;
    background: #3498db;
    color: white;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .no-results {
    text-align: center;
    padding: 60px 20px;
    grid-column: 1 / -1;
  }

  .no-results i {
    font-size: 3rem;
    color: #bdc3c7;
    margin-bottom: 20px;
  }

  .no-results h3 {
    color: #2c3e50;
    margin-bottom: 10px;
  }

  .no-results p {
    color: #7f8c8d;
    max-width: 500px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .references-container {
      padding: 15px;
    }
    
    .references-header h1 {
      font-size: 2rem;
    }
    
    .filters-section {
      flex-direction: column;
    }
    
    .references-grid {
      grid-template-columns: 1fr;
    }
    
    .category-filters {
      justify-content: center;
    }
  }
</style>

