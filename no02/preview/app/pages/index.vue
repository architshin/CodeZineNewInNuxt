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

const onPreviewOff = () => {
	enabled.value = false;
};
</script>

<template>
	<p>{{ timestamp }}</p>
	<p v-if="enabled">
		<button v-on:click="onPreviewOff">プレビューモードを解除</button>
	</p>
	<p>
		<NuxtLink v-bind:to="{name: 'result'}">
			表示
		</NuxtLink>
	</p>
</template>
