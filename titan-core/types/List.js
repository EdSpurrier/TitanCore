"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListArray = void 0;
class ListArray {
    constructor(n, defaultValue) {
        if (n === undefined) {
            this.items = [];
        }
        else {
            if (n && defaultValue) {
                this.items = Array(n).fill(defaultValue);
            }
            else {
                this.items = Array(n);
            }
        }
    }
    push(item) {
        this.items.push(item);
    }
    pop(item) {
        return this.items.pop();
    }
    get(index) {
        return this.items[index];
    }
    set(index, item) {
        this.items[index] = item;
    }
    getItems() {
        return this.items;
    }
}
exports.ListArray = ListArray;
ListArray.prototype.toString = function listToString() {
    return JSON.stringify(this.getItems());
};
global.List = List;
//# sourceMappingURL=List.js.map