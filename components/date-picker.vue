<template>
	<view class="date-picker">
		<picker
			mode="date"
			value="4"
			start="2019-05"
			end="2020-05"
			fields="month"
			@change="dateChange">
			<view class="picker-content">{{dateText}} ↓</view>
		</picker>
	</view>
</template>

<script>
	export default {
		props: {
			dateInfo: {
				type: String,
				default: '2020-05'
			}
		},
		data() {
			return {
				date: ''
			}
		},
		computed: {
			dateText () {
				return this.date.replace('-', ' 年 ') + ' 月'
			}
		},
		created () {
			this.date = this.dateInfo
		},
		methods: {
			dateChange (e) {
				let { detail: {value: date } } = e
				this.date = date
				this.$emit('dateChange', date)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.date-picker
		background-color #FFFFFF
		width 100%
		height 74upx
		.picker-content
			text-align center
			line-height 74upx
			font-size 15px
			color #666
</style>
