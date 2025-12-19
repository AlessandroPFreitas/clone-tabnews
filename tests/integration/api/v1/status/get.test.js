test("GET to api/v1/status should return 200", async () => {
  const url = "http://localhost:3000/"
  const response = await fetch(`${url}api/v1/status`)
  expect(response.status).toBe(200)
})
