import dotenv from 'dotenv'
import { TitanConsole } from './utils/TitanConsole.js'
import { Meta } from './system/meta/meta'

dotenv.config()


export class TitanCore {
    console     : TitanConsole;
    meta        : Meta;

    constructor(options) {
        this.console = new TitanConsole({});
        this.console.logProcessComplete(this.constructor.name, 'Constructed');

        this.meta = new Meta();
	}


    init = () => {
        this.console.logProcessComplete(this.constructor.name, 'Initiated');
    }
}


