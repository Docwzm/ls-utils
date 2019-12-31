/**
 * 提供给H5页面在微信环境中调用wx.navigateBack()和wx.MiniProgram.getEnv()方法
 */
export const mpNavigateBack: () => void;

export const mpMiniProgramGetEnv: (callback: Callback) => void;