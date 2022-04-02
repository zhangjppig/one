<template>
	<view class="list-grid" v-if="show">
		<view class="title-wrap" v-if="!hideDate"><text>{{dateText}}</text></view>
		<view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dateInfo: { type: String, default: '2020-05' },
			hideDate: { type: Boolean, default: false }
		},
		data() {
			return {
				show: true
			}
		},
		computed: {
			dateText () {
				return this.dateInfo
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus" scoped>
	.list-grid
		margin 10px 0
		.title-wrap
			position relative
			margin-bottom 15px
			border-bottom 1upx solid #ececec
			text
				position absolute
				padding 0 5px
				bottom -8px
				color #aaa
				font-size 13px
				left 50%
				transform translateX(-50%)
				background-color #FFFFFF
</style>
