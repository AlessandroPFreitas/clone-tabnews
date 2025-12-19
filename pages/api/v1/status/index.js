const status = (request, response) => {
  response.status(200).json({ status: "acima da média" })
}

export default status
