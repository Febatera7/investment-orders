import log4js from "log4js";

log4js.configure({
	appenders: {
		out: {
			type: "stdout",
			layout: {
				type: "pattern",
				pattern: "%[[%d{dd/MM/yy hh:mm:ss}] [%p] %c:%] %m",
			},
		},
	},
	categories: { default: { appenders: ["out"], level: "all" } },
	pm2: true,
});

const logger = log4js.getLogger(process.env.APP_NAME);

export default logger;
