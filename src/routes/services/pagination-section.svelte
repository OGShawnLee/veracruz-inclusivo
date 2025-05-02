<script lang="ts">
	import { goto } from '$app/navigation';
	import { Pagination } from 'bits-ui';
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	let { count, page = $bindable(), perPage }: { count: number; page: number, perPage: number } = $props();
</script>

<Pagination.Root {count} bind:page {perPage} onPageChange={(e) => {
  const url = new URL(window.location.href);
  url.searchParams.set('page', e.toString());
  goto(url.toString(), {
    noScroll: true
  });
}}>
	{#snippet children({ pages, range })}
		<div class="my-16 flex items-center justify-center">
			<Pagination.PrevButton class="button-chevron sm:mr-8">
				<ChevronLeft/>
			</Pagination.PrevButton>
			<div class="flex items-center gap-2.5">
				{#each pages as page (page.key)}
					{#if page.type === 'ellipsis'}
						<div class="text-foreground-alt select-none text-[15px] font-medium">...</div>
					{:else}
						<Pagination.Page
							class="button-square rounded-md font-medium select-none disabled:(cursor-not-allowed opacity-50) hover:(bg-ground-2 dark:bg-ground-2-dark) data-[selected]:(bg-summit text-summit-dark dark:(bg-summit-dark text-summit) hover:bg-summit hover:dark:bg-summit-dark) active:scale-97.5"
              {page}   
            >
							{page.value}
						</Pagination.Page>
					{/if}
				{/each}
			</div>
			<Pagination.NextButton class="button-chevron sm:ml-8">
				<ChevronRight/>
			</Pagination.NextButton>
		</div>
		<p class="text-muted-foreground text-center text-[13px]">
			Mostrando {range.start} - {range.end}
		</p>
	{/snippet}
</Pagination.Root>

<style>
  :global(.button-chevron) {
    --uno: "button-square rounded-md hover:(bg-ground-2 dark:bg-ground-2-dark) disabled:(text-common-dark dark:text-common cursor-not-allowed hover:bg-transparent) active:scale-97.5";
  }
</style>
