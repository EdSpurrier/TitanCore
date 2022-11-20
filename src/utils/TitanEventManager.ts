import { TitanCore } from "..";
import { List } from "../classes/List";
import { TitanListener } from "../classes/TitanListener";
import { emitter } from "../system/globals";

export class TitanEventManager {
    listeners: List<TitanListener>

    testEvent = {} as TitanCore.TitanEvent;

    constructor(options) {
        this.listeners = new List()

        global.titanConsole.logProcessComplete(this.constructor.name, 'Constructed');

        this.listenUDP()

        emitter.emit(this.testEvent);
	}

    addListener = (listenerData: TitanCore.TitanListenerData) => {
        this.listeners.add( new TitanListener(listenerData) );
        global.titanConsole.logAction(`Added new TitanListener => ${listenerData.focus.name}`);
    }

    listenUDP = () => {
        global.titanConsole.logAction("Listening Via UDP");
    }
}
