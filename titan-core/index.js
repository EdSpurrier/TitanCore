"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitanCore = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const TitanConsole_js_1 = require("./utils/TitanConsole.js");
const meta_1 = require("./system/meta/meta");
dotenv_1.default.config();
class TitanCore {
    constructor(options) {
        this.init = () => {
            this.console.logProcessComplete(this.constructor.name, 'Initiated');
        };
        this.console = new TitanConsole_js_1.TitanConsole({});
        this.console.logProcessComplete(this.constructor.name, 'Constructed');
        this.meta = new meta_1.Meta();
    }
}
exports.TitanCore = TitanCore;
//# sourceMappingURL=index.js.map