<script setup lang="ts">
const timestampState = useState<Date>("appTimestamp");
const timestampStateNavi = useState<Date>("appTimestampNavi");
callOnce(
	() => {
		if(import.meta.client) {
			console.log("app.vueのcallOnce(CSR)");
		}
		if(import.meta.server) {
			console.log("app.vueのcallOnce(SSR)");
		}
		timestampState.value = new Date();
	}
);
callOnce(
	() => {
		if(import.meta.client) {
			console.log("app.vueのcallOnceNavigation(CSR)");
		}
		if(import.meta.server) {
			console.log("app.vueのcallOnceNavigation(SSR)");
		}
		timestampStateNavi.value = new Date();
	},
	{ mode: "navigation" }
);
</script>

<template>
  <NuxtPage />
</template>
