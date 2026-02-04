<template>
	<ul>
		<li>
			<NuxtLink v-bind:to="{name: 'fetchTimestampWithKey'}">
				fetchTimestampWithKeyページへ
			</NuxtLink>
		</li>
		<li>
			<NuxtLink v-bind:to="{name: 'fetchTimestampWithCachedController'}">
				fetchTimestampWithCachedControllerページへ
			</NuxtLink>
		</li>
	</ul>
</template>
