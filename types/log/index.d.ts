/**
 * 记录单个打点
 * @param category
 * @param action
 */
export const logEvent:(category: string, action: string) => void;

/**
 * 记录曝光点
 * @param id dom元素id
 * @param category
 * @param action
 */
export const logExposure:(id: string, category: string, action: string) => void;