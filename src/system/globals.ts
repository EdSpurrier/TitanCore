import { TitanEmitter } from "../utils/TitanEmitter";
import { TitanConsole } from "../utils/TitanConsole";
import { TitanActor } from "../utils/TitanActor";

//  Initiate Globals
global.titanConsole = new TitanConsole({});
export var console = global.titanConsole

global.titanEmitter = new TitanEmitter({});
export var emitter = global.titanEmitter

global.titanActor = new TitanActor({});
export var actor = global.titanActor

