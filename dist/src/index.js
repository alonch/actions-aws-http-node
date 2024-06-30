exports.handler = async function () {
    return {
      status: 200,
      body: "<h1>hello world</h1>",
      header: {
        ContentType: "text/html"
      }
    };
  };