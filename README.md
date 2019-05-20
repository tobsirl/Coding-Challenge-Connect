# Coding Challenge: 5 in a Row
Name: Paul Tobin

#### The project uses a Node js backend with React js on the frontend.
#### State is stored on the backend server using a GameState Class, this state is made available to the frontend through api calls.
#### A better approach would have been using sockit.io for real time communication. I don't have much experience with sockit.io but did make an attempt to use it. [Socket.io attempt](https://github.com/tobsirl/socket-connect)


## Installation Instructions
### Server: 
In the project directory
```bash
npm install
npm run dev
```
Server runs on localhost:3005

### Client: cd in the client directory 
```bash
npm install
npm start
```
Installing Jest in the main project directory introduced as issue with the react front, adding .env file with the SKIP_PREFLIGHT_CHECK=true gets past this problem

### Testing using Jest
#### Currently working through [Testing JavaScript with Kent C. Dodds](https://testingjavascript.com)

## API Design
| HTTP Verb | Path     | Public/Private | Description |
| -- | -- |   --   |  --   |     
| GET:| /playgame |Public  | Play a new game |
| POST:| /playgame |Public  | Update the board |

#### Example of the json
```json
{
"player1": 1,
"player2": 2,
"currentPlayer": 1,
"board": [
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,1,0,0,0,0,0,0,0],
[0,1,0,0,1,1,0,0,0]],
"gameOver": true,
"message": "Game over. Please start a new game."
}
```

## Screenshot
![5 in a Row](https://user-images.githubusercontent.com/25591390/58036332-bf4b5300-7b22-11e9-9d15-dece3767d62a.PNG)