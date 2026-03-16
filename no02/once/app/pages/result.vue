<script setup lang="ts">
const appTimestampState = useState<Date>("appTimestamp");
const appTimestampStateNavi = useState<Date>("appTimestampNavi");
const indexTimestampState = useState<Date>("indexTimestamp");
const indexTimestampStateNavi = useState<Date>("indexTimestampNavi");
const timestampState = useState<Date>("resultTimestamp");
const timestampStateNavi = useState<Date>("resultTimestampNavi");
callOnce(
	() => {
		if(import.meta.client) {
			console.log("result.vueのcallOnce(CSR)");
		}
		if(import.meta.server) {
			console.log("result.vueのcallOnce(SSR)");
		}
		timestampState.value = new Date();
	}
);
callOnce(
	() => {
		if(import.meta.client) {
			console.log("result.vueのcallOnceNavigation(CSR)");
		}
		if(import.meta.server) {
			console.log("result.vueのcallOnceNavigation(SSR)");
		}
		timestampStateNavi.value = new Date();
	},
	{ mode: "navigation" }
);
</script>

<template>
	<section>
		<p>appで用意した時刻 {{ appTimestampState }}</p>
		<p>appで用意した時刻(ナビゲーション) {{ appTimestampStateNavi }}</p>
		<p>indexで用意した時刻 {{ indexTimestampState }}</p>
		<p>indexで用意した時刻(ナビゲーション) {{ indexTimestampStateNavi }}</p>
		<p>resultで用意した時刻 {{ timestampState }}</p>
		<p>resultで用意した時刻(ナビゲーション) {{ timestampStateNavi }}</p>
	</section>
	<section>
		<NuxtLink v-bind:to="{name: 'index'}">
			戻る
		</NuxtLink>
	</section>
</template>
