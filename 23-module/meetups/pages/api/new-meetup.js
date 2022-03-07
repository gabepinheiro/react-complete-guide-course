function handler (req, res) {
  if(req.method === 'POST') {
    const data = req.body

    const {
      image,
      title,
      address,
      description
    } = data

    console.log(data)

    return res.json({
      ok: true
    })
  }

 return  res.json({
    hello: 'Hello!'
  })
}

export default handler
