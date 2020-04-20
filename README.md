# nodejs_complete_rest_api
Rest API complete project build in NodeJS &amp; Express

Config file contents are not added due to keep privacy of the Database and App Key. The possible contents are as follows:

files contents:
config/
    appConst.js
    {
      exports.MONGODB_URI = "mongodb+srv://dbconnectionURL/blog";
      exports.APP_KEY = "app_sceret_to_encrypt_jwt";
    }


Post Man Collection for Request:
https://documenter.getpostman.com/view/8734310/Szf6YUN2


<strong> Documentation of API </strong> 


NodeJS Complete REST API
April 20, 2020
API Guide 
API details

This document will give a general overview and usability of the APIs. The design of the apis are completely followed the REST API core concept to keep clean and secure. Project structure and representations of the endpoints are exposed minimal way to make easier for implement in client side.

The source code is self explanatory which is precisely organized to extend more functionality for future  versions.

Components:

BASE URL: http://localhost:8080 

Dependency: https://cloud.mongodb.com/v2

EndPoints and Request and response:

user/signup
Note:  Create a new user with the required Parameters.
request:
type: PUT
{"name": "Jayanta", "email": "test@test.com", "password": “1234567"}

response:
{
    "message": "User Created!",
    "userId": "5e9da059fb5133274d277aa1"
}





user/login
Note:  Login returning user with email and password.
request:
type: POST
{"email": "test@test.com", "password": “1234567"}

response:
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvZGVyZ29nb2lAZ21haWwuY29tIiwidXNlcklkIjoiNWU5ZDYxY2MwMzdjN2MxMDE5M2Q0NzcxIiwiaWF0IjoxNTg3Mzg4NjQ5LCJleHAiOjE1ODc0MTAyNDl9.mo5JnJ3cJEnNPPRv7kLy0P0vHodSbkhvEltw3nGxoc8",
    "userId": "5e9d61cc037c7c10193d4771"
}

feed/post?page=1
Note:  Get available post page number is optional for first call and second call onwards we can send page number
request:
type: GET
ContentType: JSON
Authorization: ‘Bearer Token send here’
{"email": "test@test.com", "password": “1234567"}
response:
{
    "message": "Post  fetched",
    "posts": [
        {
            "_id": "5e9d61e7037c7c10193d4773",
            "title": "File testing with post for authorization",
            "content": "File testing with post for authorization",
            "imageUrl": "images/2020-04-20T08:48:39.988Z-Cover+-+Happymeals.jpg",
            "creator": "5e9d61cc037c7c10193d4771",
            "createdAt": "2020-04-20T08:48:39.993Z",
            "updatedAt": "2020-04-20T08:48:39.993Z",
            "__v": 0
        },
        {
            "_id": "5e9d61e9037c7c10193d4774",
            "title": "File testing with post for authorization",
            "content": "File testing with post for authorization",
            "imageUrl": "images/2020-04-20T08:48:41.575Z-Cover+-+Happymeals.jpg",
            "creator": "5e9d61cc037c7c10193d4771",
            "createdAt": "2020-04-20T08:48:41.589Z",
            "updatedAt": "2020-04-20T08:48:41.589Z",
            "__v": 0
        }
    ],
    "totalItems": 2
}

feed/post
Note: Create new post with required parameters
request:
type: POST
ContentType: MultipartFormData
Authorization: ‘Bearer Token send here’
title: String, content: string, image: file
response:
{
    "message": "Post Created Successfully",
    "post": {
        "_id": "5e9da325fb5133274d277aa2",
        "title": "new Post here",
        "content": "new Post here",
        "imageUrl": "images/2020-04-20T13:27:01.942Z-burger.jpg",
        "creator": "5e9d61cc037c7c10193d4771",
        "createdAt": "2020-04-20T13:27:01.948Z",
        "updatedAt": "2020-04-20T13:27:01.948Z",
        "__v": 0
    },
    "creator": {
        "_id": "5e9d61cc037c7c10193d4771",
        "name": "Jayanta"
    }
}


feed/post/[POST_ID]
Note: Edit Post by post ID
request:
type: PUT
ContentType: MultipartFormData
Authorization: ‘Bearer Token send here’
title: String, content: string, image: file
response:
{
    "message": "Post Updated",
    "post": {
        "_id": "5e9da325fb5133274d277aa2",
        "title": "File testing with post!!",
        "content": "File testing with post!!",
        "imageUrl": "images/2020-04-19T06:41:47.085Z-IMG_3615.JPG",
        "creator": "5e9d61cc037c7c10193d4771",
        "createdAt": "2020-04-20T08:48:39.993Z",
        "updatedAt": "2020-04-20T13:28:45.052Z",
        "__v": 0
    }
}



feed/post/[POST_ID]
Note:  View Specific Post details
request:
type: GET
Authorization: ‘Bearer Token send here’

response:
{
    "message": "Post Updated",
    "post": {
        "_id": "5e9da325fb5133274d277aa2",
        "title": "File testing with post!!",
        "content": "File testing with post!!",
        "imageUrl": "images/2020-04-19T06:41:47.085Z-IMG_3615.JPG",
        "creator": "5e9d61cc037c7c10193d4771",
        "createdAt": "2020-04-20T08:48:39.993Z",
        "updatedAt": "2020-04-20T13:28:45.052Z",
        "__v": 0
    }
}

feed/post/[POST_ID]
Note:  Delete Post by Post ID
request:
type: DELETE
Authorization: ‘Bearer Token send here’

response:
{
    "message": "Deleted Post"
}

