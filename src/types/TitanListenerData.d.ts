declare namespace TitanCore {
    export interface TitanListenerData {
        titanId: number,                        //  ID of the listener
        titanName: string,                      //  Titan Name of the listener
        ip: string,                             //  IP Address of the listener
        port: number,                           //  Port Number of the listener
        listeningMethod: ListeningMethod,       //  How the listener is listening eg. UDP, TCP, SerialPort, Any
        focus: {
            name: string,                        //  What is the name of the TitanEvent that this listener is listening to
            focusTitanId: string,                //  What is the Titan ID of the TitanEvent Sender that this listener is listening to {* = any}
            focusTitanName: string              //  What is the Titan Name of the TitanEvent Sender that this listener is listening to {* = any}
        },
        events: TitanEvent[],                   //  TitanEvents that are triggered when this listener hears the TitanEvent
        actions: TitanAction[]                  //  TitanActions that are triggered when this listener hears the TitanEvent

    }

  
}

