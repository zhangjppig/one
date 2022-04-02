<template>
	<view class="discover">
		
		<!-- part 1 -->
		<ScrollNavBar
			class="tab-view"
			category="discover"
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
			
			<!-- 阅读 -->
			<swiper-item class="item-1">
				<scroll-view class='scroll-y' scroll-y="true" >
					<view class="list-view">
						<DiscoverGrid :info="tuWenInfo" listType='List04'></DiscoverGrid>
					</view>
				</scroll-view>
			</swiper-item>
			
			<!-- 图文 -->
			<swiper-item class="item-1">
				<scroll-view class='scroll-y' scroll-y="true" >
					<view class="list-view">
						<DiscoverGrid :info="tuWenInfo" listType='List01'></DiscoverGrid>
					</view>
				</scroll-view>
			</swiper-item>
			
			<!-- 专题 -->
			<swiper-item class="item-1">
				<scroll-view class="scroll-y" scroll-y="true"
					refresher-background="rgb(247, 247, 247)" refresher-enabled="true"
					:refresher-triggered="refresherTriggered" @refresherrefresh="refresh" @scrolltolower="lower"
				>
					<view class="list-view">
						<ListGrid v-for="(i, k) in zhuanTiInfo" :key="k" :hideDate="true">
							<view class="zhuanti-item" v-for="(item, index) in i.list" :key="index">
									<List04 category="full" :title="item.title" :img="item.pic"></List04>
							</view>
						</ListGrid>
					</view>
				</scroll-view>
			</swiper-item>
			
			<!-- 音乐 -->
			<!-- <swiper-item class="item-1"></swiper-item> -->
			
			<!-- 影视 -->
			<!-- <swiper-item class="item-1"></swiper-item> -->
			
			<!-- 小记 -->
			<swiper-item class="item-1">
				<scroll-view class='scroll-y' scroll-y="true" >
					<DiscoverMasonryGrid
						:xiaoJiInfo="xiaoJiInfo"
					></DiscoverMasonryGrid>
				</scroll-view>
			</swiper-item>
			
			<!-- 作者 -->
			<swiper-item class="item-1">
				<scroll-view class='scroll-y' scroll-y="true" >
					<view class="list-view">
						<List01
							category="with-bottom"
							v-for="(item, index) in authorInfo"
							:key="index"
							:title="item.author"
							:desc="item.desc"
							:pic="item.avator"
						></List01>
					</view>
				</scroll-view>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
	import ScrollNavBar from '../../components/scroll-nav-bar.vue'
	import DatePicker from '../../components/date-picker.vue'
	import ListGrid from '../../components/list-grid.vue'
	import List01 from '../../components/list-components/list-01.vue'
	import List04 from '../../components/list-components/list-04.vue'
	import List05 from '../../components/list-components/list-05.vue'
	
	import DiscoverGrid from '../../components/discover-grid.vue'
	import DiscoverMasonryGrid from '../../components/discover-masonry-grid.vue'
	
	import { mock_usersXiaoJi } from '../../static/mock/mock_usersXiaoJi.js'
	import { mock_discoverList } from '../../static/mock/mock_discoverList.js'	
	import { mock_discoverAuthor } from '../../static/mock/mock_discoverAuthor.js'
		
	// 天才用闭包
	let getDiscoverList = (function () {
		let index = 0
		let mockLenth = mock_discoverList.length
		return function () {
			let self = this
			if (index >= mockLenth) {
				uni.showToast({ title: '没有更多了', icon: 'none' })
				return
			}
			if (index) { uni.showToast({ title: '正在加载', icon: 'none' }) }
			setTimeout(() => {
				self.zhuanTiInfo.push(mock_discoverList[index++])
				uni.hideToast()
				if (index > 1) { uni.showToast({ title: '加载完成', icon: 'none' }) }
			}, 1000)
		}
	})()
	
	export default {
		components: {
			ScrollNavBar, DatePicker, ListGrid,
			List01, List04, List05,
			DiscoverGrid, DiscoverMasonryGrid
		},
		data() {
			return {
				winHeight: "",
				currentTab: 1,
				listInfo: '',
				zhuanTiInfo: [],
				tuWenInfo: [],
				xiaoJiInfo: null,
				authorInfo: null,
				refresherTriggered: false
			}
		},
		onLoad: function () {
			this.adjustHeight()
			this.getXiaoJiInfo()
			this.getAuthorInfo()
			this.getTuWenInfo()
			getDiscoverList.call(this)
		},
		methods: {
			getXiaoJiInfo () {
				this.xiaoJiInfo = mock_usersXiaoJi
			},
			getTuWenInfo () {
				this.tuWenInfo = mock_discoverList
			},
			getAuthorInfo () {
				this.authorInfo = mock_discoverAuthor
			},
			handleNarBarChange (cur) {
				this.currentTab = cur
			},
			refresh (e) {
				this.refresherTriggered = true
				uni.showToast({ title: '正在刷新', icon: 'loading', mask: true })
				console.log(this.refresherTriggered)
				setTimeout(() => {
					this.refresherTriggered = false
					uni.hideToast()
					uni.showToast({ title: '刷新完成', icon: 'none', duration: 1000 })
				}, 1000)
			},
			lower (e) {
				getDiscoverList.call(this)
			},
			adjustHeight () {
				let self = this
				uni.getSystemInfo({
					success: function(res) {
						let calc = res.windowHeight // 除了标题和tabBar
						self.winHeight = calc
					}
				})
			},
			switchTab (e) {
				this.currentTab = +e.detail.current
				this.checkCor()
				this.$refs['navBar'].swichNav(0, +e.detail.current)
			},
			checkCor () {
				if (this.currentTab > 3) {
					this.scrollLeft = 300
				} else {
					this.scrollLeft = 0
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.discover
		background-color #FFFFFF
		.tab-view
			position fixed
			z-index 10
		.tab-content
			.item-1
				position absolute
				width 100%
				.scroll-y
					box-sizing border-box
					padding-top 44px
					height 100%
					.list-view
						padding 0 35upx
						.zhuanti-item+.zhuanti-item
							margin-top 100upx
</style>
