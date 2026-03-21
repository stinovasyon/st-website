<svelte:head>
	<title>ST İnovasyon | ZeroG</title>
	<meta
		name="description"
		content="ZeroG — patentli ürün sergileme platformu. Gerçek ürünler, benzersiz görsel deneyim."
	/>
</svelte:head>

<div class="page">
	<section class="card">
		<h2>ZeroG Nedir?</h2>
		<p>
			ZeroG, patentli bir ürün sergileme platformudur. Dünyada eşsizdir. Kuruluşların değerli
			eşyalarını sergilemelerine ve izleyicilere benzersiz ve unutulmaz bir görsel deneyim
			sunmalarına yardımcı olmak için tasarlanmıştır; ürünler dijital veya holografik değil, gerçek
			ürünlerdir.
		</p>
	</section>

	<section class="card">
		<h2>Tanıtım Videosu</h2>
		<div class="video-wrapper">
			<iframe
				src="https://www.youtube.com/embed/DuoOqC57cN0"
				title="ZeroG Tanıtım Videosu"
				frameborder="0"
				referrerpolicy="strict-origin-when-cross-origin"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</section>

	<section class="card tagline-card">
		<p class="tagline">
			Tarvity'nin kutusu, nesneleri havaya kaldırdığı için değil, etrafına insanları yoğun bir
			şekilde çektiği için sihirli.
		</p>
		<h3 class="tagline-info">Salih TURHAL</h3>
	</section>

	<section class="card">
		<h2>Referanslarımız</h2>
		<div class="refs-grid">
			<a
				href="https://www.youtube.com/watch?v=ime8da_ne8s"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img src="vakko-logo.png" alt="Vakko" />
			</a>
			<a
				href="https://www.youtube.com/watch?v=L_YILEbWQD4"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img src="loreal-logo.png" alt="L'Oréal" />
			</a>
			<a
				href="https://www.youtube.com/watch?v=hv08PzUvD44"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img src="folli-follie-logo.png" alt="Folli Follie" />
			</a>
			<a
				href="https://www.youtube.com/@zerog-stinovasyon9768/videos"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img src="trt_1_logo_2021.png" alt="TRT 1" />
			</a>
			<a
				href="https://www.youtube.com/@zerog-stinovasyon9768/videos"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img src="tc-sanayi-tek-logo.png" alt="T.C. Sanayi ve Teknoloji Bakanlığı" />
			</a>
			<a
				href="https://www.youtube.com/watch?v=C00ovZf8wOU"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img src="aselsan-logo.png" alt="Aselsan" />
			</a>
			<a
				href="https://www.youtube.com/watch?v=DuoOqC57cN0"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img src="ankamall-logo.png" alt="Ankamall" />
			</a>
			<a
				href="https://www.youtube.com/watch?v=YpN-C2dsUzU"
				target="_blank"
				rel="noreferrer"
				class="ref-link"
			>
				<img src="tekmar-logo.png" alt="Tekmar" />
			</a>
		</div>
	</section>
</div>

<style>
	.tagline-card {
		text-align: center;
	}

	.tagline-info {
		text-align: left;
		margin-top: 0;
		margin-bottom: 0;
	}

	.tagline {
		font-size: 1.2rem;
		font-style: italic;
		color: var(--text-color);
		line-height: 1.75;
		margin: 0;
		max-width: 720px;
		margin-inline: auto;
	}

	.refs-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 1.25rem;
		margin-top: 1.25rem;
	}

	.ref-link {
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bg-color);
		border: 1px solid var(--border-color);
		border-radius: 8px;
		padding: 1rem;
		transition:
			opacity 0.2s,
			transform 0.2s;
	}

	.ref-link:hover {
		opacity: 0.8;
		transform: translateY(-2px);
	}

	.ref-link img {
		width: 100%;
		max-width: 120px;
		height: auto;
		object-fit: contain;
		display: block;
	}

	@media (max-width: 600px) {
		.tagline {
			font-size: 1.05rem;
		}

		.refs-grid {
			grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
			gap: 0.75rem;
		}
	}
</style>
