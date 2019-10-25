///<reference path="./global.d.ts"/>

import { bridgeInit } from "./init";

/**
 * 显示loading
 */
function showLoading() {
  window.LSJavascriptBridge.callHandler("showLoading")
}

/**
 * 隐藏loading
 */
function hideLoading() {
  window.LSJavascriptBridge.callHandler("hideLoading")
}

let onShowCallbacks: Callback[] = [];

/**
 * 设置onShow生命周期回调。当webview打开，返回或者重新进入前台时会被触发
 * 版本: >= 4.0
 * @param callback
 */
function onShow(callback: Callback) {
  if (!onShowCallbacks.length) {
    bridgeInit(() => {
      window.LSJavascriptBridge.registerHandler("onShow", () => {
        onShowCallbacks.forEach(cb => cb());
      });
    })
  }
  onShowCallbacks.push(callback);
}

export {
  showLoading,
  hideLoading,
  onShow
}