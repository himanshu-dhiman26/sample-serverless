##  Request Headers

  ### Content-Type:application/json
  ### app_user_id:test
  ### app_user_name:test
  
  
  

## endpoints:

  ### POST - https://4vtblvzdme.execute-api.ap-south-1.amazonaws.com/dev/blogs
  
    - payload: 
    
      {
        "Item": {
          "title": "Something",
          "content": "adsadsdjhsajkdhkjsafgjksdkfhsasa"
        }
      }
  
  ### GET - https://4vtblvzdme.execute-api.ap-south-1.amazonaws.com/dev/blogs/{blog_id}
  ### GET - https://4vtblvzdme.execute-api.ap-south-1.amazonaws.com/dev/blogs
  ### PUT - https://4vtblvzdme.execute-api.ap-south-1.amazonaws.com/dev/blogs
  
    - payload: 
    
      {
        "Item": {
          "title": "Something",
          "content": "Updated content",
          "timestamp": <timestamp>,
          "blog_id": <blog_ID>
        }
      }
      
      
  ### DELETE - https://4vtblvzdme.execute-api.ap-south-1.amazonaws.com/dev/blogs/{blog_id}
