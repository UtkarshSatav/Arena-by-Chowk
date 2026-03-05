const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let orig = content;
            
            // Replace rgba(255,255,255,...) -> rgba(var(--glass-rgb),...) considering spaces!
            content = content.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,/g, 'rgba(var(--glass-rgb),');
            // Replace rgba(0,0,0,...) -> rgba(var(--inverse-glass-rgb),...)
            content = content.replace(/rgba\(\s*0\s*,\s*0\s*,\s*0\s*,/g, 'rgba(var(--inverse-glass-rgb),');
            
            // Hex replacements
            content = content.replace(/['"]#fff(fff)?['"]/gi, '"var(--text-main)"');
            content = content.replace(/['"]#000(000)?['"]/gi, '"var(--text-inverse)"');
            content = content.replace(/['"]#070707['"]/gi, '"var(--bg-color)"');
            
            if(content !== orig) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated', fullPath);
            }
        }
    }
}

processDir(path.join(__dirname, 'src', 'app'));
console.log('Done');
