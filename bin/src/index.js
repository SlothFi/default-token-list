"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const harmony_mainnet_json_1 = __importDefault(require("./list/harmony-mainnet.json"));
const package_json_1 = require("../package.json");
function buildList() {
    const parsed = package_json_1.version.split(".");
    return {
        name: "SlothFi Default",
        timestamp: new Date().toISOString(),
        version: {
            major: +parsed[0],
            minor: +parsed[1],
            patch: +parsed[2],
        },
        tags: {},
        logoURI: "https://res.cloudinary.com/slothfinance/image/upload/v1636287070/128x128_nzhzog.png",
        keywords: ["slothfi", "default"],
        tokens: [...harmony_mainnet_json_1.default]
            // sort them by symbol for easy readability
            .sort((t1, t2) => {
            if (t1.chainId === t2.chainId) {
                return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
            }
            return t1.chainId < t2.chainId ? -1 : 1;
        }),
    };
}
exports.default = buildList;
console.log(JSON.stringify(buildList(), null, 2));
