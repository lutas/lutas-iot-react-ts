import process from 'process';

export default {
    port(): number {
        return +(process.env.PORT || 5000);
    }
}