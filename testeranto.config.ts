import { IProject } from "testeranto/src/Types";

// import esbuildPluginFileloc from "esbuild-plugin-fileloc/dist";
// const esbuildPluginFileloc = require('esbuild-plugin-fileloc');
import esbuildPluginFileloc from "esbuild-plugin-fileloc/dist/index.esm";

const config: IProject = {
  projects: {
    
    core: {

      tests: [
        ["test/llm.test.ts", "node", { ports: 0 }, []],
        ["test/memory.test.ts", "node", { ports: 0 }, []],
        ["test/nucleus.test.ts", "node", { ports: 0 }, []],
        ["test/changeValidator.test.ts", "node", { ports: 0 }, []],
        ["test/economicVerifier.test.ts", "node", { ports: 0 }, []],
        ["test/identityEngine.test.ts", "node", { ports: 0 }, []],
        ["test/goalEngine.test.ts", "node", { ports: 0 }, []],
      ],

      ports: ["3001"],
      src: "src",
      debugger: false,
      minify: false,
      clearScreen: false,
      externals: [],
      importPlugins: [],
      nodePlugins: [
        // esbuildPluginFileloc
      ],
      webPlugins: [],
      
      featureIngestor: async function (s: string): Promise<string> {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (res) => {
          // try {
          //   res((await (await fetch(new URL(s).href)).json()).body);
          //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
          // } catch (err) {
          //   res(s);
          // }
        });
      },
      
    },
  },
};
export default config;