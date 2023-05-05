const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser');

const initialSet = [1,2,3,4,5,6]
const emptySet = [0,0,0,0,0,0]
const white = '#fff'
const whiteSet = [white,white,white,white,white,white]
const colorSet = {
  1: '#ef476f',
  2: '#f78c6b',
  3: '#ffd166',
  4: '#06d6a0',
  5: '#118ab2',
  6: '#073b4c'
}
let matrix = [initialSet,emptySet,emptySet,emptySet,emptySet,emptySet]

app.use(cors(), bodyParser.json())

app.get('/colors', (req, res) => {
  const newMatrix = [[...emptySet],[...emptySet],[...emptySet],[...emptySet],[...emptySet],[...emptySet]]
  const colorMatrix = [[...whiteSet],[...whiteSet],[...whiteSet],[...whiteSet],[...whiteSet],[...whiteSet]]
  for (const i of initialSet) {
    let posX
    let posY
    do {
      posX = Math.round(Math.random() * 5)
      posY = Math.round(Math.random() * 5)
    } while (matrix[posX][posY] === i || newMatrix[posX][posY] !== 0)
    newMatrix[posX][posY] = i
    colorMatrix[posX][posY] = colorSet[i]
  }
  matrix = newMatrix
  res.send(colorMatrix)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})