///<reference path="./global.d.ts"/>
import { isWx } from "../common"
/**
 * 原生页面枚举
 */
enum ViewType {
  addDeviceAction = 'addDeviceAction', // 添加设备页面
  showMyChallengeView = 'showMyChallengeView', // 唤起挑战页面
  showGroupListView = 'showGroupListView', // 唤起老的群组
  showFeedbackView = 'showFeedbackView', // 唤起意见反馈
  showUrlContent = 'showUrlContent', // 打开新的Webview
  showAddBodyLengthView = 'showAddBodyLengthView', // 唤起添加体围页面
  showAddWeightView = 'showAddWeightView', // 唤起添加体重页面
  showWeightStatisticsView = 'showWeightStatisticsView', // 唤起体重统计页面
  showUnknownWeight = 'showUnknownWeight', // 唤起未知体重页面
  showUserinfo = 'userinfo' // 跳转个人信息页
}

interface ViewControllerConfig {
  shouldCloseWebViewControllerAfterPush?: boolean,
  data: any,
  viewType: ViewType
}

/**
 * 打开原生页面
 * 版本 > 3.7.8
 * @param viewType
 * @param replace 是否替换当前view
 */
export function pushViewTypeController(viewType: ViewType, replace: boolean = false): void {
  let config: ViewControllerConfig = {
    shouldCloseWebViewControllerAfterPush: replace,
    data: {
      url: `lswearable://${viewType}`
    },
    viewType
  };

  pushViewController(config)
}

/**
 * 打开原生页面
 * @param config
 */
export function pushViewController(config: ViewControllerConfig): void {
  if (window.LsSkipView) { //安卓
    window.LsSkipView.pushViewController(JSON.stringify(config))
  } else { //IOS
    window.LSJavascriptBridge.callHandler("pushViewController", config)
  }
}

/**
 * 打开webview
 * @param url
 * @param replace 是否替换当前view
 * @param notitlebar 是否有导航栏
 */
export const pushWebviewController = (url: string, replace: boolean = false, notitlebar: boolean = false) => {
  if (!window.LSJavascriptBridge && !window.LsSkipView) {
    location.href = url;
    return
  }

  let urlEncode = encodeURIComponent(url);
  let schema = notitlebar ? `lswearable://web?url=${urlEncode}&notitlebar=true` : `lswearable://web?url=${urlEncode}`;
  pushViewController({
    shouldCloseWebViewControllerAfterPush: replace,
    data: { url: schema },
    viewType: ViewType.showUrlContent //该参数值为showUrlContent时表示跳转的是webview
  })
};

/**
 * 退出当前webview
 */
export const popViewController = () => {
  if (isWx()) {//说明不在微信中
    // 走不在小程序的逻辑
    window.LSJavascriptBridge.callHandler("popViewController")
  } else {
    wx.miniProgram.getEnv((res) => {
      if (res.miniprogram) {
        // 走在小程序的逻辑
        if(window.history.length > 1) {
          window.history.back()
        } else {
          wx.navigateBack()
        }
      } else {
        // 走不在小程序的逻辑
        window.LSJavascriptBridge.callHandler("popViewController")
      }
    })
  }
};

/**
 * 退出到根级webview
 */
export const popToRootViewController = () => {
  window.LSJavascriptBridge.callHandler("popToRootViewController")
};