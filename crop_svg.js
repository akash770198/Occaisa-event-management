const fs = require('fs');

function updateViewBox(file, newViewBox) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/viewBox="[^"]+"/, `viewBox="${newViewBox}"`);
    fs.writeFileSync(file, content);
}

updateViewBox('public/Awards/award_3_photorealistic.svg', '40 40 550 556');
updateViewBox('public/Awards/award_4_photorealistic.svg', '40 40 551 556');

console.log("Updated viewBoxes to crop borders");
