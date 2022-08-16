/* const { expect } = require("chai")

const session = require("supertest-session")
const app = require("../../src/app.js")
const { Country, conn } = require("../../src/db.js")

const agent = session(app)
const country = {
  name: "Afghanistan",
  flags:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
  region: "Asia",
  capital: "Kabul",
  subregion: "Southern Asia",
  area: 652230,
  population: 40218234,
  id: "AFG",
}

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch(err => {
      console.error("Unable to connect to the database:", err)
    })
  )
  beforeEach(() =>
    Country.sync({ force: true }).then(() => Country.create(country))
  )
  describe("GET /countries", () => {
    it("GET /countries deberia retornar status 200", () =>
      agent.get("/countries").expect(200))
  })
})
 */
