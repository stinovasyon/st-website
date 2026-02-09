<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Hakkımızda | ST Inovasyon</title>
	<meta
		name="description"
		content="ST Inovasyon'un patentli teknolojisi hakkında bilgi edinin. Gerçek, havada süzülen nesnelerle ürün sergileme ve reklamcılığı dönüştürüyor."
	/>
</svelte:head>

<main>
	<!-- Hero Section -->
	<section class="hero" in:fade={{ duration: 500, delay: 200 }}>
		<div class="hero-content">
			<h1>Reklamcılıkta Gerçekliği Yeniden Tanımlıyoruz.</h1>
			<p class="subtitle">
				ST Inovasyon, gerçek, fiziksel nesnelerin havada süzülerek sergilendiği yeni bir ürün sunum çağına öncülük ediyor.
				Havada süzülen nesnelerle unutulmaz marka deneyimleri yaratıyor.
			</p>
		</div>
	</section>

	<!-- Our Innovation Section -->
	<section class="content-section" in:fade={{ duration: 500, delay: 400 }}>
		<h2>Patentli Yeniliğimiz</h2>
		<p>
			Ürün sunumunun geleceğine hoş geldiniz. Temel buluşumuz, ST Inovasyon Ürün Tanıtım Standı, dünya çapında eşi benzeri görülmemiş ve patentli bir teknolojidir.
			Bu teknoloji, <strong>3D, somut, fiziksel nesnelerin</strong> açık alanda zarif bir şekilde dönmesini sağlar ve herhangi bir görünür destekten bağımsızdır.
		</p>
		<p>
			Bu bir hologram, bir projeksiyon veya sanal bir hile değildir. Bu, yeniden hayal edilmiş bir gerçektir. Bu
			buluş, vitrin, açık hava ve kapalı alan reklamcılığı konvansiyonlarını altüst etmeye hazırlanıyor ve kalabalık bir pazarda dikkat çekme
			zorluğuna etkileyici bir çözüm sunuyor.
		</p>
	</section>

	<!-- Our Vision Section -->
	<section class="content-section" in:fade={{ duration: 500, delay: 600 }}>
		<h2>Özgünlük Vizyonu</h2>
		<p>
			Dijital ve sanal "yeniliklerle" dolu bir dünyada, fizikselin gücüne inanıyoruz. Gerçek bir ürünün yerçekimine meydan okuduğunu görmek, sanal ekranların çoğaltamayacağı derin bir etki yaratır.
			 ST Inovasyon, markaların kalabalığın arasından sıyrılmasına ve benzersiz bir prestij oluşturmasına olanak tanır.
			 Teknolojimizi kullanarak, şirketler güçlü bir marka kimliği oluşturma kritik zorluğunu aşabilir ve kalite, yenilik ve hayranlık izlenimi bırakan kalıcı bir etki yaratabilirler.
		</p>
		<p>
			Vizyonumuz, markaların kalabalığın arasından sıyrılmasına ve benzersiz bir prestij oluşturmasına olanak tanımaktır.
			Teknolojimizi kullanarak, şirketler güçlü bir marka kimliği oluşturma kritik zorluğunu aşabilir ve kalite, yenilik ve hayranlık izlenimi bırakan kalıcı bir etki yaratabilirler.
		</p>
	</section>

	<!-- Media Section -->
	<section class="media-section" in:fade={{ duration: 500, delay: 800 }}>
		<h2>Basında Biz</h2>
		<div class="video-container">
			<iframe
				src="https://www.youtube.com/embed/4hik2i4isZc"
				title="ST Inovasyon Basında"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: 2rem 1rem;
		box-sizing: border-box;
	}

	.hero {
		width: 100%;
		text-align: center;
		padding: 6rem 2rem;
		margin-bottom: 4rem;
		border-radius: 16px;
		background: linear-gradient(-45deg, #001f3f, #00aaff, #121212, #001f3f);
		background-size: 400% 400%;
		animation: gradientBG 15s ease infinite;
		position: relative;
		overflow: hidden;
	}

	@keyframes gradientBG {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.hero-content {
		position: relative;
		z-index: 2;
		max-width: 800px;
		margin: 0 auto;
	}

	h1 {
		font-size: clamp(2.5rem, 5vw, 4rem);
		color: #ffffff;
		margin-bottom: 1rem;
		line-height: 1.1;
	}

	.subtitle {
		font-size: clamp(1.1rem, 2vw, 1.3rem);
		color: var(--text-color);
		max-width: 650px;
		margin: 0 auto;
		opacity: 0.9;
	}

	.content-section,
	.media-section {
		background-color: var(--surface-color);
		padding: 3rem;
		border-radius: 12px;
		max-width: 900px;
		width: 100%;
		margin-bottom: 2.5rem;
		border: 1px solid var(--border-color);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
	}

	h2 {
		font-size: 2.2rem;
		color: var(--primary-color);
		margin-top: 0;
		margin-bottom: 1.5rem;
		border-bottom: 2px solid var(--border-color);
		padding-bottom: 0.5rem;
	}

	p {
		font-size: 1.1rem;
		color: var(--text-muted-color);
		line-height: 1.7;
	}

	p + p {
		margin-top: 1rem;
	}

	strong {
		color: var(--text-color);
		font-weight: 600;
	}

	/* Responsive Video Container */
	.video-container {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%; /* 16:9 aspect ratio */
		height: 0;
		overflow: hidden;
		border-radius: 8px;
	}

	.video-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}

	@media (max-width: 768px) {
		.content-section,
		.media-section {
			padding: 2rem;
		}

		h1 {
			font-size: 2.2rem;
		}
		
		h2 {
			font-size: 1.8rem;
		}

		.subtitle {
			font-size: 1rem;
		}
	}
</style>