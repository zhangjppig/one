import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.config.productionTip = false
Vue.use(Vuex)
App.mpType = 'app'

Vue.prototype.throttle = function (fn, interval) {
	let last = 0
	return function () {
		let now = +new Date()
		let self = this
		let args = arguments
		if (now - last >= interval) {
			last = now
			fn.apply(self, args)
		}
	}
}

Vue.prototype.debounce = function (fn, delay) {
  let timer = null
  return function () {
    let context = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

const store = new Vuex.Store({
	state: {
		isMusicPlaying: false,
		audioSrc: '',
		audioContext: null,
	},
	actions: {
		playAndPauseForH5 ({ state }, url) {
			if (url !== state.audioSrc) {
				state.audioContext && state.audioContext.pause()
				state.audioContext = uni.createInnerAudioContext()
				state.audioSrc = url
				state.isMusicPlaying = true
				state.audioContext.src = url
				state.audioContext.play()
				return
			}
			if (!state.isMusicPlaying) {
				state.audioContext.play()
				state.isMusicPlaying = !state.isMusicPlaying
			} else {
				state.audioContext.pause()
				state.isMusicPlaying = !state.isMusicPlaying
			}
		},
		
		playAndPauseForElse ({ state }, { url, title, singer }) {
			const bgAudioManager = uni.getBackgroundAudioManager()
			if (url !== state.audioSrc) {
				state.audioSrc = url
				state.isMusicPlaying = true
				bgAudioManager.src = url
				bgAudioManager.title = title
				bgAudioManager.singer = singer
				return
			}
			if (bgAudioManager.paused) {
				bgAudioManager.play()
				state.isMusicPlaying = true
			} else {
				bgAudioManager.pause()
				state.isMusicPlaying = false
			}
		}
	}
})

const app = new Vue({
    ...App,
		store
})
app.$mount()
