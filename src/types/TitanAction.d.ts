declare namespace TitanCore {
    export interface TitanAction {
        action: CallableFunction,               //  CallableFunction => The Action being performed [name, caller, Function]
        arguments: {},                          //  Arguments for the CallableFunction => object = {}
        preActionEvent: TitanEvent[],           //  Event Triggered BEFORE the Action (CallableFunction) if run
        actionEvent: TitanEvent[],              //  Event Triggered ON the Action (CallableFunction) if run
        postActionEvent: TitanEvent[],          //  Event Triggered AFTER the Action (CallableFunction) if run
    }
}