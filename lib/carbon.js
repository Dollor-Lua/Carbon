module.exports = async (process) => {
    process.title = "Carbon";

    const { checkForUnsupportedNode } = require("../lib/utils/unsupported.js");

    const log = require("./log/log.js");
    log.pause();

    checkForUnsupportedNode();
};
