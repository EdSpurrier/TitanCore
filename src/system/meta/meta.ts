import { GetNetworkMeta } from "./network";
import { TitanConsole } from "../../utils/TitanConsole";

export class Meta {
    network : {};

    constructor() {
        
        this.network = GetNetworkMeta();

        global.titanConsole.logProcessComplete(this.constructor.name, 'Constructed');
    }

}