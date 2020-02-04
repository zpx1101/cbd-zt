<template>
	<div class="">
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="活动名称">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	name: "Index",
	data(){
		return {
			form:{
				name: 'test'
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
