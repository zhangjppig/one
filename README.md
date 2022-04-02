# my-one

## 简介
1. my-one 是基于 uni-app 框架实现的移动端、跨平台应用
2. my-one 模仿韩寒监制的 ONE APP，实现了近乎相同的交互效果
3. my-one 实现了文章阅读、检索、编辑，实现音乐播放与全局控制等功能

## 上线
1. H5 http://rtfm.work:8081
2. WEIXIN-MP (二维码)

## 解决的问题
1. 列表样式非常多样
2. 使用 scroll-view 与 swiper 实现 发现页、连载页
3. 使用 vuex 实现全局的音乐播放效果
4. 使用 条件编译 实现不同端的瀑布流效果
5. 使用 闭包 记住上滑加载的状态
6. 使用 节流、防抖 提高性能
7. 使用 Vue.prototype 设置全局的属性和方法

## uni-app 的局限
1. App.vue 不能写页面结构，在 小程序 和 H5 无法实现全局的组件
2. 得十分依赖框架的 api，部分 JS 的 api 有兼容性问题
> 比方说 new Image()，页面初次加载是无法得到 complete 的状态的，得使用 uni.getImageInfo
3. 

***

## 追加功能
1. component 评论编辑
2. page 小记编辑
3. page 收藏页
4. 使用缓存：收藏、关注
