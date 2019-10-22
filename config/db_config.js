const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-south-1' });

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.BLOG_TABLE;


module.exports = {
	dynamodb, tableName
};