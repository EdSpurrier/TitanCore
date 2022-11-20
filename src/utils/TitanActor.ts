
export class TitanActor {

    constructor(options){
        global.titanConsole.logProcessComplete(this.constructor.name, 'Constructed');
    }

    trigger = (action: TitanCore.TitanAction) => {

        global.titanConsole.logAction(action);
        action.action(action.arguments);

    }

}