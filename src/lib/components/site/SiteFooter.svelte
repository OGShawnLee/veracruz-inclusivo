<script lang="ts">
	import SiteLogo from './SiteLogo.svelte';
	import SiteSocialMedia from './SiteSocialMedia.svelte';
  

	const currentYear = new Date().getFullYear();
</script>

{#snippet social(icon: string, href: string, label: string)}
	<a
		{href}
		target="_blank"
		rel="noopener"
		aria-label={label}
	>
		<i class="bx {icon} text-xl"></i>
	</a>
{/snippet}

<footer class="py-12 border-t $border-ground-2">
	<div class="container flex flex-col items-center gap-4 md:(flex-row gap-16)">
		<a href="/">
			<SiteLogo />
		</a>
		<nav>
			<ul class="flex justify-center">
				<a href="/about-us">Acerca de Nosotros</a>
			</ul>
		</nav>
    <SiteSocialMedia />
	</div>
</footer>

<!-- <div class="footer-content">
  <div class="footer-section">
    <p>&copy; {currentYear} Veracruz Inclusivo. All rights reserved.</p>
  </div>
  <div class="footer-section">
    <nav>
      <ul class="footer-links">
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
      </ul>
    </nav>
  </div>
  <div class="footer-section">
    <div class="social-media">
      <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </div>
</div> -->

<style>
	.footer {
		background-color: #333;
		color: #fff;
		padding: 1rem;
		text-align: center;
	}
	.footer-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	.footer-section {
		margin: 0.5rem 0;
	}
	.footer-links {
		list-style: none;
		padding: 0;
		display: flex;
		gap: 1rem;
	}
	.footer-links a {
		color: #fff;
		text-decoration: none;
	}
	.footer-links a:hover {
		text-decoration: underline;
	}
	.social-media a {
		color: #fff;
		margin: 0 0.5rem;
		font-size: 1.5rem;
	}
	.social-media a:hover {
		color: #ddd;
	}
</style>
