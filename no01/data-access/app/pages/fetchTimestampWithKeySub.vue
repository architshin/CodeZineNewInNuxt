<script setup>
const timestamp = ref("まだ");
const timestampWithoutKey = ref("まだ");
const timestampWithRandomKey = ref("まだ");
const { data, clear } = await useFetch(
	"/api/getTimestamp", 
	{
		key: "timestampWithKey"
	}
);
timestamp.value = data.value.timestamp;
const { data: dataWithoutKey } = await useFetch(
	"/api/getTimestamp", 
	{
		key: "timestampWithoutKey"
	}
);
timestampWithoutKey.value = dataWithoutKey.value.timestamp;
const randomKey = ref(Math.random());
const { data: dataWithRandomKey } = await useFetch(
	"/api/getTimestamp", 
	{
		key: computed(
			() => {
				return "timestampWithRandomKey_" + randomKey.value;
			}
		)
	}
);
timestampWithRandomKey.value = dataWithRandomKey.value.timestamp;
</script>

<template>
	<p>{{ timestamp }}</p>
	<p>{{ timestampWithoutKey }}</p>
	<p>{{ timestampWithRandomKey }}</p>
	<p>
		<button v-on:click="clear">クリア</button>
	</p>
	<p>
		<NuxtLink v-bind:to="{name: 'fetchTimestampWithKey'}">
			戻る
		</NuxtLink>
	</p>
</template>
