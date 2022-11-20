"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitanActor = void 0;
class TitanActor {
    constructor(action) {
        this.trigger = () => {
            this.action.action(this.action.arguments);
        };
        this.action = action;
    }
}
exports.TitanActor = TitanActor;
//# sourceMappingURL=TitanActor.js.map