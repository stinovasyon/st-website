<svelte:head>
	<title>İletişim | ST Inovasyon</title>
	<meta
		name="description"
		content="ST Inovasyon ile iletişime geçin. İstanbul ve Ankara ofislerimiz için telefonlar, e-posta adresleri ve web sitelerimiz burada."
	/>
</svelte:head>

<div class="page">
	<section class="page-header">
		<h1>ST Inovasyon ile Bağlantı Kurun</h1>
		<p>
			Sorularınız, iş birlikleri veya ürün detayları için bize dilediğiniz kanaldan ulaşabilirsiniz.
		</p>
	</section>

	<div class="grid">
		<article class="card">
			<h2>İstanbul İletişim</h2>
			<ul>
				<li><a href="tel:+902165115897">0216 511 58 97</a></li>
			</ul>
		</article>

		<article class="card">
			<h2>Ankara İletişim</h2>
			<ul>
				<li><a href="tel:+903124810038">0312 481 00 38</a></li>
				<li><a href="tel:+903124810039">0312 481 00 39</a></li>
				<li><a href="tel:+903124810061">0312 481 00 61</a></li>
				<li><a href="tel:+903124810062">0312 481 00 62</a></li>
				<li><a href="tel:+905322380052">0532 238 00 52</a></li>
			</ul>
		</article>

		<article class="card">
			<h2>E-posta</h2>
			<ul>
				<li><a href="mailto:info@stinovasyon.com">info@stinovasyon.com</a></li>
			</ul>
		</article>

		<article class="card">
			<h2>Web</h2>
			<ul>
				<li>
					<a href="https://www.stinovasyon.com" target="_blank" rel="noreferrer"
						>www.stinovasyon.com</a
					>
				</li>
			</ul>
		</article>
	</div>
</div>

<style>
	h2 {
		font-size: 1.2rem;
		margin: 0 0 1rem;
		padding-bottom: 0.6rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	a {
		color: var(--text-color);
		text-decoration: none;
		font-weight: 500;
	}

	a:hover {
		color: var(--primary-color);
		text-decoration: underline;
	}

	@media (max-width: 600px) {
		.card {
			padding: 1.25rem;
		}
	}
</style>
