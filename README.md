

# ToDOList!

ToDOList is a simple to do list project.
Node Js was used for backend and html, CSS ,... for front end and for api we use axios lib.


## Data Base
We use MySQL for store our users and their notes, so we need a MySQL data base called `notes`,  user of db should be `root`, and password for db user is `92nEx*s4m#HkqF=e`.
You can custom above items in [config.js](https://github.com/momen7899/ToDoList/blob/main/Server/mysql/config.js).

    module.exports = {
		HOST:  "localhost",
	    USER:  "root",
	    PASSWORD:  "92nEx*s4m#HkqF=e",
	    DB:  "notes"
	};
 
To Create `users` table enter the below code.

    CREATE TABLE user ( id int NOT NULL AUTO_INCREMENT, username varchar(255) NOT NULL,password varchar(255), token varchar(255) NOT NULL, PRIMARY KEY (id));

`users` table should be like this.
|Name | type|
|--|--|
| id | int |
| user_name | varchar(255) |
| password | varchar(255) |
| token | varchar(255) |


To Create `notes` table enter the below code.

    CREATE TABLE user ( id int NOT NULL AUTO_INCREMENT, userId int NOT NULL, title varchar(255),description varchar(255),status int, date varchar(255),time varchar(255), PRIMARY KEY (id) , FOREIGN  KEY (userId) REFERENCES users(id));

`notes` table should be like this.
|Name | type|
|--|--|
| id | int |
| userId | int |
| title | varchar(255) |
| description | varchar(255) |
| status | int |
| date | varchar(255) |
| time | varchar(255) |

## Run project

To run project you should install [node js](https://nodejs.org/en/) first.

To run the project go to [Server](https://github.com/momen7899/ToDoList/tree/main/Server) directory then run below command on your terminal or cmd:

    npm run start:dev


## Points
This project use port number 8080 to run express server.

