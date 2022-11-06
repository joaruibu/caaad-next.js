import dbConnect from "../../lib/dbConnect"
import Block from '../../models/Block'

// export default function handler(req, res) {
//   res.status(200).json({ name: 'hola' })
// }

export default async function handler(req, res) {
  await dbConnect()

  // POST api/blocks

  const { method } = req
  switch (method) {
    case 'POST':
      try {
        const block = new Block(req.body)
        await block.save()

        return res.status(200).json({ success: true, block })

      } catch (error) {
        return res.status(400).json({ success: false, error })
      }
    default:
      return res.status(500).json({ success: false, error })
  }

}