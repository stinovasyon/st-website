<svelte:head>
    <title>İletişim | ST Inovasyon</title>
    <meta
        name="description"
        content="ST Inovasyon ile iletişime geçin. İstanbul ve Ankara ofislerimiz için telefonlar, e-posta adresleri ve web sitelerimiz burada."
    />
</svelte:head>

<main>
    <section class="hero">
        <div class="hero-content">
            <p class="eyebrow">İletişim</p>
            <h1>ST Inovasyon ile hızlıca bağlantı kurun.</h1>
            <p class="subtext">
                Sorularınız, iş birlikleri veya ürün detayları için bize dilediğiniz kanaldan ulaşabilirsiniz.
            </p>
        </div>
    </section>

    <section class="grid">
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
                <li><a href="mailto:info@stinovasyon.com.tr">info@stinovasyon.com.tr</a></li>
                <li><a href="mailto:info@stinovasyon.com">info@stinovasyon.com</a></li>
            </ul>
        </article>

        <article class="card">
            <h2>Web</h2>
            <ul>
                <li><a href="https://www.stinovasyon.com.tr" target="_blank" rel="noreferrer">www.stinovasyon.com.tr</a></li>
                <li><a href="https://www.stinovasyon.com" target="_blank" rel="noreferrer">www.stinovasyon.com</a></li>
            </ul>
        </article>
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem 1rem 3rem;
        box-sizing: border-box;
    }

    .hero {
        background: linear-gradient(135deg, rgba(0, 170, 255, 0.18), rgba(18, 18, 18, 0.9));
        border: 1px solid var(--border-color);
        border-radius: 16px;
        padding: 3rem;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
    }

    .hero-content {
        max-width: 700px;
    }

    .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.18em;
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--primary-color);
        margin: 0 0 0.75rem;
    }

    h1 {
        font-size: clamp(2rem, 3.5vw, 3rem);
        margin: 0 0 1rem;
        color: var(--text-color);
    }

    .subtext {
        font-size: 1.1rem;
        color: var(--text-muted-color);
        margin: 0;
        line-height: 1.7;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1.5rem;
    }

    .card {
        background: var(--surface-color);
        border-radius: 14px;
        border: 1px solid var(--border-color);
        padding: 1.75rem;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    h2 {
        font-size: 1.4rem;
        margin: 0;
        color: var(--primary-color);
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    li {
        color: var(--text-muted-color);
    }

    a {
        color: var(--text-color);
        text-decoration: none;
        font-weight: 600;
    }

    a:hover {
        color: var(--primary-color);
        text-decoration: underline;
    }

    @media (max-width: 720px) {
        main {
            padding: 1.5rem 0.75rem 2.5rem;
            gap: 1.5rem;
        }

        .hero {
            padding: 2rem 1.5rem;
        }

        .subtext {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        .hero {
            padding: 1.5rem 1.25rem;
        }

        .card {
            padding: 1.5rem;
        }

        h2 {
            font-size: 1.2rem;
        }
    }
</style>