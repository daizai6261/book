"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
    common_vendor.wx$1.showShareMenu({
      withShareTicket: true,
      //设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
      menus: ["shareAppMessage", "shareTimeline"]
    });
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
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
