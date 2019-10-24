安装
```
npm i @ls/utils-log
```
@ls/utils-log基于友盟web打点，提供了两个打点API:
##### 1. logEvent(category: string, action: string)
	事件点。category表示业务类型，action表示具体事件。
##### 2. logExposure(id: string, category: string, action: string) 
	曝光点。id表示需要记录曝光点的dom元素id，需要在mounted钩子中调用，以保障能够获取到该元素。