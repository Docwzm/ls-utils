///<reference path="./global.d.ts"/>

import { bridgeInit } from "./init";

/**
 * 显示loading
 */
function showLoading() {
  window.LSJavascriptBridge && window.LSJavascriptBridge.callHandler("showLoading")
}

/**
 * 隐藏loading
 */
function hideLoading() {
  window.LSJavascriptBridge && window.LSJavascriptBridge.callHandler("hideLoading")
}

/**
 * 跳转push权限设置页，IOS同时还是步数数据授权页
 * 版本3.7.8可用
 */
function jumpToPermissionSetting() {
  if (window.LsPermission) { // 安卓
    window.LsPermission.jumpToPermissionSetting(2);
  } else {
    window.LSJavascriptBridge.callHandler("jumpToPermissionSetting", 1);
  }
}

/**
 * 设置onShow生命周期回调。当webview打开，返回或者重新进入前台时会被触发
 * 版本: >= 4.0
 * @param callback
 */
function onShow(callback: Callback) {
  bridgeInit(() => {
    window.LSJavascriptBridge.registerHandler("onShow", () => {
      callback && callback()
    });
  })
}

export {
  showLoading,
  hideLoading,
  jumpToPermissionSetting,
  onShow
}