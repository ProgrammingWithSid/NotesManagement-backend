# Note Management App

Objective: To design and implement a simple Notes Management Web Application using NodeJs and Express.

## Technologies Used
Framework : NodeJs, ExpressJs
Database : MongoDB
REST API

# Build Setup

git clone https://github.com/ProgrammingWithSid/NotesManagement-backend
# Install Dependencies
npm install

### Server at localhost:3000

# API Endpoints

## User
* GET /user/register : Register a User
* POST /user/login: Login a user.


## Notes

* GET /notes/getAllNotes : Fetch all notes of a particular user.
* POST /notes/createNote: Create a Note.
* PUT /notes/updateNote/:id: Update a Note by ID
* DELETE /notes/deleteNote/:id: Delete a Note by ID.
* PUT /notes/toggleNote/:id: Toggle to Read and unRead a task by ID.

## API References

#### Register a User


```http
  GET /user/register
```

**Body :**
```
{
    "first_name": "Satender",
    "last_name": "kumar",
    "email":"satenderk8700@gmail.com",
    "password":"12345678"
}
```

#### Login a User


```http
  GET /user/login
```

**Body :**
```
{
    "email": "satenderk8700@gmail.com",
    "password": "12345678"
}
```

#### Get all Notes of a user

```http
  GET /notes/getAllNotes
```

**Header :** 
```
  Cookie: auth-token "access_token"
```


#### Add a new Note

```http
  POST /notes/createNote
```

**Header :** 
```
  Cookie: auth-token "access_token"
```


**Body :**
```
{
    "title": "Testing Add Note",
    "description": "Now testing add Note"
}
```

#### Update a Note

```http
  PUT /notes/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `id`     | **Required**. |


**Header :** 
```
  Cookie: auth-token "access_token"
```

**Body :**
```
{
    "taskName": "Testing Update View",
    "description": "Now testing Update view"
}
```

#### Delete a Note

```http
  DELETE /notes/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `id` | **Required**. |

**Header :** 
```
  Cookie: auth-token "access_token"
```


# Connect @
* LinkedIn: https://www.linkedin.com/in/satender-kumar-600bb3179/
* Leetcode: https://leetcode.com/satenderk8700
* Email: satenderk8700@gmail.com   

# Personal
Name: Satender Kumar  

# Gratitude
Thank You
