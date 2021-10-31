const semver = require("semver");
const supported = require("../../package.json").engines.node;
const satisfies = require("./satisfy.js");

const checkVersion = (exports.checkVersion = (v) => {
    const nopre = v.replace(/-.*$/, "");
    return {
        version: nopre,
        unsupported: !semver.satisfies(nopre, supported),
    };
});

exports.checkUnsupported = () => {
    const node = checkVersion(process.version);
    if (node.unsupported) {
        const log = require("../log/log.js");
        log.warn("CBN", "Carbon does not support Node.js version " + process.version);
        log.warn("CBN", "You may want to upgrade to a later version as we have can't");
        log.warn("CBN", "confirm that Carbon will work on this version.");
        log.warn("CBN", "You can find the latest version at https://nodejs.org/");
    }
};
