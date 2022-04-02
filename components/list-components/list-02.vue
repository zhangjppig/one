<template>

	<view class="list2-wrap">
		
		<!-- part 1 -->
		<view class="pic-wrap">
			<image class="bg-pic" :src="pic" mode=""></image>
			<view class="edit-wrap" v-if="showEdit" @tap="handleEdit">
				<image class="icon" src="../../static/icon/pen-xiaoji-40.png" mode=""></image>
				<text>制作小记</text>
			</view>
		</view>
		
		<!-- part 2 -->
		<view class="text-wrap">
			{{text}}
		</view>
		
	</view>

</template>

<script>
	export default {
		props: {
			pic: { type: String, default: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589110811911&di=f7dc0c6f1f35e008193b2a275cf6af87&imgtype=0&src=http%3A%2F%2Fimage20.it168.com%2Fpicshow%2F900x675%2F20121210%2F2012121010345397323.jpg' },
			text: { type: String, default: '我恨自己别无选择，就像站在烈日骄阳大桥上。' },
			showEdit: { type: Boolean, default: false }
		},
		data() {
			return {
				
			}
		},
		created () {
			
		},
		methods: {
			handleEdit () {
				
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.list2-wrap
		display flex
		flex-direction column
		box-sizing border-box
		width 280upx
		height 264upx
		border 4upx solid #FFFFFF
		border-radius 4upx
		overflow hidden
		background-color #DDDDDD
		.pic-wrap
			position relative
			width 272upx
			height 208upx
			.bg-pic
				width 272upx
				height 208upx
			.edit-wrap
				display flex
				position absolute
				justify-content space-between
				align-items center
				top 50%
				left 50%
				transform translate(-50%, -50%)
				box-sizing  border-box
				padding 0 30upx
				width 224upx
				height 58upx
				background-color rgb(151, 151, 151)
				border-radius 2px
				.icon
					width 40upx
					height 40upx
				text
					height 40upx
					color #FFFFFF
		.text-wrap
			box-sizing border-box
			height 50upx
			width 100%
			padding 0 18upx
			color #666
			font-size 10px
			line-height 50upx
			overflow hidden
			text-overflow ellipsis
			white-space nowrap
</style>
