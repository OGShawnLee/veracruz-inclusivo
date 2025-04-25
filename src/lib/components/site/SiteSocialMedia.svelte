<script lang="ts">
  const links = [
    { icon: "bxl-facebook-square", href: "https://www.facebook.com/veracruzinclusivo", label: 'Facebook' },
    { icon: "bxl-gmail", href: "mailto:veracruzinclusivo@gmail.com", label: 'Gmail' },
    { icon: "bxl-whatsapp", href: "https://wa.me/7821343195", label: 'WhatsApp' },
  ]
</script>

<div class="flex justify-center gap-12 md:ml-auto">
  {#each links as { icon, href, label }}
    <a {href} target="_blank" rel="noopener" aria-label={label}>
      <i class="bx {icon} text-2xl"></i>
    </a>
  {/each}
</div>
