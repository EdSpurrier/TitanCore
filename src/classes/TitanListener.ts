import { actor } from "../system/globals";

export class TitanListener {
    listenerData: TitanCore.TitanListenerData
    
    constructor(listenerData: TitanCore.TitanListenerData){
        this.listenerData = listenerData;
    }

    checkEvent = (event: TitanCore.TitanEvent, eventData: any) => {

    }

    trigger = () => {
        
        this.listenerData.actions.forEach(action => {
            actor.trigger(action);
        })

    }
}