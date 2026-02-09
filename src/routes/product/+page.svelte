<svelte:head>
	<title>Ürün Özellikleri</title>
	<meta name="description" content="Ürün Özellikleri Sayfası" />
</svelte:head>

<div class="container">
	<header>
		<div class="logo">
			<i class="fas fa-cube"></i>
		</div>
		<h1>ST İnovasyon</h1>
		<p class="subtitle">Modüler ve Esnek Ürün Çözümleri</p>
	</header>

	<div class="product-image">
		<svg
			viewBox="0 0 500 300"
			xmlns="http://www.w3.org/2000/svg"
			style="width:100%; height:auto; background:#f8f9fa; border-radius:10px;"
		>
			<rect
				x="50"
				y="50"
				width="150"
				height="150"
				fill="#3498db"
				stroke="#2c3e50"
				stroke-width="2"
				rx="5"
			/>
			<rect
				x="220"
				y="100"
				width="150"
				height="100"
				fill="#e74c3c"
				stroke="#2c3e50"
				stroke-width="2"
				rx="5"
			/>
			<rect
				x="390"
				y="50"
				width="100"
				height="150"
				fill="#27ae60"
				stroke="#2c3e50"
				stroke-width="2"
				rx="5"
			/>
			<rect
				x="100"
				y="200"
				width="100"
				height="50"
				fill="#f39c12"
				stroke="#2c3e50"
				stroke-width="2"
				rx="5"
			/>
			<rect
				x="250"
				y="200"
				width="100"
				height="50"
				fill="#9b59b6"
				stroke="#2c3e50"
				stroke-width="2"
				rx="5"
			/>
			<rect
				x="370"
				y="200"
				width="100"
				height="50"
				fill="#1abc9c"
				stroke="#2c3e50"
				stroke-width="2"
				rx="5"
			/>
		</svg>
	</div>

	<div class="features-grid">
		<div class="feature-card">
			<div class="feature-icon">
				<i class="fas fa-ruler-combined"></i>
			</div>
			<h3>Esnek Boyutlar</h3>
			<p>14x14x14 cm'den 220x220x220 cm'ye kadar her boyutta ürün üretimi</p>
		</div>
		<div class="feature-card">
			<div class="feature-icon">
				<i class="fas fa-sync-alt"></i>
			</div>
			<h3>Modüler Yapı</h3>
			<p>İçinde birden fazla ürün aynı anda hareket edebilir</p>
		</div>
		<div class="feature-card">
			<div class="feature-icon">
				<i class="fas fa-home"></i>
			</div>
			<h3>Çoklu Kurulum</h3>
			<p>Duvara gömülebilir, tavana asılabilir, tezgah üstü konulabilir</p>
		</div>
		<div class="feature-card">
			<div class="feature-icon">
				<i class="fas fa-bolt"></i>
			</div>
			<h3>Şarjlı Opsiyon</h3>
			<p>Şarjlı olabilir, kolay kullanım sunar</p>
		</div>
	</div>

	<div class="specifications">
		<h2>Ürün Özellikleri</h2>
		<div class="spec-list">
			<div class="spec-item">
				<div class="spec-icon">
					<i class="fas fa-cube"></i>
				</div>
				<div class="spec-text">
					<h4>Şekil ve Yapı</h4>
					<p>Tüm ürünler küp ve dikdörtgen prizma şeklindedir</p>
				</div>
			</div>
			<div class="spec-item">
				<div class="spec-icon">
					<i class="fas fa-weight-hanging"></i>
				</div>
				<div class="spec-text">
					<h4>Ağırlık</h4>
					<p>Ağır bir ürün değildir</p>
				</div>
			</div>
			<div class="spec-item">
				<div class="spec-icon">
					<i class="fas fa-paint-roller"></i>
				</div>
				<div class="spec-text">
					<h4>Dış Yüzey</h4>
					<p>İstenilen şekilde tasarım yapılabilir</p>
				</div>
			</div>
			<div class="spec-item">
				<div class="spec-icon">
					<i class="fas fa-cogs"></i>
				</div>
				<div class="spec-text">
					<h4>İç İçerik</h4>
					<p>Metal, ahşap veya plastik olabilir</p>
				</div>
			</div>
			<div class="spec-item">
				<div class="spec-icon">
					<i class="fas fa-leaf"></i>
				</div>
				<div class="spec-text">
					<h4>Ortam Etkisi</h4>
					<p>Radyasyon yaymak gibi olumsuz bir etkisi yoktur</p>
				</div>
			</div>
			<div class="spec-item">
				<div class="spec-icon">
					<i class="fas fa-warehouse"></i>
				</div>
				<div class="spec-text">
					<h4>Kurulum Alanları</h4>
					<p>Açık Hava, Kapalı Alan, AVM, Havaalanları, Fuar Alanları</p>
				</div>
			</div>
		</div>
	</div>

	<div class="cta-section">
		<h2>ST İnovasyon Ürünleriniz İçin Hazır</h2>
		<p>
			Modüler, esnek ve güvenilir çözümlerle markanızı öne çıkarın. Teknik servis ağımızla her zaman
			yanınızdayız.
		</p>
		<a href="https://www.stinovasyon.com.tr" class="btn website-link" target="_blank">
			<i class="fas fa-external-link-alt"></i> ST İnovasyon Web Sitesi
		</a>
		<a href="mailto:info@stinovasyon.com.tr" class="btn btn-secondary">
			<i class="fas fa-envelope"></i> İletişim
		</a>
	</div>

	<footer>
		<p>© 2023 ST İnovasyon. Tüm hakları saklıdır.</p>
		<p>
			Web sitesi: <a href="https://www.stinovasyon.com.tr" class="website-link" target="_blank"
				>www.stinovasyon.com.tr</a
			>
		</p>
	</footer>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	:root {
		--primary: #2c3e50;
		--secondary: #3498db;
		--accent: #e74c3c;
		--light: #ecf0f1;
		--dark: #2c3e50;
		--success: #27ae60;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	header {
		text-align: center;
		padding: 30px 20px;
		background: linear-gradient(to right, var(--primary), var(--secondary));
		color: white;
		border-radius: 15px;
		margin-bottom: 30px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
		position: relative;
		overflow: hidden;
	}

	header::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
		transform: rotate(30deg);
	}

	.logo {
		font-size: 3rem;
		margin-bottom: 15px;
		color: var(--accent);
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 10px;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	.subtitle {
		font-size: 1.2rem;
		opacity: 0.9;
		max-width: 800px;
		margin: 0 auto;
	}

	.product-image {
		width: 100%;
		max-width: 500px;
		margin: 20px auto;
		border-radius: 10px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
		border: 5px solid white;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 25px;
		margin-bottom: 40px;
	}

	.feature-card {
		background: white;
		border-radius: 15px;
		padding: 25px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.feature-card:hover {
		transform: translateY(-10px);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
	}

	.feature-icon {
		font-size: 3rem;
		margin-bottom: 20px;
		color: var(--secondary);
	}

	.feature-card h3 {
		font-size: 1.4rem;
		margin-bottom: 15px;
		color: var(--primary);
	}

	.feature-card p {
		color: #555;
		font-size: 1rem;
	}

	.specifications {
		background: white;
		border-radius: 15px;
		padding: 30px;
		margin-bottom: 30px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
	}

	.specifications h2 {
		text-align: center;
		margin-bottom: 25px;
		color: var(--primary);
		position: relative;
		padding-bottom: 15px;
	}

	.specifications h2::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 80px;
		height: 4px;
		background: var(--secondary);
		border-radius: 2px;
	}

	.spec-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
	}

	.spec-item {
		display: flex;
		align-items: flex-start;
		padding: 15px;
		border-radius: 10px;
		background: #f8f9fa;
		transition: all 0.3s ease;
	}

	.spec-item:hover {
		background: #e9f7fe;
		transform: translateX(5px);
	}

	.spec-icon {
		font-size: 1.5rem;
		color: var(--secondary);
		margin-right: 15px;
		min-width: 30px;
	}

	.spec-text h4 {
		margin-bottom: 5px;
		color: var(--primary);
	}

	.spec-text p {
		color: #666;
		font-size: 0.95rem;
	}

	.cta-section {
		text-align: center;
		padding: 40px 20px;
		background: linear-gradient(to right, var(--primary), var(--secondary));
		color: white;
		border-radius: 15px;
		margin-bottom: 30px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
	}

	.cta-section h2 {
		font-size: 2rem;
		margin-bottom: 20px;
	}

	.cta-section p {
		max-width: 700px;
		margin: 0 auto 30px;
		font-size: 1.1rem;
		opacity: 0.9;
	}

	.btn {
		display: inline-block;
		background: var(--accent);
		color: white;
		padding: 15px 30px;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.1rem;
		transition: all 0.3s ease;
		border: none;
		cursor: pointer;
		box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
	}

	.btn:hover {
		background: #c0392b;
		transform: translateY(-3px);
		box-shadow: 0 8px 20px rgba(231, 76, 60, 0.4);
	}

	.btn-secondary {
		background: transparent;
		border: 2px solid white;
		margin-left: 15px;
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	footer {
		text-align: center;
		padding: 20px;
		color: #777;
		font-size: 0.9rem;
		border-top: 1px solid #eee;
		margin-top: 20px;
	}

	.website-link {
		color: var(--secondary);
		text-decoration: none;
		font-weight: 600;
	}

	.website-link:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.features-grid {
			grid-template-columns: 1fr;
		}

		h1 {
			font-size: 2rem;
		}

		.spec-list {
			grid-template-columns: 1fr;
		}

		.btn {
			display: block;
			margin: 10px auto;
			width: 80%;
			max-width: 300px;
		}

		.btn-secondary {
			margin-left: 0;
		}
	}
</style>

