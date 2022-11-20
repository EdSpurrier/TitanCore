"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitanCore = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const meta_1 = require("./system/meta/meta");
const TitanEventManager_js_1 = require("./utils/TitanEventManager.js");
const globals_1 = require("./system/globals");
const TitanConsole_1 = require("./utils/TitanConsole");
dotenv_1.default.config();
class TitanCore {
    constructor(options) {
        this.init = () => {
            globals_1.console.logProcessComplete(this.constructor.name, 'Initiated');
        };
        globals_1.console.logProcessComplete(this.constructor.name, 'Constructed');
        this.console = new TitanConsole_1.TitanConsole({});
        this.meta = new meta_1.Meta();
        this.eventManager = new TitanEventManager_js_1.TitanEventManager({});
        this.init();
    }
}
exports.TitanCore = TitanCore;
//# sourceMappingURL=index.js.map