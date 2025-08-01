import { IProject } from "testeranto/src/Types";

const config: IProject = {
  projects: {
    
    core: {

      tests: [
        ["test/llm.test.ts", "node", { ports: 0 }, []],
        ["test/memory.test.ts", "node", { ports: 0 }, []],
        ["test/nucleus.test.ts", "node", { ports: 0 }, []],
      ],

      ports: ["3001"],
      src: "src",
      debugger: false,
      minify: false,
      clearScreen: false,
      externals: [],
      importPlugins: [],
      nodePlugins: [],
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