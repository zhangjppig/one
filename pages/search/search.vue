<template>
	<view class="search">
		
		<!-- part 1 -->
		<view class="search-header">
			<image src="../../static/icon/search-45.png" mode=""></image>
			<input type="text" placeholder="在这里写下你想寻找的"
				focus="true"
				:value="searchText"
				@input="handleInput"
				@focus="handleFocus"
				@blur="handleBlur"
				@confirm="handleConfirm"
			/>
			<text @tap="handleCancel">{{isFocus ? '取消' : '返回'}}</text>
		</view>
		
		<!-- part 2 -->
		<view class="search-content">
			<List01 category='search' :title="mockInfo || 'default'"></List01>
		</view>
		
	</view>
</template>

<script>
	import List01 from '../../components/list-components/list-01.vue'
	
	export default {
		components: { List01 },
		data() {
			return {
				searchText: '', // :value 就像 v-model
				isFocus: false,
				mockInfo: ''
			}
		},
		created () {
			this.sendDebouncedRequest = this.debounce(this._request, 1000)
		},
		methods: {
			handleInput (e) {
				let text = e.detail.value
				this.searchText = text
				this.sendDebouncedRequest(text)
			},
			handleFocus () {
				this.timer = null
				this.isFocus = true
			},
			handleBlur () {
				this.timer = setTimeout(() => {
					this.isFocus = false
				}, 100)
			},
			handleConfirm (e) {
				let text = e.detail.value
				this._request(text)
			},
			handleCancel () {
				// uniapp大佬推荐 延迟赋值
				setTimeout(() => { this.searchText = '' }, 10)
				if (!this.isFocus) {
					uni.navigateBack()
				}
			},
			_request (keyWord) {
				if (keyWord === this.keyWord) return
				this.keyWord = keyWord
				console.log(`发送请求 ${keyWord}`)
				this.mockInfo = keyWord
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.search
		position absolute
		top 0
		bottom 0
		left 0
		right 0
		.search-header
			position relative
			padding 20upx 30upx 20upx 30upx
			box-sizing border-box
			width 100%
			height 120upx
			border-bottom 1upx solid #ddd
			image
				position absolute
				top 35upx
				left 40upx
				width 45upx
				height 45upx
			input
				padding-left 60upx
				width 600upx
				height 70upx
				box-sizing border-box
				background-color rgb(238, 238, 238)
				border-radius 10px
				.input-placeholder
					font-size 17px
					font-weight 500
			text
				position absolute
				top 20upx
				right 30upx
				height 70upx
				line-height 70upx
				color #666
				font-size 15px
		.search-content
			position absolute
			top 120upx
			margin 0 40upx
</style>
