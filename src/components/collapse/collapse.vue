<template>	
	<div role="tabList" class="co-collapse">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'coCollapse',

		props: {
			accordion: Boolean,
			value: {
				type: [Array, Number, String],
				default() {
					return []
				}
			}
		},
		data() {
			return {
				activeNames: [].concat(this.value)
			}
		},
		provide() {
			return {
				collapse: this
			}
		},
		watch: {
			value(val) {
				this.activeNames = [].concat(val)
			}
		},
		methods: {
			setActiveNames(activeNames) {
				activeNames = [].concat(activeNames);
				this.activeNames = activeNames;

        		this.$emit('change', activeNames);
			},
			handleItemEvents(item) {
				// nothing add collapse effect of condition.
				if(this.accordion) {
					this.setActiveNames(this.activeNames[0] === item.name ? '' : item.name);
				}
				else {
					let activeNames = this.activeNames.slice(0);
					let index = activeNames.indexOf(item.name);

					if(index > -1) activeNames.splice(index,1);
					else activeNames.push(item.name);

					this.setActiveNames(activeNames)
				}
			}
		},
		created() {
			this.$on('item-click',this.handleItemEvents);
		}
	} 
</script>
<style>
	.co-collapse{
		border-top: 1px solid #ebeef5;
	}
</style>