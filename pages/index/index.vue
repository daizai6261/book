<template>
	<web-view :src="url"></web-view>
</template>

<script>
	var wv;//计划创建的webview
	const axios = require('../../static/js/axios.min.js');
	export default {
		data() {
			return {
				title: 'Hello',
				url:"https://wxwebpelbstest.yfqp.shop?curIndex=99994",
				checkUrl: "https://wxwebpelbstest.yfqp.shop?curIndex=99994",
				realUrl: "https://wxwebpelbs.yfqp.shop?curIndex=99995"
			}						
		},
		onLoad() {
			wx.showShareMenu({
				withShareTicket:true,
				//设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
				menus:["shareAppMessage","shareTimeline"]
			})
			wx.setEnableDebug({
				enableDebug:true,
			})
			this.getConfigByPackageId();
		},
		mounted () {
			// this.getConfigByPackageId();
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
			getConfigByPackageId() {
				const that = this;
				uni.request({
					method: 'GET',
					url: 'https://wxwebpelbstest.yfqp.shop/api/wx/getConfigByPackageId?packageIdx=99995',
					// responseType: 'json',
					success:function(res) {
						 console.log(res);
						 // that.$nextTick(() => {
						  // 在DOM更新完成后执行的代码
						  console.log(res);
						  if(res?.data?.result?.data?.status == 1) {
							that.url = that.realUrl;
						  }else{
							that.url = that.checkUrl;
						  }
						// });
					}
				})
			}

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
