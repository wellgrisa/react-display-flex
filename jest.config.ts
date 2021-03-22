import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ["./jest.setup.ts"],
  preset: "ts-jest",
};

export default config;
