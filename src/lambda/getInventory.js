// const createItem = require("../dynamodb/createItem");
// const formatParams = (body) => {
//   let params = {};
//   const keys = Object.keys(body);
//   keys.forEach((key) => {
//     params[key] = {
//       S: body[key],
//     };
//   });
//   // do something with images
//   params = {
//     ...params,
//     timestamp: {
//       S: new Date().toISOString(),
//     },
//   };

//   return params;
// };

module.exports = async (body) => {
  // let params = {
  //   Item: formatParams(body),
  // };
  // const result = await createItem(params, "leads");
  const result = "reading items with mom jeans";
  console.log("body", body);
  return result;
};
