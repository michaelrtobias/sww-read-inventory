const readItems = require("../dynamodb/readItems");

module.exports = async () => {
  let params = {};
  const result = await readItems(params, "watchInventory");
  console.log("result", result);
  return result;
};
