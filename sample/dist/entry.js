const router = require("aws-lambda-router-yaml")

exports.handler = async function(event, context) {
    console.log(JSON.stringify(event))
    const response = await new Promise((resolve, reject) => {
        router.handler("./routes.yaml", event, resolve, reject)
    });
    console.log(JSON.stringify(response))
    return response
};