"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../static/js/axios.min.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      url: "https://wxwebpelbstest.yfqp.shop?curIndex=99994",
      checkUrl: "https://wxwebpelbstest.yfqp.shop?curIndex=99994",
      realUrl: "https://wxwebpelbstest.yfqp.shop?curIndex=99995"
    };
  },
  onLoad() {
    common_vendor.wx$1.showShareMenu({
      withShareTicket: true,
      //设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
      menus: ["shareAppMessage", "shareTimeline"]
    });
    common_vendor.wx$1.setEnableDebug({
      enableDebug: true
    });
    this.getConfigByPackageId();
  },
  mounted() {
  },
  methods: {
    onShareAppMessage(res) {
      if (res.from === "button") {
        console.log(res.target);
      }
      return {
        title: "智趣点读",
        //分享的名称
        path: "/pages/index/index.vue",
        mpId: "wxdb77a641e2c472e8"
        //此处配置微信小程序的AppId
      };
    },
    //分享到朋友圈
    onShareTimeline(res) {
      return {
        title: "",
        type: 0,
        summary: ""
      };
    },
    getConfigByPackageId() {
      const that = this;
      common_vendor.index.request({
        method: "GET",
        url: "https://wxwebpelbstest.yfqp.shop/api/wx/getConfigByPackageId?packageIdx=99995",
        // responseType: 'json',
        success: function(res) {
          var _a, _b, _c;
          console.log(res);
          console.log(res);
          if (((_c = (_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.result) == null ? void 0 : _b.data) == null ? void 0 : _c.status) == 1) {
            that.url = that.realUrl;
          } else {
            that.url = that.checkUrl;
          }
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.url
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
