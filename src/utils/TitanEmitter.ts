export class TitanEmitter {

    constructor(options) {

        global.titanConsole.logProcessComplete(this.constructor.name, 'Constructed');

	}

    emit = (event: TitanCore.TitanEvent) => {
        global.titanConsole.log(this.constructor.name, 'Emitting Event =>', event);
    }
}
