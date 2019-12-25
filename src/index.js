/**
 * 打点接口
 */
import logEvent from './log'
import logExposure from './log/logExposure'

export {
  logEvent,
  logExposure
}

/**
 * 桥接口
 */
// init
export {
  bridgeInit
} from './bridge/init'

// share
export {
  shareUrl,
  shareImage,
  shareScreenshot
} from './bridge/share'

// push view controller
export {
  pushWebviewController,
  pushViewController,
  pushViewTypeController,
  popViewController,
  popToRootViewController
} from './bridge/view-controller'

// navigate bar
export {
  setNavigationBarConfig,
  setNavigationBarButtons,
  setNavigationBarScrollingTransition
} from './bridge/navigation'

// common
export {
  showLoading,
  hideLoading,
  jumpToPermissionSetting,
  onShow
} from './bridge/common'


/**
 * 通用接口
 */
export {
  isWx,
  isLxydApp,
  getAppVersionFromUserAgent,
  compareVersion,
  format,
  getQueryString,
  getCookie
} from './common';

/**
 * vconsole插件
 */
export {
  SessionPlugin
} from './vconsole'

/**
 * sentry错误监控
 */
export {
  initSentry
} from  './sentry'

export {
  TenantPlugin
} from './plugins'