import HarmonyMainnetList from "./list/harmony-mainnet.json";
import { version } from "../package.json";

export default function buildList() {
  const parsed = version.split(".");
  return {
    name: "SlothFi Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://res.cloudinary.com/slothfinance/image/upload/v1636287070/128x128_nzhzog.png",
    keywords: ["slothfi", "default"],
    tokens: [...HarmonyMainnetList]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
}

console.log(JSON.stringify(buildList(), null, 2));
