const router = require("./router.js")

exports.handler = function (event, context, callback) {
    const wrapper = (response) => { callback(null, response) }
    router.handler("./event.json", event, wrapper)
};