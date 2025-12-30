import database from "@/infra/database.js"

const status = async (request, response) => {
  const result = await database.query("SELECT 1 + 1 AS result")
  console.log(result.rows)
  response.status(200).json({ status: "acima da média" })
}

export default status
