* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  color: #545454;
  background-color: white;
  display: flex;
  font-family: sans-serif;
  justify-content: center;
}

.container {
  margin: 50px;
  padding: 50px;
  border-radius: 25px;
}

.title {
  text-align: center;
}

.status-action {
  display: flex;
  margin-top: 25px;
  font-size: 25px;
  justify-content: space-around;
  height: 30px;
}

.reset {
  cursor: pointer;
}

.reset:hover {
  color: red;
}

.game-grid {
  background: black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 15px;
  margin-top: 50px;
}

.game-cell {
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 200px;
  width: 200px;
}

.x {
  background-image: url('./X.gif');
}
.o {
  cursor: default;
  background-image: url('./O.gif');
}

.game-cell {
    height: 150px;
    width: 150px;
  }

  .x::after {
    font-size: 150px;
  }

  .o::after {
    font-size: 175px;
}
