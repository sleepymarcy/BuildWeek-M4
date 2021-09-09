## Build Week  
 
 # Day 1
 Extra FE - D1 LinkedIn Part 1

    You'll be implementing the frontend of a LinkedIn-like application.
    Today you are gonna focus on the "profile page".
    Make it as close as possible as LinkedIn
    
    https://www.linkedin.com/in/me/

    Create your profile HERE --> http://strive.school/linkedin-registration
    and receive back the token for API authentication

    API (provide authentication with your bearer token)

    ---------------------------------------------------------------------------

    PROFILES:

    - GET https://striveschool-api.herokuapp.com/api/profile/ 
    Retrieves list of profiles
    - GET https://striveschool-api.herokuapp.com/api/profile/me
    Retrieves my profile
    - GET https://striveschool-api.herokuapp.com/api/profile/{userId}
    Retrieves the profile with userId = {userId}
    - PUT https://striveschool-api.herokuapp.com/api/profile/
    Update current user profile details
    
    ---------------------------------------------------------------------------

    PROFILE Model:
    {
        "_id": "5d84937322b7b54d848eb41b", //server generated
        "name": "Diego",
        "surname": "Banovaz",
        "email": "diego@strive.school",
        "bio": "SW ENG",
        "title": "COO @ Strive School",
        "area": "Berlin",
        "image": ..., //server generated on upload
        "username": "admin", //server generated from Auth
        "createdAt": "2019-09-20T08:53:07.094Z", //server generated
        "updatedAt": "2019-09-20T09:00:46.977Z", //server generated
        "__v": 0 //server generated
    }
    
    
# Day 2
Extra FE - D2 LinkedIn Part 2

    You'll be implementing the frontend of a LinkedIn-like application.
    Today you are gonna focus on the "experiences" in the profile page you started yesterday.
    Make it as close as possible as LinkedIn
    
    https://www.linkedin.com/in/me/

    API (provide authentication with your existing bearer token)

    ---------------------------------------------------------------------------

    EXPERIENCES:

    - GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
    Get user experiences
    - POST https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
    Create an experience. NOTE: every user is allowed to mess only with his own experiences
    - GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
    Get a specific experience
    - PUT https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
    Get a specific experience
    - DELETE https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
    Get a specific experience
    
    ---------------------------------------------------------------------------

    EXPERIENCE Model:
    {
        "_id": "5d925e677360c41e0046d1f5",  //server generated
        "role": "CTO",
        "company": "Strive School",
        "startDate": "2019-06-16",
        "endDate": "2019-06-16", //could be null
        "description": "Doing stuff here and there",
        "area": "Berlin",
        "username": "admin",  //server generated
        "createdAt": "2019-09-30T19:58:31.019Z",  //server generated
        "updatedAt": "2019-09-30T19:58:31.019Z",  //server generated
        "__v": 0  //server generated
        "image": ... //server generated on upload
    }
    
    
# Day 3
Extra FE - D3 LinkedIn Part 3

    You'll be implementing the frontend of a LinkedIn-like application.
    Today you'll be working on the news feed.

    Start from yesterday App, if something is still missing, finish previous features before starting with this part.
    Use these endpoints to implement the feed feature.

    API (provide authentication with your existing bearer token)

    ---------------------------------------------------------------------------

    POSTS:

    - GET https://striveschool-api.herokuapp.com/api/posts/ 
    Retrieve posts
    - POST https://striveschool-api.herokuapp.com/api/posts/
    Creates a new post
    - GET https://striveschool-api.herokuapp.com/api/posts/{postId}
    Retrieves the specified post
    - PUT https://striveschool-api.herokuapp.com/api/posts/{postId}
    Edit a given post (note: you can only edit your posts)
    - DELETE https://striveschool-api.herokuapp.com/api/posts/{postId}
    Removes a post
    
    ---------------------------------------------------------------------------

    POST Model:
    {
        "_id": "5d93ac84b86e220017e76ae1", //server generated
        "text": "this is a text 12312 1 3 1",  <<--- THIS IS THE ONLY ONE YOU'LL BE SENDING!!!
        "username": "admin", //server generated
        "createdAt": "2019-10-01T19:44:04.496Z", //server generated
        "updatedAt": "2019-10-01T19:44:04.496Z", //server generated
        "__v": 0 //server generated
    }

    ---------------------------------------------------------------------------

    Make it as close as possible as LinkedIn Newsfeed page


# Day 4
Extra FE - D4 LinkedIn Part 4

    You'll be implementing the frontend of a LinkedIn-like application.
    Today you'll be working on the image upload.
    Every user will be able to post comments / links / photos on the feed.

    Start from yesterday App, if something is still missing, finish previous features before starting this part.

    On both POSTS and EXPERIENCES it should be possible to upload a picture.

    You can do it using the FormData content and the input type="file"

    Part of the challenge is also to understand how to do it googling / searching ;-)

    - POST https://striveschool-api.herokuapp.com/api/profile/{userId}/picture
    Replaces user profile picture.
    Name of the picture in the form-data: profile

    - POST https://striveschool-api.herokuapp.com/api/profile/{userId}/experiences/:expId/picture
    Changes the experience picture (only if userId == current user). 
    Name of the picture in the form-data: experience

    - POST https://striveschool-api.herokuapp.com/api/posts/{postId}
    Adds an image to the post.
    Name of the picture in the form-data: post