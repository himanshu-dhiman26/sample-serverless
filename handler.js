'use strict';

const db = require('./config/db_config.js');
const util = require('./utils/headers.js');
const moment = require('moment');
const uuid = require('uuid/v4');

module.exports.getBlogs = async event => {
  try {

    let user_id = util.getUserId(event.headers);

    let params = {
      TableName: db.tableName,
      KeyConditionExpression: "user_id = :uid",
      ExpressionAttributeValues: {
        ":uid": user_id
      },
      ScanIndexForward: false
    }

    let data = await db.dynamodb.query(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (err) {
    console.log("Error", err);

    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      body: JSON.stringify({
        error: err.name ? err.name : "Exception",
        message: err.message ? err.message : "Unknown Error"
      })
    };
  }
};

module.exports.getBlog = async event => {
  try {
    let blog_id = event.pathParameters.blog_id;

    let params = {
      TableName: db.tableName,
      Key: {
        user_id: util.getUserId(event.headers),
        blog_id: blog_id
      }
    }

    let data = await db.dynamodb.get(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (err) {
    console.log("Error", err);

    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      body: JSON.stringify({
        error: err.name ? err.name : "Exception",
        message: err.message ? err.message : "Unknown Error"
      })
    };
  }
};

module.exports.addBlog = async event => {
  try {

    let item = JSON.parse(event.body).Item;

    item.user_id = util.getUserId(event.headers);    
    item.user_name = util.getUserName(event.headers);    
    item.blog_id = item.user_id + ':' + uuid()
    item.timestamp = moment().unix()

    let data = await db.dynamodb.put({
      TableName: db.tableName,
      Item: item
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(item)
    }

  } catch (err) {
    console.log("Error", err);

    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      body: JSON.stringify({
        error: err.name ? err.name : "Exception",
        message: err.message ? err.message : "Unknown Error"
      })
    };
  }
};

module.exports.updateBlog = async event => {
  try {

    let item = JSON.parse(event.body).Item;

    item.user_id = util.getUserId(event.headers);    
    item.user_name = util.getUserName(event.headers);    

    let data = await db.dynamodb.put({
      TableName: db.tableName,
      Item: item,
      ConditionExpression: '#t = :t',
      ExpressionAttributeNames: {
        '#t': 'timestamp'
      },
      ExpressionAttributeValues: {
        ':t': item.timestamp
      }
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(item)
    }

  } catch (err) {
    console.log("Error", err);

    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      body: JSON.stringify({
        error: err.name ? err.name : "Exception",
        message: err.message ? err.message : "Unknown Error"
      })
    };
  }
};

module.exports.deleteBlog = async event => {
  try {

    let blog_id = event.pathParameters.blog_id;

    let params = {
      TableName: db.tableName,
      Key: {
        user_id: util.getUserId(event.headers),
        blog_id: blog_id
      }
    }

    let data = await db.dynamodb.delete(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (err) {
    console.log("Error", err);

    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      body: JSON.stringify({
        error: err.name ? err.name : "Exception",
        message: err.message ? err.message : "Unknown Error"
      })
    };
  }
};
