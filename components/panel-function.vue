<template>
	<view>
		
		<!-- 用于小列表 -->
		<view class="list-function" v-if="category === 1">
			<image src="../static/icon/comment-35.png" mode=""></image>
			<image :src="likeSrc2" @tap="handleLike" mode=""></image>
			<text>{{info.like_num}}</text>
		</view>
		
		<!-- 用于自定义 tab-bar -->
		<view class="tab-bar-function" v-else-if="category === 5">
			<image class="like" :src="likeSrc3" @tap="handleLike" mode=""></image>
			<text>{{info.like_num}}</text>
			<image class="comment" src="../static/icon/comment-44.png" mode=""></image>
			<text>{{info.comment_num}}</text>
			<image class="share" @tap="handleShare" src="../static/icon/share-44.png" mode=""></image>
		</view>
		
		<!-- 用于大列表 -->
		<view class="panel-function" :class="{ 'half': category === 2}" v-else>
			<image class="function-icon" @tap="handleEdit" v-if="category === 4" src="../static/icon/pen.png" mode=""></image>
			<image class="function-icon" @tap="handleCollect" v-if="category === 4" :src="collectSrc" mode=""></image>
			<view class="like-wrap" @tap="handleLike">
				<image class="function-icon" :src="likeSrc" mode=""></image>
				<text class="function-text">{{info.like_num}}</text>
			</view>
			<image class="function-icon" @tap="handleShare" src="../static/icon/share.png" mode=""></image>
		</view>
	</view>

</template>

<script>
	export default {
		props: {
			info: {
				type: Object,
				default () {
					return {
						like: false,
						like_num: 0,
						collect: false,
						comment_num: 0
					}
				}
			},
			category: {
				type: Number,
				default: 4
			}
		},
		data() {
			return {
				isCollect: false,
				isLike: false
			}
		},
		computed: {
			collectSrc () {
				if (!this.info) return
				return this.isCollect ? '/static/icon/collect_a.png' : '/static/icon/collect.png'
			},
			likeSrc () {
				if (!this.info) return
				return this.isLike ? '/static/icon/like_a.png' : '/static/icon/like.png'
			},
			likeSrc2 () {
				if (!this.info) return
				return this.isLike ? '/static/icon/like-35_a.png' : '/static/icon/like-35.png'
			},
			likeSrc3 () {
				if (!this.info) return
				return this.isLike ? '/static/icon/like-44_a.png' : '/static/icon/like-44.png'
			},
		},
		created () {
			this.isCollect = this.info && this.info.collect
			this.isLike = this.info && this.info.like
		},
		methods: {
			handleEdit () {
				this.$emit('onEdit')
			},
			handleCollect () {
				this.isCollect = !this.isCollect
				this.$emit('onCollect', this.isCollect)
			},
			handleLike (e) {
				this.isLike = !this.isLike
				this.$emit('onLike', this.isLike)
			},
			handleShare () {
				this.$emit('onShare')
			},
		}
	}
</script>

<style lang="stylus" scoped>
	
	.list-function
		display flex
		align-items center
		height 35upx
		font-size 10px
		color #888
		image
			width 35upx
			height 35upx
			margin-right 40upx
		image+image
			margin-right 20upx
			
	.tab-bar-function
		height 64upx
		image
			margin-top 10upx
			width 44upx
			height 44upx
		.comment
			padding-left 36upx
		.share
			padding-left 50upx
		text
			vertical-align top
			font-size 12px
			color #aaa
			
	.panel-function
		display flex
		flex-direction row
		align-items center
		width 440upx
		justify-content space-between
		.like-wrap
			display flex
			flex-direction row
			align-items center
		.function-icon
			display inline-block
			width 50upx
			height 50upx
		.function-text
			margin-left 10upx
			font-size 14px
			line-height 50upx
			color rgb(190, 190, 190)
	.panel-function.half
		width 200upx
</style>
