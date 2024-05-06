import express, { Request, Response } from 'express'
import dex, { GameNames } from './dex'

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

app.get('/dex', async (req: Request, res: Response) => {
  const { game } = req.body
  if (GameNames.includes(game)) {
    const data = await dex(game)
    console.log(data)
    res.status(200).send(data)
  } else {
    res.status(400).send(new Error('Game not supported'))
  }

  res.end()
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
