<script lang="ts">
	import { onMount } from 'svelte';

	let isLoaded = false;

	onMount(() => {
		isLoaded = true;
	});

	// Mock data for the company
	const companyInfo = {
		name: 'ST Inovasyon',
		tagline: 'Innovating the Future of Product Presentation',
		description:
			'3D physical real object display stand that rotates in mid-air. A patent-protected innovation that breaks traditional presentation norms.',
		vision: 'To revolutionize advertising and product presentation with groundbreaking technology',
		mission:
			'To provide businesses with cutting-edge solutions that enhance brand value and customer engagement',
		features: [
			'3D physical object rotation in mid-air',
			'Patent-protected innovation',
			'World-first product presentation technology',
			'Suitable for both indoor and outdoor advertising',
			'Breaks traditional presentation norms'
		]
	};

	const testimonials = [
		{
			quote:
				"This technology completely transforms how we present our products. It's like nothing we've seen before.",
			author: 'Marketing Director, Global Tech Solutions',
			role: 'CEO'
		},
		{
			quote:
				'The prestige factor of using this technology elevates our brand to a new level. Customers are amazed.',
			author: 'Brand Manager, Premium Electronics',
			role: 'Marketing Head'
		}
	];
</script>

<svelte:head>
	<title>Hakkımızda</title>
	<meta name="description" content="Firma Hakkında" />
</svelte:head>

