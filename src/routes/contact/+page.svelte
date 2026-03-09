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
		max-width: 600px;
		margin: 0 auto;
		font-size: 1.1rem;
        line-height: 1.7;
    }

    .grid {
        display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.25rem;
    }

    .card {
        background: var(--surface-color);
        border: 1px solid var(--border-color);
		border-radius: 12px;
        padding: 1.75rem;
    }

    h2 {
		font-size: 1.2rem;
        color: var(--primary-color);
		margin: 0 0 1rem;
		padding-bottom: 0.6rem;
		border-bottom: 1px solid var(--border-color);
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
		.page-header {
			padding: 2rem 1rem;
        }
		h1 {
			font-size: 1.8rem;
        }
		.page-header p {
            font-size: 1rem;
        }


        .card {
			padding: 1.25rem;
        }

        }
</style>