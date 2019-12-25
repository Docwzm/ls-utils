import { getQueryString } from "../../types/common";

type TenantConfig = {
  tenantName: string,
  hiddenComponents: string[],
  configMap?: { [key: string]: string }
}

let install = (Vue, options: TenantConfig[]) => {
  // 获取租户名称
  let tn = getQueryString(location.href, 'tn');
  if (!tn) tn = "default";

  if (!Array.isArray(options)) {
    throw new Error("Tenant config is not an array!");
  }
  // 租户配置
  let tc: { [key: string]: TenantConfig } = {};
  options.forEach(conf => tc[conf.tenantName] = conf);

  let hideComponent = (componentName) => {
    return tc[tn] && tc[tn].hiddenComponents && tc[tn].hiddenComponents.indexOf(componentName) > -1
  };

  /**
   * 根据租户配置隐藏组件
   * @param componentName
   * @param componentOptions
   */
  Vue.prototype.$wrapComp = (componentName, componentOptions) => {
    return hideComponent(componentName) ? { render: () => {} } : componentOptions;
  };

  /**
   * 根据configMap获取配置值
   * @param key
   */
  Vue.prototype.$getTenantConfig = (key: string) => {
    return tc[tn] && tc[tn].configMap ? tc[tn].configMap[key] : null;
  }
};

export default { install }