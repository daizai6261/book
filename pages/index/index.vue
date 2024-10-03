<template>
	<web-view
		src="https://wxwebpelbs.yfqp.shop/?curIndex=1094">
	</web-view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			wx.showShareMenu({
				withShareTicket:true,
				//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
				menus:["shareAppMessage","shareTimeline"]
			})
		},
		methods: {
			onShareAppMessage(res) {
			    if (res.from === 'button') {// 来自页面内分享按钮
			        console.log(res.target)
			    }
			    return {
			        title: '智趣点读', //分享的名称
			        path: '/pages/index/index.vue',
			        mpId:'wxdb77a641e2c472e8' //此处配置微信小程序的AppId
			    }
			},
			
			//分享到朋友圈
			onShareTimeline(res) {
			    return {
			        title: '',
			        type: 0,
			        summary: "",
			    }
			},

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
