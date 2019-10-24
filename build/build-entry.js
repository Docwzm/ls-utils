const fs = require('fs');
let srcDir = __dirname + '/../src/';

let componentDirs = fs.readdirSync(srcDir).filter(d => {
  let stat = fs.statSync(srcDir + d);
  return (stat.isDirectory() && d.indexOf('utils') === -1)
});


function uppercamelize(str){
  str = str[0].toUpperCase() + str.substring(1);
  let re=/-(\w)/g;
  return str.replace(re,function ($0,$1){
    return $1.toUpperCase();
  });
}

let components = componentDirs.map(d => uppercamelize(d));
const tips = '// 由build/build-entry.js脚本自动生成';

function buildEntry() {
  const importList = componentDirs.map(name => `import ${uppercamelize(name)} from './${name}';`);

  const code = `${tips}
${importList.join('\n')}

export { ${components.join(', ')} }
`;
  fs.writeFileSync(srcDir + '/index.js', code)
}

buildEntry();