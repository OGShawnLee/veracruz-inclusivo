<script lang="ts">
  import { concatClassName } from "$lib";
	import type { Snippet } from "svelte";

  interface Properties {
    class?: string;
    children: Snippet;
  }
  const { class: className = "", children }: Properties = $props();
</script>

<div class={concatClassName("flex flex-col gap-3", className)}>
  {@render children()}
</div>