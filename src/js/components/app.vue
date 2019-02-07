<template>
	<div>
		<h1>message from vue component. {{ message }}</h1>
		<child-component title="true" :data="this.data" :obj="this.parentObject"></child-component>
	</div>
</template>

<script>
import child from './childComponent.vue';
export default {
	name: 'app',
	components: {
		'child-component': child
	},
	data() {
		return {
			message: 'Hello, Vue!',
			data: ['a', 'b', 'c', 'd'],
			parentObject: {
				name: 'Josh',
				age: 26,
				job: 'web master'
			}
		};
	}
};
</script>
