<script lang="ts">
  import type { ServiceData } from '@features/service/schema';
  import { ServiceCategoryEnumeration, ServiceRegionEnumeration } from '@features/service/schema';
  import { type Icon, Earth, Headset } from "lucide-svelte";

  export const { service }: { service: ServiceData } = $props();
  
  function formatPhoneNumber(phoneNumber: string): string {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
  }
</script>

{#snippet badge(label: string, IconComponent?: typeof Icon)}
  <div class="h-8 w-fit px-4 $bg-ground-2 rounded-full flex items-center justify-center gap-2 font-medium">
    {#if IconComponent}
      <IconComponent size={18} strokeWidth={1.75} />
    {/if}
    {label}
  </div>
{/snippet}

<article class="self-start p-8 grid gap-4 $bg-ground-1 border $border-ground-2 rounded-xl">
  <div class="flex items-center flex-wrap gap-2">
    {@render badge(ServiceCategoryEnumeration[service.category])}
    {@render badge("Región " + ServiceRegionEnumeration[service.region], Earth)}
  </div>
  <h2 class="font-medium text-xl $text-summit">{service.name}</h2>
  <div class="flex flex-col gap-1.5">
    <p>{service.description}</p>
    <p>{service.associate_full_name}</p>
    <span class="mt-1.5 text-xs">
      Registrado el {new Date(service.created_at).toLocaleDateString()}
    </span>
  </div>
  {@render badge(formatPhoneNumber(service.phone_number), Headset)}
</article>