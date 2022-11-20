"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitanActor = void 0;
class TitanActor {
    constructor(options) {
        this.trigger = (action) => {
            global.titanConsole.logAction(action);
            action.action(action.arguments);
        };
        global.titanConsole.logProcessComplete(this.constructor.name, 'Constructed');
    }
}
exports.TitanActor = TitanActor;
//# sourceMappingURL=TitanActor.js.map