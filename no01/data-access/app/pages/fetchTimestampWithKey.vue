<script setup>
const timestamp = ref("まだ");
const { data } = await useFetch(
	"/api/getTimestamp", 
	{
		key: "timestampWithKey"
	}
);
timestamp.value = data.value.timestamp;
</script>

<template>
	<p>{{ timestamp }}</p>
	<p>
		<NuxtLink v-bind:to="{name: 'fetchTimestampWithKeySub'}">
			fetchTimestampWithKeySubページへ
		</NuxtLink>
	</p>
	<p>
		<NuxtLink v-bind:to="{name: 'index'}">
			戻る
		</NuxtLink>
	</p>
</template>
