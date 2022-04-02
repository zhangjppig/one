<template>
	<view>
		<view class="panel-wrap" v-if="info.category !== 7">
			<image
				class="movie-bar"
				v-if="info.category === 6"
				src="/static/icon/movieBar.png"
				style="width: 100%; height: 16px;"
				mode=""
			/>
			<view class="category">
				<text>{{categoryText}}</text>
			</view>
			<text class="title">{{info.title}}</text>
			<text class="author">文 / {{info.author}}</text>
			<text class="desc">{{info.desc}}</text>
			<view class="poster-wrap">
				<image class="poster" :src="info.poster" mode=""></image>
			</view>
			<view class="panel-function-wrap">
				<view class="function-left">
					<text class="function-text">{{info.date}}</text>
				</view>
				<view class="function-right">
					<PanelFunction :info="info" :category="2"
						@onLike="handleLike"
						@onShare="handleShare"
					/>
				</view>
			</view>
		</view>
		<view class="panel-wrap" v-else>
			<view class="category">
				<text>{{categoryText}}</text>
			</view>
				<List05 :info="info"></List05>
		</view>
	</view>
</template>

<script>
	import PanelFunction from './panel-function.vue'
	import List05 from './list-components/list-05.vue'
	
	let panelCategories = [ '阅读', '图文', '专题', '热榜', '问答', '音乐', '影视', '电台', '小记', '作者', '连载', '活动']
	
	export default {
		components:{ PanelFunction, List05 },
		props: [ 'pp' ],
		data() {
			return {
				info: null
			}
		},
		computed: {
			categoryText () {
				return panelCategories[this.info.category]
			},
			likeScr () {
				return this.info.like ? '/static/icon/like_a.png' : '/static/icon/like.png'
			}
		},
		created () {
			this.getInfo()
			// console.log(this.info)
		},
		methods: {
			getInfo () {
				this.info = this.pp
			},
			handleLike (isLike) {
				console.log('api - isLike:', isLike)
			},
			handleShare () {
				console.log('api - share')
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.panel-wrap
		display flex
		flex-direction column
		margin-top 10px
		padding 0 35upx
		background-color rgb(255,255, 255)
		.movie-bar
			margin-top 10px
		.category
			align-self center
			position relative
			margin 20px 0
			box-sizing border-box
			width 60px
			height 16px
			text-align center
			border-top 1px solid rgb(190, 190, 190)
			text
				position absolute
				left 10%
				top -7px
				font-size 14px
				width 80%
				height 16px
				line-height 16px
				color rgb(190, 190, 190)
				background-color #FFFFFF
		.title
			line-height 28px
			color rgb(51, 51, 51)
			font-weight 700
			font-size 20px
		.author
			margin 5px 0 15px 0
			color rgb(190, 190, 190)
			font-size 14px
		.desc
			margin-bottom 10px
			color rgb(120, 120, 120)
			font-size 15px
			line-height 27px
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
