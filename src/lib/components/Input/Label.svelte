<script lang="ts">
	interface Properties {
		for: string;
		label: string;
		hidden?: boolean;
	}

	const { for: id, label  }: Properties = $props();
</script>

<label class="text-sm text-summit" for={id}>{label}</label>
