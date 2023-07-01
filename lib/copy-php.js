const fs = require('fs');
const path = require('path');

function main() {
    console.log('Copy php files...');
    const currDir = process.cwd();
    const src = path.join(currDir, 'php/');
    const dst = path.join(currDir, 'out/php/');
    fs.cp(src, dst, { recursive: true } ,(e) => {
        if (e) {
            console.error(e);
            process.exit(1);
        }
    });
    console.log('Copy successfull');

}


if (require.main === module) {
    main();
}
