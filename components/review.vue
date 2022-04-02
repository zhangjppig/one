<template>
	<view class="review-warp">
		<!-- part 1 -->
		<view class="review-content">
			<textarea
				type="text"
				focus="true"
				placeholder="在这里写下你想说的"
				v-model="inputValue"
				@confirm="handleSubmit"
				@blur="handleBlur"
			/>
		</view>
		
		<!-- part 2 -->
		<view class="review-function">
			<text>{{strLeft}}</text>
			<view class="botton" @tap="handleSubmit">发布</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputValue: ''
			}
		},
		computed: {
			strLeft () {
				return 500 - this.inputValue.length
			}
		},
		methods: {
			handleSubmit (e) {
				this.$emit('reviewSubmit', this.inputValue)
				this.inputValue = ''
				console.log('sub')
			},
			handleBlur () {
				this.$emit('reviewBlur', this.inputValue)
				this.inputValue = ''
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.review-warp
		width 100%
		height 300upx
		background-color #FFFFFF
		box-shadow 0px 0px 3px rgba(0, 0, 0, 0.5)
		.review-content
			box-sizing border-box
			padding 40upx 50upx
			height 200upx
			border-bottom 1upx solid #ececec
			textarea
				height 100%
		.review-function
			display flex
			align-items center
			justify-content space-between
			box-sizing border-box
			padding 0 40upx
			height 100upx
			font-size 16px
			color #aaa
			.botton
				width 100upx
				height 60upx
				font-size 16px
				line-height 60upx
				color #666
				text-align center
				background-color rgb(216, 216, 216)
				border-radius 3px
</style>
