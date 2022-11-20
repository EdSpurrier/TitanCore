import { TitanEmitter } from "../utils/TitanEmitter";
import { TitanConsole } from "../utils/TitanConsole";
import { TitanActor } from "../utils/TitanActor";

/**
 * IMPORTANT - do not use imports in this file!
 * It will break global definition.
 */
 declare namespace NodeJS {
    export interface Global {
        titanConsole: TitanConsole;
        titanEmitter: TitanEmitter;
        titanActor: TitanActor;
    }
}

declare var console: TitanConsole;
declare var emitter: TitanEmitter;
declare var actor: TitanActor;