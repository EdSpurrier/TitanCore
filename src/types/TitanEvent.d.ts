declare namespace TitanCore {
    export interface TitanEvent {
        titanId: number,                        //  Titan ID of the Event Sender
        titanName: string,                      //  Titan Name of the Event Sender
        ip: string,                             //  IP Address of the Event Sender
        port: number,                           //  Port Number of the Event Sender
        name: string,                            //  Name of the event
    }
}

