"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitanEmitter = void 0;
class TitanEmitter {
    constructor(options) {
        this.emit = (event) => {
            global.titanConsole.log(this.constructor.name, 'Emitting Event =>', event);
        };
    }
}
exports.TitanEmitter = TitanEmitter;
//# sourceMappingURL=TitanEmitter.js.map