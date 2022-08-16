const supertest = require("supertest")
const app = require("../../src/app.js")
const api = supertest(app)

test("al pasar un nombre por query espero recibir sus datos ", async () => {
  const response = await api.get("/countries?name=Argentina")
  expect(response.body[0].name).toBe("Argentina")
})

test("al hacer get espero recibir status 200", async () => {
  await api
    .get("/countries")
    .expect(200)
    .expect("Content-Type", /application\/json/)
})

test("al hacer get espero recibir todos los paises", async () => {
  const response = await api.get("/countries")

  expect(response.body).toHaveLength(250)
})

test("al pasar un id por params espero recibir el pais correspodiente", async () => {
  const response = await api.get("/countries/ARG")

  expect(response.body.name).toBe("Argentina")
})

test("al hacer post debe almacenarlo en la base de datos", async () => {
  return api
    .post("/activity")
    .send([
      {
        name: "vole",
        duration: "1",
        difficult: "4",
        season: "Autumn",
        minutes: "1",
      },
      ["BRA", "KNA"],
    ])
    .expect(200)
})
