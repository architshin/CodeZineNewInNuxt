<script setup lang="ts">
const timestampState = useState<Date>("indexTimestamp");
const timestampStateNavi = useState<Date>("indexTimestampNavi");
callOnce(
  () => {
		if(import.meta.client) {
			console.log("index.vueのcallOnce(CSR)");
		}
		if(import.meta.server) {
			console.log("index.vueのcallOnce(SSR)");
		}
    timestampState.value = new Date();
  }
);
callOnce(
	() => {
		if(import.meta.client) {
			console.log("index.vueのcallOnceNavigation(CSR)");
		}
		if(import.meta.server) {
			console.log("index.vueのcallOnceNavigation(SSR)");
		}
		timestampStateNavi.value = new Date();
	},
	{ mode: "navigation" }
);
const now = ref(new Date());
if(import.meta.client) {
	console.log(`now(CSR): ${now.value}`);
}
if(import.meta.server) {
	console.log(`now(SSR): ${now.value}`);
}
</script>

<template>
	<section>
		<p><time>{{ now }}</time></p>
		<p><NuxtTime v-bind:datetime="now" locale="ja-JP" timeStyle="full"/></p>
		<p><NuxtTime v-bind:datetime="now"/></p>
	</section>
	<section>
		<NuxtLink v-bind:to="{name: 'result'}">
			表示
		</NuxtLink>
	</section>
</template>
