"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meta = void 0;
const network_1 = require("./network");
const TitanConsole_1 = require("../../utils/TitanConsole");
class Meta {
    constructor() {
        this.console = new TitanConsole_1.TitanConsole({});
        this.network = (0, network_1.GetNetworkMeta)();
        this.console.logProcessComplete(this.constructor.name, 'Constructed');
    }
}
exports.Meta = Meta;
//# sourceMappingURL=meta.js.map