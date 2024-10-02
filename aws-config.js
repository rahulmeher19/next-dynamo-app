const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1'  // or your preferred region
});

const dynamoDb = new AWS.DynamoDB();

module.exports = dynamoDb;
