"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meta = void 0;
const network_1 = require("./network");
class Meta {
    constructor() {
        this.network = (0, network_1.GetNetworkMeta)();
        global.titanConsole.logProcessComplete(this.constructor.name, 'Constructed');
    }
}
exports.Meta = Meta;
//# sourceMappingURL=meta.js.map