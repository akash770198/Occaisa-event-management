const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (dirPath.includes('components')) return; // skip
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('app', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // match `.map((item, index) =>`
    content = content.replace(/\.map\(\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)\s*=>/g, '.map(($1: any, $2: number) =>');
    
    // match `.map((item) =>`
    content = content.replace(/\.map\(\s*\(\s*(\w+)\s*\)\s*=>/g, '.map(($1: any) =>');
    
    // match `.map(item =>`
    content = content.replace(/\.map\(\s*([a-zA-Z0-9_]+)\s*=>/g, '.map(($1: any) =>');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed ' + filePath);
    }
  }
});
