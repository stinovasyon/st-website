<script>
	import zerogLogo from '$lib/header/zerog-logo.png';
</script>

<svelte:head>
	<title>ZeroG - Stinovasyon</title>
</svelte:head>

<div class="opening-page">
	<video class="video-bg" autoplay loop muted playsinline>
		<source src="/avatar_link.mp4" type="video/mp4" />
	</video>

	<a href="/opening" class="logo-link">
		<img src={zerogLogo} alt="ZeroG" class="logo" />
	</a>
</div>

<style>
	.opening-page {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}

	.video-bg {
		position: absolute;
		top: 50%;
		left: 50%;
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
		transform: translate(-50%, -50%);
		object-fit: cover;
		z-index: 0;
	}

	.logo-link {
		position: absolute;
		top: 15%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
		filter: brightness(0) invert(1);
	}

	.logo {
		max-width: 200px;
		width: 100%;
		height: auto;
	}
</style>
