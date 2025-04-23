<script lang="ts">
	interface Properties {
		for: string;
		label: string;
		hidden?: boolean;
	}

	const { for: id, label, hidden = false  }: Properties = $props();
</script>

<label class="text-sm $text-summit" class:hidden for={id}>{label}</label>
