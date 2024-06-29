const router = require("./actions-aws-http-node.js")

exports.handler = function (event, context, callback) {
    console.log(JSON.stringify(event))
    return new Promise((resolve, reject) => {
        console.log(JSON.stringify(response))
        router.handler("./event.json", event, resolve)
    });
};