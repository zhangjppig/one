<template>
	
	<!-- 指定 category 为 normal -->
	<view class="list-wrap" v-if="category === 'normal'" @tap="toArticleDetail">
		<view class="list-img text" v-if="str">{{str}}</view>
		<image class="list-img" :src="pic" mode="" v-else></image>
		<view class="list-detail">
			<text class="title">{{title}}</text>
			<text class="desc">{{desc}}</text>
		</view>
	</view>
	
	<!-- 指定 category 为 search -->
	<view class="list-wrap search" v-else-if="category === 'search'" @tap="toArticleDetail">
		<image class="list-img" :src="pic" mode=""></image>
		<view class="list-detail">
			<text class="title">{{title}}</text>
			<text class="desc">{{desc}}</text>
		</view>
	</view>
	
	<!-- 指定 category 为 with-botton / square-button -->
	<view class="list-wrap with-botton" v-else @tap="toArticleDetail">
		<image class="list-img" :src="pic" mode=""></image>
		<view class="list-detail">
			<text class="title">{{title}}</text>
			<text class="desc">{{desc}}</text>
		</view>
		<view class="list-button"
			:class="{'square-button': category === 'square-button', 'active': isFollow}"
			@tap.stop="handleButtonTap"
		>{{isFollow ? '已关注' : '关注'}}</view>
	</view>
</template>

<script>
	
	export default {
		props: {
			category: { type: String, default: 'normal' },
			str: { type: String, default: '' },
			title: { type: String, default: '主标题' },
			desc: { type: String, default: '描述细节' },
			pic: { type: String, default: 'https://img2.mukewang.com/5e9993b90001ada905000500-370-370.jpg'},
			follow: { type: Boolean, default: false },
			idx: { type: Number, default: 0 },
		},
		data() {
			return {
				isFollow: false
			}
		},
		created () {
			this.isFollow = this.follow
		},
		methods: {
			toArticleDetail () {
				let self = this
				uni.navigateTo({
					url: '/pages/article-detail/article-detail?id='+self.idx
				})
			},
			handleButtonTap () {
				this.isFollow = !this.isFollow
				this.$emit('onButtonTap', this.isFollow)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.list-wrap
		display flex
		align-items center
		// padding 22upx 0
		width 100%
		height 164upx
		.list-img
			flex 0 0 120upx
			display block
			margin-right 35upx
			height 120upx
			border-radius 6px
		.list-img.text
			flex 0 0 80upx
			box-sizing border-box
			padding-top 15upx
			color #999
		.list-detail
			flex 1
			display flex
			flex-direction column
			height 120upx
			.title
				display block
				padding 10upx 0
				width 525upx
				height 46upx
				line-height 46upx
				font-size 18px
				font-weight 400
				overflow hidden
				text-overflow ellipsis
				white-space nowrap
			.desc
				flex 1
				color rgb(190, 190, 190)
				font-size 14px
				display block
				width 525upx
				overflow hidden
				text-overflow ellipsis
				white-space nowrap
				
	.list-wrap.search
		height 120upx
		.list-img
			flex 0 0 80upx
			height 80upx
		.list-detail
			height 80upx
		.title
			padding 1upx 0
		.desc
			font-size 13px
				
	.list-wrap.with-botton
		.list-img
			flex 0 0 100upx
			height 100upx
			border-radius 50%
		.list-detail
			.title
				width 425upx
				font-size 15px
			.desc
				width 425upx
		.list-button
			flex 0 0 100upx
			height 48upx
			line-height 48upx
			text-align center
			box-sizing border-box
			border 1upx solid rgb(80, 80, 80)
			font-size 13px
			color rgb(80, 80, 80)
			border-radius 48upx
		.list-button.active
			font-size 12px
			color rgb(190, 190, 190)
			border-color rgb(190, 190, 190)
		.list-button.square-button
			flex 0 0 90upx
			height 65upx
			line-height 65upx
			color rgb(190, 190, 190)
			border 1upx solid rgb(190, 190, 190)
			border-radius 5px
		.list-button.square-button.active
			color #FFFFFF
			background-color rgb(80, 80, 80)
</style>
