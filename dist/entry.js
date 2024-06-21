const router = require("./router.js")

exports.handler = async function (event, context) {
    return router.handler("./event.json", event)
};