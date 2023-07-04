const fs = require('fs');

fs.copyFile(
    './README-build.md',
    './build/README.md',
    ()=>{}
);
