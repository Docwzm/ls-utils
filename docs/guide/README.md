# 快速开始
### 私有仓库设置
需要申请内网vpn
```
npm set @ls:registry http://npm.lexin.com
```

### 安装
```
npm i -S @ls/utils
```
package.json中的版本号前添加^，方便统一升级
```json
{
  "@ls/utils": "^0.0.1"
}
```

### 引入依赖
```javascript
// 打点
import { logEvent, logExposure } from '@ls/utils/lib/log'
// 桥接口

// 
```

