test("GET to api/v1/status should return 200", async () => {
  const url = "http://localhost:3000/"
  const response = await fetch(`${url}api/v1/status`)
  expect(response.status).toBe(200)

  const responseBody = await response.json()

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString()
  expect(parsedUpdatedAt).toBe(responseBody.updated_at)

  expect(responseBody.dependencies.database.used_connections).toEqual(1)
  expect(responseBody.dependencies.database.max_connections).toEqual(100)
  expect(responseBody.dependencies.database.version_postgresql).toEqual("16.0")
})
