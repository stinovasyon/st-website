<svelte:head>
	<title>Home</title>
	<meta name="description" content="StInovasyon product page" />
</svelte:head>

<section>
	<img src="stinovasyon-logo.webp" alt="Logo" />
	<p></p>
	<img src="productbox.webp" alt="Ürün Kutusu" />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		gap: 1.5rem;
		padding: 2rem 1rem 3rem;
		box-sizing: border-box;
	}

	img {
		width: 100%;
		max-width: 420px;
		height: auto;
		display: block;
	}

	@media (max-width: 600px) {
		section {
			gap: 1.25rem;
			padding: 1.5rem 0.75rem 2.5rem;
		}

		img {
			max-width: 320px;
		}
	}

	@media (max-width: 420px) {
		section {
			gap: 1rem;
			padding: 1.25rem 0.5rem 2rem;
		}

		img {
			max-width: 260px;
		}
	}
</style>
