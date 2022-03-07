import { MongoClient } from 'mongodb'

async function handler (req, res) {
  if(req.method === 'POST') {
    const data = req.body

    const client = await MongoClient.connect(
      process.env.CONNECT_MONGODB_URL
    )

    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const result = await meetupsCollection.insertOne(data)

    console.log(result)

    client.close()

    return res.status(201).json({
      ok: true,
      message: 'Meetup inserted!'
    })
  }

 return  res.json({
    hello: 'Hello!'
  })
}

export default handler
