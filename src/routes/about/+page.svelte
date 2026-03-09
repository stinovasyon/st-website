
<svelte:head>
	<title>Hakkımızda | ST Inovasyon</title>
	<meta
		name="description"
		content="ST Inovasyon'un patentli teknolojisi hakkında bilgi edinin. Gerçek, havada süzülen nesnelerle ürün sergileme ve reklamcılığı dönüştürüyor."
	/>
</svelte:head>

<div class="page">
	<section class="page-header">
			<h1>Reklamcılıkta Gerçekliği Yeniden Tanımlıyoruz.</h1>
		<p>
			ST Inovasyon, gerçek, fiziksel nesnelerin havada süzülerek sergilendiği yeni bir ürün sunum
			çağına öncülük ediyor. Havada süzülen nesnelerle unutulmaz marka deneyimleri yaratıyor.
			</p>
	</section>

	<section class="card">
		<h2>Patentli Yeniliğimiz</h2>
		<p>
			Ürün sunumunun geleceğine hoş geldiniz. Temel buluşumuz, ST Inovasyon Ürün Tanıtım Standı,
			dünya çapında eşi benzeri görülmemiş ve patentli bir teknolojidir. Bu teknoloji,
			<strong>3D, somut, fiziksel nesnelerin</strong> açık alanda zarif bir şekilde dönmesini sağlar ve
			herhangi bir görünür destekten bağımsızdır.
		</p>
		<p>
			Bu bir hologram, bir projeksiyon veya sanal bir hile değildir. Bu, yeniden hayal edilmiş bir
			gerçektir. Bu buluş, vitrin, açık hava ve kapalı alan reklamcılığı konvansiyonlarını altüst
			etmeye hazırlanıyor ve kalabalık bir pazarda dikkat çekme zorluğuna etkileyici bir çözüm
			sunuyor.
		</p>
	</section>

	<section class="card">
		<h2>Özgünlük Vizyonu</h2>
		<p>
			Dijital ve sanal "yeniliklerle" dolu bir dünyada, fizikselin gücüne inanıyoruz. Gerçek bir
			ürünün yerçekimine meydan okuduğunu görmek, sanal ekranların çoğaltamayacağı derin bir etki
			yaratır. ST Inovasyon, markaların kalabalığın arasından sıyrılmasına ve benzersiz bir prestij
			oluşturmasına olanak tanır.
		</p>
		<p>
			Teknolojimizi kullanarak, şirketler güçlü bir marka kimliği oluşturma kritik zorluğunu
			aşabilir ve kalite, yenilik ve hayranlık izlenimi bırakan kalıcı bir etki yaratabilirler.
		</p>
	</section>

	<section class="card">
		<h2>Basında Biz</h2>
		<div class="video-wrapper">
			<iframe
				src="https://www.youtube.com/embed/4hik2i4isZc"
				title="ST Inovasyon Basında"
				frameborder="0"
				referrerpolicy="strict-origin-when-cross-origin"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</section>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.page-header {
		text-align: center;
		padding: 3rem 1.5rem;
	}



	h1 {
		font-size: clamp(2rem, 4vw, 3rem);
		color: var(--text-color);
		margin: 0 0 1rem;
		line-height: 1.2;
	}

	.page-header p {
		color: var(--text-muted-color);
		max-width: 650px;
		margin: 0 auto;
		font-size: 1.1rem;
		line-height: 1.7;
	}

	.card {
		background: var(--surface-color);
		border: 1px solid var(--border-color);
		border-radius: 12px;
		padding: 2.5rem;
	}

	h2 {
		font-size: 1.6rem;
		color: var(--primary-color);
		margin: 0 0 1.25rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid var(--border-color);
	}

	p {
		color: var(--text-muted-color);
		line-height: 1.7;
		margin: 0;
	}

	p + p {
		margin-top: 1rem;
	}

	strong {
		color: var(--text-color);
	}

	.video-wrapper {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%;
		height: 0;
		overflow: hidden;
		border-radius: 8px;
		margin-top: 1.25rem;
	}

	.video-wrapper iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none;
	}


		


	@media (max-width: 600px) {
		.page-header {
			padding: 2rem 1rem;
		}

		.card {
			padding: 1.5rem;
		}

		h1 {
			font-size: 1.8rem;
		}


		h2 {
			font-size: 1.4rem;
		}
		.page-header p {
			font-size: 1rem;
		}
	}



</style>