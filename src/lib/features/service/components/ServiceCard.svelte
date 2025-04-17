<script lang="ts">
  import type { ServiceData } from '@features/service/schema';

  export const { service }: { service: ServiceData } = $props();
</script>

<article class="self-start p-8 bg-ground-0 rounded-xl border border-ground-2 grid gap-4">
  <div class="flex">
    <div class="h-8 px-4 bg-ground-1 rounded-full flex items-center justify-center font-medium">
      {service.phone_number}
    </div>
  </div>
  <h2 class="font-medium text-xl text-summit">{service.name}</h2>
  <div class="flex flex-col gap-1.5">
    <p>{service.description}</p>
    <p class="text-neutral-600">{service.associate_full_name}</p>
    <span class="mt-1.5 text-xs text-neutral-500">
      Creado el {new Date(service.created_at).toLocaleDateString()}
    </span>
  </div>
</article>