import process from 'process';

const Config = {
    port: +(process.env.BACKEND_PORT || 5000)
};

export default Config;