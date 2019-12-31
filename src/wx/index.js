let wxScript = document.createElement('script');
wxScript.src = 'https://cdn.lifesense.com/common/jweixin/1.3.2/jweixin.js';
wxScript.setAttribute('language', 'JavaScript');
setTimeout(() => document.head.appendChild(wxScript), 1000);

let loaded = false;
let events = [];

wxScript.onload = function () {
  loaded = true;
  events.forEach(e => {
    e()
  });
};

export const mpNavigateBack = () => {
  if (loaded) wx.navigateBack()
  else events.push(wx.navigateBack())
}

export const mpMiniProgramGetEnv = (callback) => {
  if (loaded) wx.miniProgram.getEnv(callback)
  else events.push(wx.miniProgram.getEnv(callback))
}