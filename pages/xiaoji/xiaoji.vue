<template>
	<view class="xiaoji">
		
		<view class="xiaoji-pic">
			<image :src="pic" mode="widthFix" style="width: 100%;"></image>
			<view class="photographer">摄影 | {{photographer}}</view>
		</view>
		
		<view class="xiaoji-content" v-if="!isEdit">
			{{text}}
		</view>
		
		<view class="reference" v-if="!isEdit">{{reference}}</view>
		
		<view class="xiaoji-edit" v-if="isEdit">
			<textarea
				v-model="editedTxt"
				placeholder="遇见最好的自己 · 小记"
				auto-height
				focus
			/>
		</view>
		
		<view class="submit" @tap="handleSubmit" v-if="isEdit">
			<image src="../../static/icon/save.png" mode=""></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		props: {
			img: { type: String, default: ' ' },
			text: { type: String, default: '野望无人迹，天涯若比邻，好梦留人睡，芳心处处吻。' },
			photographer: { type: String, default: 'Circle Sharp' },
			reference: { type: String, default: '《种一个地球，奶酪里的曙光》' },
		}, 
		data() {
			return {
				pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589110811911&di=f7dc0c6f1f35e008193b2a275cf6af87&imgtype=0&src=http%3A%2F%2Fimage20.it168.com%2Fpicshow%2F900x675%2F20121210%2F2012121010345397323.jpg',
				isEdit: false,
				editedTxt: ''
			}
		},
		onLoad ({ id, edit }) {
			this.isEdit = !!edit
			console.log(id, !!edit)
		},
		methods: {
			handleSubmit () {
				// 缓存
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.xiaoji
		width 100%
		.xiaoji-pic
			.photographer
				margin-top 14px
				width 750upx
				text-align center
				color rgb(190, 190, 190)
				font-size 14px
		.xiaoji-content
			margin 150upx 0 190upx
			padding 0 60upx
			font-size 16px
			line-height 30px
			color #333
		.reference
			margin-top 13px
			width 750upx
			text-align center
			color #666
			font-size 14px
		.xiaoji-edit
			box-sizing border-box
			padding 60upx
			width 100%
			min-height 400upx
		.submit
			margin 0 auto
			display flex
			justify-content center
			align-items center
			width 40px
			height 40px
			background-color rgb(255, 255, 255)
			border-radius 50%
			box-shadow 0px 0px 5px rgba(0, 0, 0, 0.2)
			image
				width 40upx
				height 40upx
</style>
