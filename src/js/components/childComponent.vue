<template>
	<div>
		<h3>{{ message }}</h3>
		<p>a value of title prop is "{{ title }}"</p>
		<div>{{ mydata }}</div>
		<ul>
			<li v-for="(value, key) in myobj">{{ key }} : {{ value }}</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'child',
	props:['title', 'data', 'obj'],
	mounted(){
		this.data.forEach(x => this.mydata.push(x));
		this.myobj = this.obj;
	},
	data () {
		return {
			message: 'hello from child component',
			mydata: [],
			myobj: {}
		}
	}
}
</script>
