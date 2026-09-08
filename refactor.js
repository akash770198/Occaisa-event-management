const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (dirPath.includes('components')) return; // skip
    if (f === 'page.tsx') return; // skip pages
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('app', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('import { site as data } from "@/data";') || content.includes('import { site as data } from "../../data";')) {
      // 1. Replace import
      content = content.replace(/import \{ site as data \} from "([^"]+)";/, 'import { site, SectionProps } from "$1";');
      
      // 2. Replace parameterless signature
      content = content.replace(/export default function (\w+)\(\) \{/g, 'export default function $1({ data, className }: SectionProps<any> = {}) {');
      
      // 3. Replace slug signature
      content = content.replace(/export default function (\w+)\(\{ slug \}: \{ slug: string \}\) \{/g, 'export default function $1({ slug, data, className }: { slug: string } & SectionProps<any>) {');
      
      // 4. Data replacements
      // Replace `data.someKey` -> `(data || site).someKey`
      // Wait, we should only replace `data.` if it's not `data: `
      content = content.replace(/\bdata\./g, '(data || site).');
      
      // Replace `const { abc } = data;` -> `const { abc } = data || site;`
      content = content.replace(/= data;/g, '= data || site;');
      
      // Replace `const xyz = data;` -> `const xyz = data || site;`
      // (This is covered by the above, but just in case there's spaces)
      content = content.replace(/= data\s*;/g, '= data || site;');
      
      fs.writeFileSync(filePath, content);
      console.log('Updated ' + filePath);
    }
  }
});
