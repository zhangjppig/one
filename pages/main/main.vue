<template>
	<view>
		<XiaoJi
			:xiaoJiInfo="xiaoJiInfo[0]"
		></XiaoJi>
		<view class="panel-wrap" v-for="item in panelsInfo" :key='item.id'>
			<Panel :pp='item'></Panel>
		</view>
	</view>
</template>

<script>
	import XiaoJi from '../../components/xiaoji.vue'
	import Panel from '../../components/panel.vue'
	
	import { mock_xiaoJi } from '../../static/mock/mock_xiaoJi.js'
	import { mock_mainPage } from '../../static/mock/mock_mainPage.js'
	
	export default {
		components: { XiaoJi, Panel },
		data() {
			return {
				xiaoJiInfo: null,
				panelsInfo: null
			}
		},
		onLoad() {
			this.getXiaoJiInfo()
			this.getPanelsInfo()
		},
		methods: {
			getXiaoJiInfo () {
				this.xiaoJiInfo = mock_xiaoJi
			},
			getPanelsInfo () {
				this.panelsInfo = mock_mainPage
			}
		}
	}
</script>

<style lang="stylus" scoped>

</style>
