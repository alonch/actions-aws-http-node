const router = require("./actions-aws-http-node.js")

exports.handler = function (event, context, callback) {
    console.log(JSON.stringify(event))
    const wrapper = (response) => { 
        console.log(JSON.stringify(response))
        callback(null, response) }
    router.handler("./event.json", event, wrapper)
};