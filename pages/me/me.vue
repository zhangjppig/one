<template>
	<view class="me">
		
		<!-- part 1 -->
		<view class="me-cardinal">
			<image :src="avatar" mode=""></image>
			<text>{{nickName}}</text>
			<view class="xiaoji-wrap">
				<ScrollXiaoji></ScrollXiaoji>
			</view>
		</view>
		
		<!-- part 2 我的收藏 -->
		<view class="me-collection">
			<text class="sub-title">我的收藏</text>
			<view class="collection-content">
				<view
					class="collection-item"
					v-for="(item, index) in collectionText"
					:id="index"
					:key="index"
					@tap="toCollectionDetail"
				>
					<image :src="collectionIcon[index]" mode=""></image>
					<text>{{item}}</text>
				</view>
			</view>

		</view>
		
		<!-- part 3 我的关注 -->
		<view class="me-list me-follow">
			<image src="/static/icon/guanzhu.png" mode=""></image>
			<text class="sub-title">我的关注</text>
			<text class="num">{{followNumber}}</text>
			<image src="/static/icon/gengduo.png" mode=""></image>
		</view>
		
		<!-- part 4 歌单 -->
		<view class="me-list me-song">
			<image src="/static/icon/gedan.png" mode=""></image>
			<text class="sub-title">歌单</text>
			<image src="/static/icon/gengduo.png" mode=""></image>
		</view>
		
		<!-- part 5 我的打赏 -->
		<view class="me-list me-song">
			<image src="/static/icon/dashang.png" mode=""></image>
			<text class="sub-title">我的打赏</text>
			<image src="/static/icon/gengduo.png" mode=""></image>
		</view>
		
	</view>
</template>

<script>
	import ScrollXiaoji from '../../components/scroll-xiaoji.vue'
	
	export default {
		components: { ScrollXiaoji },
		data() {
			return {
				avatar: 'https://img1.sycdn.imooc.com/5e9993b90001ada905000500-140-140.jpg',
				nickName: '玉脸小肥龙',
				collectionIcon: [
					'/static/icon/tuwen-60.png',
					'/static/icon/wenzhang-60.png',
					'/static/icon/yinyue-60.png',
					'/static/icon/yingshi-60.png',
					'/static/icon/diantai-60.png',
				],
				collectionText: [ '图文', '文章', '音乐', '影视', '电台' ],
				followNumber: 0,
				skeletonShow: true,
			}
		},
		onLoad () {
			setTimeout(() => {
				this.skeletonShow = false
			}, 1800);
		},
		methods: {
			toCollectionDetail (e) {
				let { currentTarget: { id } } = e
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.me
		width 100%
		height 100%
		font-size 14px
		color #999
		background-color rgb(242, 242, 247)
		.sub-title
			font-size 15px
		.me-cardinal
			display flex
			flex-direction column
			align-items center
			width 100%
			height 720upx
			background-image url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589022173082&di=38f3842a81d9e3c0ed4cadb1a01a3742&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fcq%2Fpics%2Fhv1%2F108%2F205%2F1738%2F113065833.jpg')
			background-size cover
			image
				display block
				margin-top 120upx
				width 120upx
				height 120upx
				border 2px solid #FFFFFF
				border-radius 50%
			text
				margin-top 25upx
				margin-bottom 65upx
				font-size 14px
				color #FFFFFF
			.xiaoji-wrap
				height 264upx
				width 750upx
		.me-collection
			display flex
			flex-direction column
			margin-top 10px
			padding 16upx 0
			width 100%
			height 270upx
			box-sizing border-box
			background-color rgb(252, 252, 252)
			.sub-title
				flex 0 0 15px
				padding-left 40upx
				color #666
			.collection-content
				flex 1
				display flex
				padding 0 70upx
				justify-content space-between
				align-items center
				.collection-item
					display flex
					flex-direction column
					image
						margin-bottom 7px
						width 60upx
						height 60upx
		.me-list
			display flex
			align-items center
			margin-top 10px
			padding 0 30upx
			width 100%
			height 100upx
			box-sizing border-box
			background-color rgb(252, 252, 252)
			image
				flex 0 0 50upx
				width 50upx
				height 50upx
			.sub-title
				flex 1
				padding-left 20upx
			.num
				padding-right 10upx
</style>
