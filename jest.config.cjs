module.exports = {
	preset: 'ts-jest',
	verbose: true,
	modulePaths: ['<rootDir>/src'],
	modulePathIgnorePatterns: ['<rootDir>/dist/'],
	collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
	coverageThreshold: {
		global: {
			branches: 50,
			functions: 50,
			lines: 50,
			statements: 50,
		},
	},
};
