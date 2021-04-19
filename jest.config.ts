import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.ts'],
  preset: 'ts-jest',
  moduleNameMapper: { '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js' },
  collectCoverage: true,
}

export default config
