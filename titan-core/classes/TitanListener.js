"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitanListener = void 0;
const globals_1 = require("../system/globals");
class TitanListener {
    constructor(listenerData) {
        this.checkEvent = (event, eventData) => {
        };
        this.trigger = () => {
            this.listenerData.actions.forEach(action => {
                globals_1.actor.trigger(action);
            });
        };
        this.listenerData = listenerData;
    }
}
exports.TitanListener = TitanListener;
//# sourceMappingURL=TitanListener.js.map