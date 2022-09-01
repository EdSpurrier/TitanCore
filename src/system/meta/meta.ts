import { GetNetworkMeta } from "./network";
import { TitanConsole } from "../../utils/TitanConsole";

export class Meta {
    network : {};
    console : TitanConsole;

    constructor() {
        this.console = new TitanConsole({});
        
        this.network = GetNetworkMeta();

        this.console.logProcessComplete(this.constructor.name, 'Constructed');
    }

}