const server = require("./src/app.js")
const { conn } = require("./src/db.js")
const { getCountries } = require("./src/controllers/controlcountry.js")

const PORT = process.env.PORT || 3001
conn.sync({ force: false }).then(() => {
  server.listen(PORT, async () => {
    await getCountries()
    console.log("listening Franco Vedia's database") // eslint-disable-line no-console
  })
})
