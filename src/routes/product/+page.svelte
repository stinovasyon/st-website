<svelte:head>
	<title>Ürün Özellikleri | ST İnovasyon</title>
	<meta name="description" content="ST İnovasyon modüler ve esnek ürün çözümleri" />
</svelte:head>

<div class="page">
	<section class="page-header">
		<h1>ST İnovasyon</h1>
		<p>Modüler ve Esnek Ürün Çözümleri</p>
	</section>

	<section class="card">
		<h2>Özellikler</h2>

		<div class="features-grid">
			<div class="feature-item">
				<h3>Esnek Boyutlar</h3>
				<p>14x14x14 cm'den 220x220x220 cm'ye kadar her boyutta ürün üretimi</p>
			</div>
			<div class="feature-item">
				<h3>Modüler Yapı</h3>
				<p>İçinde birden fazla ürün aynı anda hareket edebilir</p>
			</div>
			<div class="feature-item">
				<h3>Çoklu Kurulum</h3>
				<p>Duvara gömülebilir, tavana asılabilir, tezgah üstü konulabilir</p>
			</div>
			<div class="feature-item">
				<h3>Şarjlı Opsiyon</h3>
				<p>Şarjlı olabilir, kolay kullanım sunar</p>
			</div>
		</div>
	</section>

	<section class="card">
		<h2>Ürün Özellikleri</h2>
		<div class="features-grid">
			<div class="feature-item">
				<h3>Şekil ve Yapı</h3>
				<p>Tüm ürünler küp ve dikdörtgen prizma şeklindedir</p>
			</div>
			<div class="feature-item">
				<h3>Ağırlık</h3>
				<p>Ağır bir ürün değildir</p>
			</div>
			<div class="feature-item">
				<h3>Dış Yüzey</h3>
				<p>İstenilen şekilde tasarım yapılabilir</p>
			</div>
			<div class="feature-item">
				<h3>İç İçerik</h3>
				<p>Metal, ahşap veya plastik olabilir</p>
			</div>
			<div class="feature-item">
				<h3>Ortam Etkisi</h3>
				<p>Radyasyon yaymak gibi olumsuz bir etkisi yoktur</p>
			</div>
			<div class="feature-item">
				<h3>Kurulum Alanları</h3>
				<p>Açık Hava, Kapalı Alan, AVM, Havaalanları, Fuar Alanları</p>
			</div>
		</div>
	</section>

	<section class="card">
		<h2>Ticari Alanlar</h2>
		<ul class="commercial-list">
			<li>Yurtdışı distribütörlüğü</li>
			<li>Uluslararası firmalarla lisans anlaşması</li>
			<li>
				Reklam ajansları ile AVM'ler, fuar alanları, havaalanları vb. yerlerde yeni bir reklam
				mercii oluşturmak
			</li>
			<li>Promosyon ve hediyelik eşya sektöründe çoklu adetlerde anlaşmalar</li>
		</ul>
	</section>

	<section class="card cta">
		<h2>ST İnovasyon Ürünleriniz İçin Hazır</h2>
		<p>
			Modüler, esnek ve güvenilir çözümlerle markanızı öne çıkarın. Teknik servis ağımızla her zaman
			yanınızdayız.
		</p>
		<a href="https://www.stinovasyon.com" class="btn" target="_blank" rel="noreferrer">
			ST İnovasyon Web Sitesi
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
