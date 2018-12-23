module.exports = function(config) {
	const karmaConfig = {
		frameworks: ["mocha", "karma-typescript"],

		files: ["./test/**/*.spec.ts"],
		client: {
			mocha: {
				opts: "./mocha.opts",
			},
		},
		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			"./test/**/*.spec.ts": ["karma-typescript"],
		},
		karmaTypescriptConfig: {
			compilerOptions: {
        lib: ["dom", "es6", "es5"],
    	},
		},
		browsers: [],
		// you can define custom flags
		customLaunchers: {
			CustomChromeHeadless: {
				base: "ChromeHeadless",
				flags: ["--window-size=400,300", "--no-sandbox", "--disable-setuid-sandbox"],
			},
		},
		reporters: ["mocha"],
	};

	karmaConfig.browsers.push(config.chrome ? "Chrome" : "CustomChromeHeadless");

	if (config.coverage) {
		karmaConfig.reporters.push("coverage-istanbul");
		karmaConfig.coverageIstanbulReporter = {
			reports: ["text-summary", "html", "lcovonly"],
			dir: "./coverage",
		};
		karmaConfig.webpack.module.rules.unshift({
			test: /\.ts$/,
			exclude: /(node_modules|test)/,
			loader: "istanbul-instrumenter-loader",
		});
		karmaConfig.singleRun = true;
	}

	config.set(karmaConfig);
};
