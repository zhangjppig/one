<template>
	<view class="article-header">
		<image class="bg-pic" :src="coverPic" mode="aspectFill"></image>
		<view class="album-wrap" @tap="play">
			<view class="disc" :class="{'active': isPlaying}"></view>
			<image :src="albumPic" mode=""></image>
		</view>
		<view class="desc-wrap">
			{{singer}} | {{albumName}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			singer: { type: String, default: '' },
			albumName: { type: String, default: '' },
			albumPic: { type: String, default: '' },
			coverPic: { type: String, default: '' },
			songUrl: { type: String, default: 'http://music.163.com/song/media/outer/url?id=1325896662.mp3'},
			songName: { type: String, default: "小太阳" }
		},
		data() {
			return {
				isPlaying: false
			}
		},
		created () {
			// 天才用节流
			// #ifndef H5
			this.playThrottleSong = this.throttle(this._playAndPause, 500)
			// #endif
		},
		methods: {

			// #ifndef H5
			play () {
				this.playThrottleSong({
					url: this.songUrl,
					title: this.songName,
					singer: this.singer
				})
			},
			_playAndPause (opt) {
				this.$store.dispatch('playAndPauseForElse', opt)
				this.isPlaying = this.$store.state.isMusicPlaying
				console.log(this.isPlaying)
			},
			// #endif
			
			// #ifdef H5
			play () {
				this.$store.dispatch('playAndPauseForH5', this.songUrl)
				this.isPlaying = this.$store.state.isMusicPlaying
				console.log(this.isPlaying)
			},
			// #endif
		}
	}
</script>

<style lang="stylus">
	.article-header
		position relative
		display flex
		flex-direction column
		align-items center
		overflow hidden
		width 750upx
		height 480upx
		.album-wrap
			margin-top 145upx
			z-index 1
			width 240upx
			height 240upx
			.disc
				position absolute
				width 240upx
				height 240upx
				background-image linear-gradient(#000, #999)
				border-radius 50%
				transform translateX(0upx)
				transition transform 0.5s ease-out
			.disc.active
				transform translateX(50upx)
				transition transform 0.5s ease
			image
				position absolute
				z-index 10
				width 240upx
				height 240upx
		.desc-wrap
			margin-top 25upx
			z-index 1
			font-size 14px
			color #eee
		.bg-pic
			position absolute
			z-index 0
			width 750upx
			height 480upx
			filter: blur(5px)
</style>
