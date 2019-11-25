/**
 * 解决vconsole清除不掉session的问题
 */
export const SessionPlugin = () => {
  let vc = new VConsole();
//自定义插件
  let sessionPlugin = new VConsole.VConsolePlugin('session_plugin', '乐心Session');

  sessionPlugin.on('renderTab', callback => callback(''));

  sessionPlugin.on('addTool', function(callback) {
    // 删除session
    let clearBtn = {
      name: 'Clear',
      onClick: function(event) {
        document.cookie="session=;domain=.lifesense.com;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
        alert("清理成功")
      }
    };
    // reload
    let reloadBtn = {
      name: 'Reload',
      onClick: function(event) {
        location.reload(true);
      }
    };

    callback([clearBtn, reloadBtn]);
  });

  vc.addPlugin(sessionPlugin);
};