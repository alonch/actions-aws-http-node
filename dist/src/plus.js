exports.handler = async function (parameters) {
  const {
    path: { z },
    query: { x },
    body: { y }
  } = parameters
  return {
    status: 200,
    body: {
      total: z+x+y
    }
  };
};