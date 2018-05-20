// philips light
import {PhilipsHueInfo} from '../../../common/model/philips-hue-info';

export default class PhilipsLight {
    id: number;
    name: string;
    hue: any;

    constructor(hue: any, id: number, name: string) {
        this.hue = hue;
        this.id = id;
        this.name = name;
    }

    public on(): void {
        this.hue.light(this.id).on();
    }

    public off(): void {         
        this.hue.light(this.id).off();
    }

    public async isOn(): Promise<PhilipsHueInfo> {
        let info = this.hue.light(this.id).getInfo();
        return info;
    }
}
