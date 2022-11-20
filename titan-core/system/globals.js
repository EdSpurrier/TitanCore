"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actor = exports.emitter = exports.console = void 0;
const TitanEmitter_1 = require("../utils/TitanEmitter");
const TitanConsole_1 = require("../utils/TitanConsole");
const TitanActor_1 = require("../utils/TitanActor");
//  Initiate Globals
global.titanConsole = new TitanConsole_1.TitanConsole({});
exports.console = global.titanConsole;
global.titanEmitter = new TitanEmitter_1.TitanEmitter({});
exports.emitter = global.titanEmitter;
global.titanActor = new TitanActor_1.TitanActor({});
exports.actor = global.titanActor;
//# sourceMappingURL=globals.js.map