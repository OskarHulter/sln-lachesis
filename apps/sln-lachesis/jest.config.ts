/* eslint-disable */
export default {
	displayName: "sln-lachesis",
	preset: "../../jest.preset.js",
	transform: {
		"^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nx/react/plugins/jest",
		"^.+\\.[tj]sx?$": ["babel-jest", { presets: ["@nx/next/babel"] }],
	},
	transformIgnorePatterns: ["../../dist/packages/ui/(?!(.*.*))"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
	coverageDirectory: "../../coverage/apps/sln-lachesis",
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
};
