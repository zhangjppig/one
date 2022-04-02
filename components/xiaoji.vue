<template>
	<view class="xiao-ji-wrapper">
		<view class="xiao-ji-main" @tap="handleXiaojiTap">
			<image :src="info.url" mode=""></image>
			<text class="author">摄影 | {{info.photographer}}</text>
			<text class="text">{{info.text}}</text>
			<text class="author">{{authorAndArticle}}</text>
		</view>
		<view class="xiao-ji-function">
			<view class="function-left">
				<image class="function-icon" src="../static/icon/compass.png" mode=""></image>
				<text class="function-text">小记</text>
			</view>
			<view class="function-right">
				<PanelFunction :info="info" 
					@onEdit="handleEdit"
					@onCollect="handleCollect"
					@onLike="handleLike"
					@onShare="handleShare"
				/>
			</view>
		</view>
	</view>
</template>

<script>
	import PanelFunction from './panel-function.vue'
	
	export default {
		components:{ PanelFunction },
		props: {
			xiaoJiInfo: {
				type: Object
			}
		},
		data() {
			return {
				info: null
			}
		},
		computed: {
			authorAndArticle () {
				if (!this.info) return
				if (this.info.article) {
					return `${this.info.author} 《${this.info.article}》`
				}
				return this.info.author
			}
		},
		created() {
			this.info = this.xiaoJiInfo
		},
		mounted() {  // 这个生命周期是为了坑爹的小程序
			this.info = this.xiaoJiInfo
		},
		methods: {
			handleEdit () {
				console.log('api - edit')
			},
			handleCollect (isCollect) {
				console.log('api - isCollect:', isCollect)
			},
			handleLike (isLike) {
				console.log('api - isLike:', isLike)
			},
			handleShare () {
				uni.showToast({
					title: 'shared',
					mask: true,
					icon: 'none'
				})
				console.log('api - share')
			},
			handleXiaojiTap () {
				uni.navigateTo({
					url: '/pages/xiaoji/xiaoji?id=' + '11'
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.xiao-ji-wrapper
		display flex
		flex-direction column
		justify-content center
		align-items center
		background-color rgb(255,255, 255)
		.xiao-ji-main
			display flex
			flex-direction column
			justify-content center
			align-items center
			overflow hidden
			margin 5px 0
			width 680upx
			border-radius 10px
			box-shadow 0 0 10px rgba(0, 0, 0, 0.05)
			image
				display block
				width 100%
				height 454upx
			.text
				margin-bottom 50px
				width 85%
				line-height 28px
				color rgb(90, 90, 90)
				font-size 16px
			.author
				margin 14px 0 30px 0
				color rgb(190, 190, 190)
				font-size 14px
		.xiao-ji-function
			display flex
			flex-direction row
			align-items center
			margin-top 30upx
			margin-bottom 40upx
			padding 0 16upx 0 24upx
			box-sizing border-box
			width 680upx
			height 50upx
			.function-icon
				display inline-block
				width 50upx
				height 50upx
			.function-text
				margin-left 10upx
				font-size 14px
				line-height 50upx
				color rgb(190, 190, 190)
			.function-left
				display flex
				flex-direction row
				align-items center
				flex 1
			.function-right
				display flex
				flex-direction row
				align-items center
				flex 0 0 440upx
</style>
