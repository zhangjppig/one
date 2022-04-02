<template>
	<view class="comment-list">
		
		<view class="detail-wrap">
			<image :src="avatar" mode=""></image>
			<text class="author">{{author}}</text>
			<text class="date">{{date}}</text>
		</view>
		<view class="content-wrap">
			<text>{{content}}</text>
		</view>
		<view class="function-wrap">
			<view>
				<ListFuntion :category="1"></ListFuntion>
			</view>
		</view>
	</view>
</template>

<script>
	import ListFuntion from '../panel-function.vue'
	
	export default {
		components: { ListFuntion },
		props: {
			avatar: {
				type: String,
				default: 'https://img2.mukewang.com/5e9993b90001ada905000500-370-370.jpg'
			},
			author: {
				type: String,
				default: '周慧敏'
			},
			date: {
				type: String,
				default: '2020.05.06 06:15'
			},
			content: {
				type: String,
				default: '刮风这天，我试过握着你手。但偏偏，雨渐渐，打到我看你不见。'
			},
			likeNum: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.comment-list
		padding 30upx 0
		.detail-wrap
			display flex
			align-items center
			height 40upx
			image
				width 40upx
				height 40upx
				border-radius 50%
			text
				font-size 15px
				color #999999
			.author
				flex 1
				padding-left 25upx
		.content-wrap
			margin 20upx 0 20upx 40upx
			line-height 25px
			font-size 15px
			color #666
		.function-wrap
			position relative
			height 35upx
		.function-wrap > view
				position absolute
				right 60upx
</style>
