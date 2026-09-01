const fs = require('fs');

function updateViewBox(file, newViewBox) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/viewBox="[^"]+"/, `viewBox="${newViewBox}"`);
    fs.writeFileSync(file, content);
}

updateViewBox('public/Team/07_woman_wider_shorter.svg', '0 250 800 1150');
updateViewBox('public/Team/08_woman_wider_shorter.svg', '0 250 800 1150');

console.log("Updated viewBoxes to crop headroom");
