export default {}

export const getItem = (req, res) => {
  res.status(200).json({ data: req.item })
}

export const postItem = (req, res) => {
  res.status(200).json({ data: req.item })
}
