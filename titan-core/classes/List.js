"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
class List {
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
    add(item) {
        this.items.push(item);
    }
    remove(item) {
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
exports.List = List;
List.prototype.toString = function listToString() {
    return JSON.stringify(this.getItems());
};
/*
    Example of use:

    import { List } from './classes/List.js';

    var list : List<string> = new List(5, "default");
    list.set(1, "second");
    list.set(0, "first");

    console.log(list.toString());

*/ 
//# sourceMappingURL=List.js.map