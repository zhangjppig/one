<template>
	<view>
		
		<!-- part 6 footer-wrap -->
		<view class="footer-wrap">
			<ArticleTabBar></ArticleTabBar>
		</view>
		
		<view class="article-detail">
			<!-- part 1 header-wrap -->
			<view class="header-wrap">
				<ArticleHeader
					:singer="info.singer"
					:albumName="info.albumName"
					:albumPic="info.albumPic"
					:coverPic="info.coverPic"
					:songUrl='info.songUrl'
					:songName='info.songName'
				/>
			</view>
			
			<!-- part 2 article-wrap -->
			<view class="article-wrap">
				<ArticleBody
					:title="info.title"
					:author="info.author"
					:article="info.article"
				/>
			</view>
			
			<!-- part 3 author-wrap -->
			<view class="author-wrap">
				<text class="list-title">作者</text>
				<List01 category="square-button"></List01>
			</view>
			
			<!-- part 4 recommend-wrap -->
			<view class="recommend-wrap">
				<text class="list-title">相关推荐</text>
				<List01 str="音乐"></List01>
				<List01 str="音乐"></List01>
				<List01 str="音乐"></List01>
			</view>
			
			<!-- part 5 comment-wrap -->
			<view class="comment-wrap">
				<text class="list-title">评论列表</text>
				<view class="comment-item">
					<ComentList :info="{ 'like': true }"></ComentList>
				</view>
				<view class="comment-item">
					<ComentList :info="{ 'like': true }"></ComentList>
				</view>
				<view class="comment-item">
					<ComentList :info="{ 'like': true }"></ComentList>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import ArticleHeader from '../../components/article-header.vue'
	import ArticleBody from '../../components/article-body.vue'
	import ArticleTabBar from '../../components/article-tab-bar.vue'
	import List01 from '../../components/list-components/list-01.vue'
	import ComentList from '../../components/list-components/comment-list.vue'
	
	import { mock_articlesMusic } from '../../static/mock/mock_articlesMusic.js'
	
	export default {
		components: {
			ArticleHeader, ArticleBody, ArticleTabBar, List01, ComentList
		},
		data() {
			return {
				info: '',
				id: 0
			}
		},
		onLoad ({ id }) {
			this.id = id
			this.getArticleInfo()
		},
		methods: {
			getArticleInfo () {
				let id = this.id % 4
				this.info = mock_articlesMusic[id]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.article-detail
		position relative
		background-color #FFFFFF
		.list-title
			display inline-block
			padding-bottom 20upx
			margin-bottom 20upx
			font-size 16px
			color #333333
			border-bottom 5px solid #000000
		.header-wrap
			padding 0
		.comment-wrap
			.comment-item+.comment-item
				border-top 1px solid #eee
			
	.footer-wrap
		position fixed
		z-index 10
		bottom 0
		padding 0
	// 天才~
	.footer-wrap + .article-detail::after
			display block
			height 100upx
			content ' '
	// 天才
	.article-detail > view + view
		padding 0 40upx
		margin-top 10px
</style>
