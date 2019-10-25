### 引入
```javascript
import { pushWebviewController } from '@ls/utils'
```
### 接口说明
#### 初始化
* bridgeInit: 设置桥接口初始化回调，可以多次设置
#### 分享
* shareUrl: 分享链接
* shareImage: 分享图片
* shareScreenshot: 分享截图
#### 跳转
* pushWebviewController: 打开webview
* pushViewController: 跳转原生页面
* pushViewTypeController: 根据类型跳转原生页面
* popViewControl: 退出当前webview
* popToRootViewController: 退出到首页
#### 导航栏
* setNavigationBarConfig: 设置导航栏
* setNavigationBarButtons: 设置导航栏按钮
* setNavigationBarScrollingTransition: 设置导航栏渐变
### 通用
* showLoading: 展示loading
* hideLoading: 隐藏loading
* onShow: 设置onShow回调

