<template>
	<view class="list-view masonry">
		<view class="side left" ref="left">
			
			<!-- #ifdef MP-WEIXIN -->
			<view v-for="(item, index) in xiaoJiInfo" :key="index">
				<view class='masonry-item' v-if="!(index % 2)">
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<view v-for="(item, index) in leftList" :key="index">
				<view class='masonry-item'>
			<!-- #endif -->
					<List04
						size='masonry'
						:img="item.img"
						:title="item.title"
						:author="item.author"
						:date="item.date"
						:location="item.location"
						@theHeight="theHeight"
					></List04>
				</view>
			</view>

		</view>
		<view class="side right" ref="right">
			
			<!-- #ifdef MP-WEIXIN -->
			<view v-for="(item, index) in xiaoJiInfo" :key="index">
				<view class='masonry-item' v-if="(index % 2)">
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<view v-for="(item, index) in rightList" :key="index">
				<view class='masonry-item'>
			<!-- #endif -->
					<List04
						size='masonry'
						:img="item.img"
						:title="item.title"
						:author="item.author"
						:date="item.date"
						:location="item.location"
						@theHeight="theHeight"
					></List04>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	import List04 from './list-components/list-04.vue'

	let leftHeight = 0
	let rightHeight = 0
	
	export default {
		components: { List04 },
		props: {
			xiaoJiInfo: {
				type: Array
			}
		},
		data() {
			return {
				leftList: [],
				rightList: []
			}
		},
		mounted () {
			// #ifndef MP-WEIXIN
			this.makeMasonry()
			// #endif
		},
		methods: {
			makeMasonry () {
				this.xiaoJiInfo.forEach((item, index) => {
					this.getImageRate(item)
				})
			},
			getImageRate (item) {
				let self = this
				uni.getImageInfo({
					src: item.img,
					success: (image) => {
						let rate = image.height / image.width
						if (leftHeight <= rightHeight) {
							this.leftList.push(item)
							leftHeight += rate
						} else {
							this.rightList.push(item)
							rightHeight += rate
						}
					},
					fail: function (e) {
						console.log(e)
					}
				})
			},
			// _getPicRate: async function (url) {
			// 	let pic = await this._createPic(url)
			// 	let rate = pic.height / pic.width
			// 	return rate
			// },
			// _createPic (url) {
			// 	return new Promise ((resolve, reject) => {
			// 		let pic = new Image()
			// 		pic.src = url
			// 		if (pic.complete) { resolve(pic) }
			// 	})
			// }
		}
	}
</script>

<style lang="stylus" scoped>
	.list-view.masonry
		display flex
		justify-content space-between
		.masonry-item
			margin-bottom 30upx
</style>
