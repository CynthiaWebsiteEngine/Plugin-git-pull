const join = require("path").join;
const readFileSync = require("fs").readFileSync;
const execSync = require("child_process").execSync;
const exec = require("child_process").exec;
const configjson = readFileSync(join(__dirname, "config.json"), { encoding: "utf8", flag: "r" });
const config = JSON.parse(configjson);
module.exports = {
	CyntiaPluginCompat: 1,
	expressActions(expressapp) {
		if (config.enabled) {
			console.log("Git-Puller\t\tRunning in '" + join(__dirname, "/../../") + "'!");
			const sshell = (cmd) => execSync(cmd, { encoding: 'utf8', cwd: join(__dirname, "/../../") });
			const ashell = (cmd) => exec(cmd, { encoding: 'utf8', cwd: join(__dirname, "/../../") });
			if (config.PullonStarts) {
				console.log("Git-Puller\t\tFetching and pulling changes...");
				sshell("git fetch");
				ashell("git pull");
			}
			setInterval(() => {
				console.log("Git-Puller\t\tFetching and pulling changes...");
				sshell("git fetch");
				if (config.FullRestartOnIntervalPull) {
					sshell("git pull");
					process.exit(1);
				} else {
					ashell("git pull");
				}
			}, config.PullInterval);
		}
	}
};