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

