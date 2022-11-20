"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitanConsole = void 0;
const chalk_1 = __importDefault(require("chalk"));
const error = chalk_1.default.bold.red;
const warning = chalk_1.default.hex('#FFA500'); // Orange color
const good = chalk_1.default.bold.green;
const lineBreak = chalk_1.default.bold.grey;
const line = chalk_1.default.bold.grey;
const actionColor = chalk_1.default.hex('#fce803');
const classColor = chalk_1.default.hex('#6d3ddb');
const processComplete = chalk_1.default.hex('#3ddbcc');
const success = chalk_1.default.hex('#3ddb45');
class TitanConsole {
    constructor(options) {
        this.debug = false;
        this.lineSpace = () => {
            this.log('');
        };
        this.lineBreak = () => {
            this.lineSpace();
            this.log(lineBreak('[====================]'));
            this.lineSpace();
        };
        this.line = () => {
            this.log(line('[====================]'));
        };
        this.debugLog = (...output) => {
            if (this.debug)
                this.log(output);
        };
        this.log = (...output) => {
            this.log(output);
        };
        this.logError = (...output) => {
            this.lineBreak();
            this.log(error('[ERROR]>', output));
            this.lineBreak();
        };
        this.logAction = (...output) => {
            this.log(actionColor(output));
        };
        this.logProcessComplete = (processClass, ...output) => {
            this.log(classColor(processClass), '=>', processComplete(...output), success('[Complete]'));
        };
        this.init = () => {
            this.log(this.debug ? good('Debug => Active') : warning('Debug => Inactive'));
        };
        this.debug = process.env.DEBUG === 'true';
        this.log = console.log;
        this.logProcessComplete(this.constructor.name, 'Constructed');
    }
}
exports.TitanConsole = TitanConsole;
//# sourceMappingURL=TitanConsole.js.map