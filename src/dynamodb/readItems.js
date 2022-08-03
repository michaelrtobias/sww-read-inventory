const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

module.exports = async function (params, tableName) {
  const ddb = new AWS.DynamoDB({
    apiVersion: "2012-08-10",
    region: "us-east-1",
  });
  params["TableName"] = tableName;
  const scanResults = await ddb.scan(params).promise();
  console.log("scanResults", scanResults);
  const unmarshalledScan = scanResults.Items.map((result) =>
    AWS.DynamoDB.Converter.unmarshall(result)
  );
  console.log("unmarshalledScan", unmarshalledScan);
  let results = {};
  results.pagination = {
    count: scanResults.Count,
    scanned_count: scanResults.ScannedCount,
  };
  results.items = unmarshalledScan;
  return results;
};