<div class="about-container">
	<div class="hero-section">
		<div class="hero-content">
			<h1 class="company-name">{companyInfo.name}</h1>
			<h2 class="tagline">{companyInfo.tagline}</h2>
			<p class="description">{companyInfo.description}</p>
			<div class="cta-button">
				<button class="primary-btn">Learn More</button>
			</div>
		</div>
		<div class="hero-image">
			<div class="product-demo">
				<div class="rotation-container">
					<div class="product-3d">3D Object</div>
				</div>
			</div>
		</div>
	</div>

	<div class="features-section">
		<h2 class="section-title">Innovation Features</h2>
		<div class="features-grid">
			{#each companyInfo.features as feature}
				<div class="feature-card">
					<div class="feature-icon">✓</div>
					<div class="feature-text">{feature}</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="vision-section">
		<div class="vision-content">
			<h2 class="section-title">Our Vision</h2>
			<p class="vision-text">{companyInfo.vision}</p>
			<h2 class="section-title">Our Mission</h2>
			<p class="vision-text">{companyInfo.mission}</p>
		</div>
	</div>

	<div class="testimonials-section">
		<h2 class="section-title">What People Say</h2>
		<div class="testimonials-grid">
			{#each testimonials as testimonial}
				<div class="testimonial-card">
					<div class="quote">"{testimonial.quote}"</div>
					<div class="author">{testimonial.author}</div>
					<div class="role">{testimonial.role}</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="video-section">
		<h2 class="section-title">See It In Action</h2>
		<div class="video-container">
			<iframe
				src="https://www.youtube.com/embed/4hik2i4isZc"
				title="ST Inovasyon Product Demo"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</div>

	<div class="cta-section">
		<h2 class="cta-title">Ready to Transform Your Brand?</h2>
		<p class="cta-text">Join the revolution in product presentation with ST Inovasyon</p>
		<div class="cta-buttons">
			<button class="primary-btn">Contact Us</button>
			<button class="secondary-btn">Request Demo</button>
		</div>
	</div>
</div>

<style>
	.about-container {
		background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
		color: #fff;
		min-height: 100vh;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	.hero-section {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 3rem;
		margin-bottom: 5rem;
		padding: 2rem 0;
	}

	.hero-content {
		flex: 1;
		min-width: 300px;
	}

	.company-name {
		font-size: 3.5rem;
		font-weight: 800;
		margin-bottom: 1rem;
		background: linear-gradient(to right, #00c9ff, #92fe9d);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
	}

	.tagline {
		font-size: 1.8rem;
		font-weight: 300;
		margin-bottom: 1.5rem;
		color: #a0d2eb;
	}

	.description {
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		color: #e0e0e0;
	}

	.hero-image {
		flex: 1;
		min-width: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.product-demo {
		width: 100%;
		max-width: 400px;
		height: 300px;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.1);
		position: relative;
		overflow: hidden;
	}

	.rotation-container {
		width: 200px;
		height: 200px;
		position: relative;
		animation: rotate 20s linear infinite;
	}

	.product-3d {
		width: 100%;
		height: 100%;
		background: linear-gradient(45deg, #00c9ff, #92fe9d);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		font-size: 1.5rem;
		box-shadow: 0 0 30px rgba(0, 201, 255, 0.5);
		animation: pulse 2s infinite;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(0, 201, 255, 0.7);
		}
		70% {
			box-shadow: 0 0 0 15px rgba(0, 201, 255, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(0, 201, 255, 0);
		}
	}

	.cta-button {
		display: flex;
		justify-content: flex-start;
	}

	.primary-btn {
		background: linear-gradient(to right, #00c9ff, #92fe9d);
		color: #0f0c29;
		border: none;
		padding: 1rem 2rem;
		font-size: 1.1rem;
		font-weight: 600;
		border-radius: 50px;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	}

	.primary-btn:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
	}

	.features-section {
		margin-bottom: 5rem;
	}

	.section-title {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		text-align: center;
		position: relative;
		display: inline-block;
	}

	.section-title::after {
		content: '';
		position: absolute;
		bottom: -10px;
		left: 50%;
		transform: translateX(-50%);
		width: 80px;
		height: 4px;
		background: linear-gradient(to right, #00c9ff, #92fe9d);
		border-radius: 2px;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.feature-card {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 15px;
		padding: 1.5rem;
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		transition: transform 0.3s ease;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.feature-card:hover {
		transform: translateY(-10px);
		background: rgba(255, 255, 255, 0.1);
	}

	.feature-icon {
		font-size: 1.8rem;
		color: #00c9ff;
		min-width: 40px;
	}

	.feature-text {
		font-size: 1.1rem;
		line-height: 1.6;
	}

	.vision-section {
		background: rgba(255, 255, 255, 0.03);
		border-radius: 20px;
		padding: 3rem;
		margin-bottom: 5rem;
		border: 1px solid rgba(255, 255, 255, 0.05);
	}

	.vision-text {
		font-size: 1.2rem;
		line-height: 1.8;
		margin-bottom: 1.5rem;
		color: #e0e0e0;
	}

	.testimonials-section {
		margin-bottom: 5rem;
	}

	.testimonials-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.testimonial-card {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 15px;
		padding: 2rem;
		position: relative;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.testimonial-card::before {
		content: '';
		position: absolute;
		top: 20px;
		left: 20px;
		font-size: 5rem;
		color: rgba(0, 201, 255, 0.2);
		font-family: Georgia, serif;
		line-height: 1;
	}

	.quote {
		font-size: 1.1rem;
		font-style: italic;
		margin-bottom: 1.5rem;
		line-height: 1.7;
	}

	.author {
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.role {
		color: #00c9ff;
		font-size: 0.9rem;
	}

	.video-section {
		margin-bottom: 5rem;
		text-align: center;
	}

	.video-container {
		width: 100%;
		max-width: 800px;
		height: 450px;
		margin: 0 auto;
		border-radius: 15px;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.video-container iframe {
		width: 100%;
		height: 100%;
		border: none;
	}

	.cta-section {
		text-align: center;
		background: rgba(255, 255, 255, 0.03);
		border-radius: 20px;
		padding: 4rem 2rem;
		margin-bottom: 3rem;
		border: 1px solid rgba(255, 255, 255, 0.05);
	}

	.cta-title {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.cta-text {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
		color: #e0e0e0;
	}

	.cta-buttons {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.secondary-btn {
		background: transparent;
		color: #fff;
		border: 2px solid #00c9ff;
		padding: 1rem 2rem;
		font-size: 1.1rem;
		font-weight: 600;
		border-radius: 50px;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.secondary-btn:hover {
		background: rgba(0, 201, 255, 0.1);
		transform: translateY(-3px);
	}

	@media (max-width: 768px) {
		.hero-section {
			flex-direction: column;
			text-align: center;
		}

		.tagline {
			font-size: 1.5rem;
		}

		.company-name {
			font-size: 2.5rem;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}

		.video-container {
			height: 300px;
		}
	}
</style>
