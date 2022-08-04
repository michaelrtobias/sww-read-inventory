const readItems = require("../dynamodb/readItems");

module.exports = async () => {
  let params = {};
  const result = await readItems(params, "watchInventory");
  return result;
};
