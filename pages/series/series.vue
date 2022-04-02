<template>
	<view class="contain">
		
		<!-- part 1 -->
		<ScrollNavBar
			class="tab-view"
			category="series"
			:curTab="currentTab"
			@narBarChange="handleNarBarChange"
			ref="navBar"
		></ScrollNavBar>
		
		<!-- part 2 -->
		<swiper
			class="tab-content"
			duration="300"
			:current ="currentTab"
			:style="{ height: winHeight + 'px' }"
			@change="switchTab"
		>
			<!-- 实验： 不使用 scroll-view -->
			<swiper-item class="item-2">
				<scroll-view class='scroll-y' scroll-y="true" >
					<view style="width: 200px; height: 200px; background-color: #4CD964;">1</view>
					<view style="width: 200px; height: 200px; background-color: #007AFF;">1</view>
					<view style="width: 200px; height: 200px; background-color: red;">1</view>
					<view style="width: 200px; height: 200px; background-color: pink;">1</view>
					<view style="width: 200px; height: 200px; background-color: #4CD964;">1</view>
					<view style="width: 200px; height: 200px; background-color: #007AFF;">1</view>				<view style="width: 200px; height: 200px; background-color: #4CD964;">1</view>
					<view style="width: 200px; height: 200px; background-color: #007AFF;">1</view>
				</scroll-view>
			</swiper-item>
		
			<!-- picker -->
			<swiper-item class="item-1">
				<scroll-view class='scroll-y' scroll-y="true" >
					<view class="list-view">
						<DatePicker
							:dateInfo="date"
							@dateChange="dateChange"
						></DatePicker>
						<ListGrid
							:dateInfo="date"
						>
							<List01 category="normal"></List01>
							<List01 category="withButton"></List01>
							<List04 class='List04'></List04>
							<List01 category="normal"></List01>
						</ListGrid>
					</view>
				</scroll-view>
			</swiper-item>
			
			<!-- 瀑布流效果 -->
			<swiper-item class="item-1">
				<scroll-view class='scroll-y' scroll-y="true" >
					<view class="list-view masonry">
							<List04 v-for="(item, index) in listInfo" :key="index" class='List04 masonry-item' size='masonry' :info="item"></List04>
					</view>
				</scroll-view>
			</swiper-item>
			
			<!-- 其他效果 -->
			<swiper-item class="item-1">
				<scroll-view class='scroll-y' scroll-y="true" >
					<view class="list-view">
						<List01 category="normal"></List01>
						<List01 category="withButton"></List01>
						<List04 class='List04'></List04>
						<List01 category="normal"></List01>
					</view>
				</scroll-view>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
	import ScrollNavBar from '../../components/scroll-nav-bar.vue'
	import List01 from '../../components/list-components/list-01.vue'
	import List04 from '../../components/list-components/list-04.vue'
	import List05 from '../../components/list-components/list-05.vue'
	import DatePicker from '../../components/date-picker.vue'
	import ListGrid from '../../components/list-grid.vue'
	
	export default {
		components: { ScrollNavBar, List01, List04, List05, DatePicker, ListGrid },
		data() {
			return {
				winHeight: "",
				currentTab: 0,
				listInfo: '',
				date: '2020-04'
			}
		},
		onLoad: function () {
			this.adjustHeight()
			this.getListInfo()
		},
		onReady: function () {
			// this.test()
		},
		methods: {
			handleNarBarChange (cur) {
				this.currentTab = cur
			},
			getListInfo () {
				this.listInfo = listInfo
			},
			adjustHeight () {
				let that = this
				uni.getSystemInfo({
					success: function(res) {
						let calc = res.windowHeight
						that.winHeight = calc
					}
				})
			},
			switchTab: function(e) {
				let that = this
				this.currentTab = +e.detail.current
				this.checkCor()
				this.$refs['navBar'].swichNav(0, +e.detail.current)
			},
			checkCor: function() {
				if (this.currentTab > 3) {
					//这里距离按实际计算
					this.scrollLeft = 300
				} else {
					this.scrollLeft = 0
				}
			},
			dateChange (date) {
				this.date = date
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.contain
		background-color #FFFFFF
		.tab-view
			position fixed
			top 44px
		.tab-content
			
			// 实验开始
			.item-1
				position absolute
				width 100%
				background-color #C8C7CC
			// 实验结束	
				
			// 天才~ 这样就可以控制高度了
			.scroll-y
				box-sizing border-box
				padding-top 44px
				height 100%
				.list-view
					padding 0 35upx
				.list-view.masonry
					padding 0 30upx
					width 720upx
					column-count 2
					column-gap 0
					.masonry-item
						break-inside avoid
						// box-sizing border-box
						margin-bottom 30upx
</style>
