const router = require("./actions-aws-http-node.js")

exports.handler = async (event, context, callback) => {
    console.log(JSON.stringify(event))
    const response = await new Promise((resolve, reject) => {
        router.handler("./event.json", event, resolve)
    });
    console.log(JSON.stringify(response))
    return response
};