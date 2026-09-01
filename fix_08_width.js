const fs = require('fs');

function fix08() {
    let file = 'public/Team/08_woman_wider_shorter.svg';
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace width, height, viewBox, and preserveAspectRatio to match 07 exactly, but with 50px top crop
    content = content.replace(/<svg[^>]+>/, `<svg xmlns="http://www.w3.org/2000/svg"
     width="800" height="1050" viewBox="0 50 800 1050"
     preserveAspectRatio="xMidYMid slice">`);
    
    fs.writeFileSync(file, content);
}

fix08();
console.log("Fixed 08 width and headroom");
