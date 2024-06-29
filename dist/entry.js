const router = require("./actions-aws-http-node.js")

exports.handler = function (event, context, callback) {
    console.log(event)
    const wrapper = (response) => { 
        console.log(response)
        callback(null, response) }
    router.handler("./event.json", event, wrapper)
};