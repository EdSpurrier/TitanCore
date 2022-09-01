'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNetworkMeta = void 0;
const { networkInterfaces } = require('os');
const GetNetworkMeta = () => {
    let nets = networkInterfaces();
    let results = Object.create(null); // Or just '{}', an empty object
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
            const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
            if (net.family === familyV4Value && !net.internal) {
                if (!results[name]) {
                    results[name] = [];
                }
                results[name].push(net.address);
            }
        }
    }
    return results;
};
exports.GetNetworkMeta = GetNetworkMeta;
//# sourceMappingURL=network.js.map