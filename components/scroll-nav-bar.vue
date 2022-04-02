<template>
	<view class="scroll-nav-bar-wrap">
		<scroll-view
			class="scroll-wrap"
			scroll-x
			scroll-with-animation
			:scroll-left="scrollLeft"
			@scroll="handleScroll"
		>
			<view
				:class="[ 'scroll-item', category ]"
				v-for="(item, index) in scrollContentCategory"
				:key='index'
				:data-current="index"
				@tap.stop="swichNav"
			>
				<text :class="{text: true, active: index === currentTab}">{{item}}</text>
			</view>
		</scroll-view>
		<view class="search" @tap="handleSearchTap">
			<image src="../static/icon/search.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			category: {
				type: String,
				default: 'discover'
			},
			curTab: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				categorys: {
					// discover: [ '阅读', '图文', '专题', '音乐', '影视', '小记', '作者' ],
					discover: [ '阅读', '图文', '专题', '小记', '作者', '音乐', '影视' ],
					series: [ 2020, 2019, 2018, 2017, 2016 ]
				},
				winHeight: "",
				currentTab: 0,
				scrollLeft: 0
			}
		},
		computed: {
			scrollContentCategory () {
				return this.categorys[this.category]
			}
		},
		created () {
			this.currentTab = this.curTab // 让父级 props 可修改
		},
		methods: {
			swichNav: function(e, index) {
				
				// cur 是现在的当前序号
				let cur
				if (index === undefined) {
					cur = +e.currentTarget.dataset.current
					this.$emit('narBarChange', cur) // 告诉父组件
				} else {
					cur = index
				}
				
				if (this.currentTab === cur) { return false }
				this.currentTab = cur
				
				// 让标签自动居中
				if (cur > 2) {
					this.scrollLeft = 300
				} else {
					this.scrollLeft = 0
				}
			},
			
			handleSearchTap () {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			handleScroll () {}
		}
	}
</script>

<style lang="stylus" scoped>
	.scroll-nav-bar-wrap
		position relative
		box-sizing border-box
		padding 0 80upx 0 0
		width 750upx
		height 88upx
		background-color #FFFFFF
		z-index 10
		.scroll-wrap
			display flex
			flex-wrap nowrap
			white-space nowrap
			justify-content center
			align-items center
			width 670upx
			height 88upx
			.scroll-item
				margin-right 40upx
				height 88upx
				line-height 88upx
				display inline-block
				&:first-child
					margin-left 35upx
				.text
					color rgb(190, 190, 190)
					font-size 14px
				.active
					color rgb(51, 51, 51)
					font-weight 700
					font-size 20px	
			.scroll-item.series
				font-size 14px
				margin 0 20upx
				&:first-child
					margin-left 35upx
				.text
					padding 12upx 20upx
					height 57upx
					background-color rgb(245, 245, 245)
					border-radius 40upx
				.active
					font-size 14px
					font-weight normal
					color #FFFFFF
					background-color rgb(54, 54, 54)
		.search
			position absolute
			top 0
			right 38upx
			width 50upx
			height 88upx
			background-color #FFFFFF
			image
				position absolute
				top 19upx
				right 0upx
				width 50upx
				height 50upx
</style>
