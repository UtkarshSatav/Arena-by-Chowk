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

            // Fix string literals containing #000, #fff
            content = content.replace(/['"]#fff(fff)?['"]/gi, '"var(--text-main)"');
            content = content.replace(/['"]#000(000)?['"]/gi, '"var(--text-inverse)"');
            content = content.replace(/['"]#070707['"]/gi, '"var(--bg-color)"');
            content = content.replace(/['"]#111['"]|['"]#111111['"]/gi, '"var(--surface-dark)"');
            content = content.replace(/['"]#161616['"]/gi, '"var(--surface-mid)"');

            if(content !== orig) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated', fullPath);
            }
        }
    }
}

processDir(path.join(__dirname, 'src', 'app'));
console.log('Done');
