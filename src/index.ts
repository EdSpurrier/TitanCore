import dotenv from 'dotenv'
import { Meta } from './system/meta/meta'
import { TitanEventManager } from './utils/TitanEventManager.js';
import { console } from './system/globals'
import { TitanConsole } from './utils/TitanConsole';


dotenv.config()


export class TitanCore {
    meta                    : Meta;
    eventManager            : TitanEventManager;
    console                 : TitanConsole;

    constructor(options) {
        console.logProcessComplete(this.constructor.name, 'Constructed');

        this.console = new TitanConsole({});
        this.meta = new Meta();
        this.eventManager = new TitanEventManager({});

        this.init();
	}


    init = () => {
        console.logProcessComplete(this.constructor.name, 'Initiated');
    }
}

