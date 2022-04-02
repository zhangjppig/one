<template>
	<view class="article-body">
		<text class="title">{{title}}</text>
		<text class="author">文 / {{author}}</text>
		<text class="article">{{article}}</text>
	</view>
</template>

<script>
	export default {
		props: [ 'title', 'author', 'article' ],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus" scoped>
	.article-body
		margin 70upx 0
		text
			display block
		.title
			margin-bottom 85upx
			max-height 70px
			font-size 23px
			font-weight 600
			line-height 35px
			letter-spacing 1px
		.author
			margin-bottom 85upx
			font-size 14px
			color #666
		.article
			font-size 19px
			line-height 35px
			color #333
</style>
