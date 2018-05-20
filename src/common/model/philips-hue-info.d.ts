export module 'philips-hue';

export type PhilipsHueInfo = { 
    statue: { 
        on: boolean, 
        bri: number,
        alert: string, 
        mode: string,
        reachable: boolean
    }, 
    swupdate: {
        state: string, 
        lastinstall: Date
    }, 
    type: string
    name: string, 
    modelid: string, 
    manufacturername: string, 
    productname: string, 
    capabilities: { 
        certified: boolean, 
        control: { 
            mindimlevel: number, 
            maxlumen: number
        },
        streaming: { 
            renderer: false,
            proxy: false 
        } 
    }, 
    config: {
        archetype: string, 
        function: string, 
        direction: string
    }, 
    uniqueid: string, 
    swversion: string, 
    swconfigid: string, 
    productid: string
};