import Hue from 'philips-hue';

import PhilipsLight from './philips-light';
import {PhilipsHueInfo} from '../../../common/model/philips-hue-info';
import Config from '../../../common/config';

export class LightInfo {
    public readonly id: number;
    public readonly name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export default class Lights {

    hue: any;
    lights: Array<PhilipsLight>;

    constructor(lights: Array<LightInfo>) {

        this.hue = new Hue();
        this.hue.bridge = Config.philips.bridgeIP;
        this.hue.username = Config.philips.username;

        this.lights = lights.map(light => {
            return new PhilipsLight(this.hue, light.id, light.name);
        });        
    }

    public get(index: number): PhilipsLight | null {

        return this.lights.find(light => light.id === index) || null;
    }

    public async getInfo(): Promise<Array<PhilipsHueInfo>> {
        return Promise.all(this.lights.map(light => light.isOn()));
    }
}