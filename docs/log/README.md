### 引入
```javascript
import { SessionPlugin } from '@ls/utils' 

if (process.env.NODE_ENV !== "production") {
  new VConsole();
  SessionPlugin();
}

```

### 说明
改插件默认项目通过script标签全局引入了VConsole