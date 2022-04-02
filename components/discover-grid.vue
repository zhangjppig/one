<template>
	<view class="discover-grid">
		<view class="date-picker-wrap">
			<DatePicker :dateInfo="date" @dateChange="dateChange"></DatePicker>
		</view>
		<view class="false"></view>
		<view class="list-wrap">
			<view v-for="(i, k) in info" :key="k" >
				<!-- #ifdef MP-WEIXIN -->
				<ListGrid :dateInfo="i.date" v-if="i.date===date">
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<ListGrid :dateInfo="i.date" v-show="i.date===date">
				<!-- #endif -->
					<view
						class="list-item"
						v-for="(item, index) in i.list"
						:key="index"
					>
						<List01 v-if="listType === 'List01'"
							category="normal"
							:idx="index"
							:title="item.title"
							:desc="item.author"
							:pic="item.pic"
						></List01>
						
						<List04 v-if="listType === 'List04'"
							size="half"
							:img="item.pic"
							:title="item.title"
						></List04>
						
					</view>

				</ListGrid>
			</view>
		</view>
	</view>
</template>

<script>
	import DatePicker from './date-picker.vue'
	import ListGrid from './list-grid.vue'
	import List01 from './list-components/list-01.vue'
	import List04 from './list-components/list-04.vue'
	
	export default {
		components: { ListGrid, DatePicker, List01, List04 },
		props: {
			info: { type: Array },
			listType: { type: String, default: 'List01'}
		},
		data() {
			return {
				date: '2020/04',
				// date: '2020/05',
			};
		},
		methods: {
			dateChange (date) {
				this.date = date.replace('-', '/')
				console.log((this.date))
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.discover-grid
		position relative
		.date-picker-wrap
			position fixed
			top 88upx
			z-index 10
			width 680upx
		.false
			height 74upx
		.list-item
			display inline-block
		.list-item:nth-child(even)
			margin-left 48upx
</style>
