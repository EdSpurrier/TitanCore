"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitanEventManager = void 0;
const List_1 = require("../classes/List");
const TitanListener_1 = require("../classes/TitanListener");
const globals_1 = require("../system/globals");
class TitanEventManager {
    constructor(options) {
        this.testEvent = {};
        this.addListener = (listenerData) => {
            this.listeners.add(new TitanListener_1.TitanListener(listenerData));
            global.titanConsole.logAction(`Added new TitanListener => ${listenerData.focus.name}`);
        };
        this.listenUDP = () => {
            global.titanConsole.logAction("Listening Via UDP");
        };
        this.listeners = new List_1.List();
        global.titanConsole.logProcessComplete(this.constructor.name, 'Constructed');
        this.listenUDP();
        globals_1.emitter.emit(this.testEvent);
    }
}
exports.TitanEventManager = TitanEventManager;
//# sourceMappingURL=TitanEventManager.js.map