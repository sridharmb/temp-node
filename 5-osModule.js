

const os = require('os');

const user = os.userInfo();


console.log(os.uptime());

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOs);
