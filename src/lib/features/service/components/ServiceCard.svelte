<script lang="ts">
  import type { ServiceData } from '@features/service/schema';
  import { ServiceCategoryEnumeration } from '@features/service/schema';

  export const { service }: { service: ServiceData } = $props();  
</script>

<article class="self-start p-8 grid gap-4 $bg-ground-1 border $border-ground-2 rounded-xl">
  <div class="flex items-center gap-2">
    <div class="h-8 px-4 $bg-ground-2 rounded-full flex items-center justify-center font-medium">
      {ServiceCategoryEnumeration[service.category]}
    </div>
    <div class="h-8 px-4 $bg-ground-2 rounded-full flex items-center justify-center font-medium">
      {service.phone_number}
    </div>
  </div>
  <h2 class="font-medium text-xl $text-summit">{service.name}</h2>
  <div class="flex flex-col gap-1.5">
    <p>{service.description}</p>
    <p>{service.associate_full_name}</p>
    <span class="mt-1.5 text-xs">
      Creado el {new Date(service.created_at).toLocaleDateString()}
    </span>
  </div>
</article>