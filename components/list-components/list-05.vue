<template>
	<view class="list-wrap">
		<view class="poster-wrap">
			<image class="poster" :src="info.poster" mode=""></image>
			<text class="title">{{info.title}}</text>
		</view>
		<view class="panel-function-wrap">
			<view class="function-left">
				<image class="function-icon" :src="info.avatar" mode=""></image>
				<text class="function-text">{{info.author}}</text>
			</view>
			<view class="function-right">
				<PanelFunction :info="info" :category="2"></PanelFunction>
			</view>
		</view>
	</view>
</template>

<script>
	import PanelFunction from '../panel-function.vue'
	
	export default {
		components: { PanelFunction },
		props: {
			info: {
				type: Object,
				default () {
					return {
						id: '2049',
						category: 7,
						title: '永远热泪盈眶',
						author: '李惠颖',
						avatar: '/static/avatar/1.png',
						date: '4月28日',
						like: true,
						like_num: 1267,
						poster: 'http://a2.att.hudong.com/41/58/01300000218919121847580967832.jpg',
						desc: ''
					}
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus" scoped>
	.poster-wrap
		position relative
		margin-bottom 20px
		width 100%
		height 400upx
		.poster
			display block
			width 100%
			height 400upx
			border-radius 10px
		.title
			position absolute
			bottom 40rpx
			left 20rpx
			color #FFFFFF
	.panel-function-wrap
		display flex
		margin-bottom 20px
		flex-direction row
		align-items center
		box-sizing border-box
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
			flex 0 0 200upx
			justify-content space-between
</style>
