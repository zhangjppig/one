<template>
	
	<!-- full -->
	<view class="list-wrap full" v-if="size==='full'">
		<view class="img-wrap">
			<image :src="img" mode="aspectFill"></image>
		</view>
		<view class="desc-wrap">
			<text class="title">{{title}}</text>
		</view>
	</view>
	
	<!-- half -->
	<view class="list-wrap half" v-else-if="size==='half'">
		<view class="img-wrap">
			<image :src="img" mode="aspectFill"></image>
		</view>
		<view class="desc-wrap">
			<text class="title">{{title}}</text>
		</view>
	</view>
	
	<!-- masonry -->
	<view class="list-wrap masonry" v-else-if="size==='masonry'" @tap="playAndPause">
		<view class="img-wrap">
			<!-- #ifndef MP-WEIXIN -->
				<image :src="img" mode="widthFix" ref="img"></image>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
				<image :src="img" mode="aspectFill"></image>
			<!-- #endif -->
		</view>
		<view  ref="rest">
			<view class="like-wrap"></view>
			<view class="desc-wrap">
				<text class="text">{{title}}</text>
			</view>
			<view class="detail-wrap">
				<text>{{author}}</text>
				<text>{{date}} · {{location}}</text>
			</view>
		</view>

	</view>
	
</template>

<script>
	export default {
		props: {
			size: { type: String, default: 'full' },
			img: { type: String, default: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589110811914&di=e4593d5ea8d86512fffd126976c899c5&imgtype=0&src=http%3A%2F%2Fwww.23book.com%2Fupload%2F2017%2F07%2F17%2Fea036ba61fd460db.jpg' },
			title: { type: String, default: '标题' },
			author: { type: String, default: '作者' },
			date: { type: String, default: '日期' },
			location: { type: String, default: '乌鲁木齐' },
		},
		data() {
			return {
				songUrl: 'https://isure.stream.qqmusic.qq.com/C400003bmbRk2sBeIl.m4a?guid=4202472160&vkey=4D383BEDF34FA75F2D6415463E41CD4D1424FCE6686E671BC7970C83B2D2A15A006CB2DDF9AD80329F3E023F1A6199107E57B5CEF5578404&uin=0&fromtag=66',
			}
		},
		methods: {
			playAndPause () {
				this.$store.dispatch('playAndPause', this.songUrl)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.list-wrap
		border-radius 10px
		overflow hidden
		box-shadow 0 0 10px rgba(0, 0, 0, 0.05)
		image
			display block
			// border-radius 10px
	.list-wrap.full
		width 100%
		height 480upx
		.img-wrap
			width 100%
			height 400upx
			image
				width 100%
				height 100%
		.desc-wrap
			width 100%
			height 80upx
			line-height 80upx
			.title
				display block
				padding-left 50upx
				font-size 16px
				font-weight 600
				color #333
				overflow hidden
				text-overflow ellipsis
				white-space nowrap
	.list-wrap.half
		width 316upx
		height 290upx
		.img-wrap
			width 100%
			height 208upx
			image
				width 100%
				height 208upx
		.desc-wrap
			width 100%
			height 80upx
			line-height 80upx
			text-align center
			.title
				padding 0
				color rgb(146, 146, 146)
				font-size 12px
				font-weight normal
				overflow hidden
				text-overflow ellipsis
				white-space nowrap
	.list-wrap.masonry
		position relative
		width 330upx
		border-radius 10px
		overflow hidden
		box-shadow 0 0 10px rgba(0, 0, 0, 0.15)
		/* #ifdef MP-WEIXIN */
		.img-wrap
			width 330upx
			height 330upx
			image
				width 330upx
				height 330upx
		/* #endif */
		/* #ifndef MP-WEIXIN */
		.img-wrap
			width 100%
			image
				width 100%
		/* #endif */
		.like-wrap
			position absolute
			right 20upx
			top 20upx
			width 45upx
			height 45upx
			line-height 45upx
			border-radius 50%
			background-color rgba(0, 0, 0, 0.1)
			font-size 45upx
			color rgba(255, 255, 255, 0.15)
			text-align center
		.desc-wrap
			margin 50upx 20upx
			// box-sizing border-box
			// height 42px
			line-height 20px
			overflow hidden
			display -webkit-box
			-webkit-line-clamp 2
			-webkit-box-orient vertical
			.text
				font-size 14px
				font-weight 500
		.detail-wrap
			color rgb(190, 190, 190)
			font-size 12px
			display block
			margin 30upx 20upx
			overflow hidden
			text-overflow ellipsis
			white-space nowrap
			text
				display block
</style>
