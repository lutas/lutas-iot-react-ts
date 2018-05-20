import process from 'process';

const Config = {
    port: +(process.env.BACKEND_PORT || 5000),

    philips: {
        username: process.env["PhilipsHueUser"],
        bridgeIP: process.env["PhilipsHueIP"]
    },

};

export default Config;