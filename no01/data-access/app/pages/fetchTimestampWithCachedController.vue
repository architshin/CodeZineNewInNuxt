<script setup>
const timestamp = ref("まだ");
const { data } = await useFetch(
	"/api/getTimestamp", 
	{
		key: "timestampWithCachedController",
		transform(input) {
			return {
				...input,
				fetchedAt: new Date()
			}
		},
		getCachedData: (key, nuxtApp, ctx) => {
			const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
			let returnData = data;
			if(data) {
				const expirationDate = new Date(data.fetchedAt);
				expirationDate.setTime(expirationDate.getTime() + 10000)
				const isExpired = expirationDate.getTime() < Date.now()
				if(isExpired) {
					returnData = undefined;
				}
			}
			return returnData;
		}
	}
);
timestamp.value = data.value.timestamp;
</script>

<template>
	<p>{{ timestamp }}</p>
	<p>
		<NuxtLink v-bind:to="{name: 'index'}">
			戻る
		</NuxtLink>
	</p>
</template>
