<script setup lang="ts">
const { enabled } = usePreviewMode();
const timestamp = ref("まだ");
const { data } = await useFetch<any>(
	"/api/getTimestamp", 
	{
		key: "timestampWithKey"
	}
);
timestamp.value = data.value.timestamp;
</script>

<template>
	<p>{{ timestamp }}</p>
	<p v-if="enabled">現在プレビューモードです。</p>
	<p>
		<NuxtLink v-bind:to="{name: 'index'}">
			戻る
		</NuxtLink>
	</p>
</template>
