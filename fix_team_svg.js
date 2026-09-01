const fs = require('fs');

function fixSVG(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    const b64Match = content.match(/href="data:image\/jpeg;base64,([^"]+)"/);
    if (!b64Match) {
        console.log("Could not find base64 in", file);
        return;
    }
    const b64 = b64Match[1];
    
    const newSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     width="800" height="1150" viewBox="0 250 800 1150"
     preserveAspectRatio="xMidYMid slice">
  <image x="0" y="0" width="800" height="1400"
         preserveAspectRatio="none"
         href="data:image/jpeg;base64,${b64}" />
</svg>`;
    
    fs.writeFileSync(file, newSvg);
}

fixSVG('public/Team/07_woman_wider_shorter.svg');
fixSVG('public/Team/08_woman_wider_shorter.svg');

console.log("Fixed stretching in 07 and 08 SVGs");
