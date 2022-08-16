const axios = require("axios")
const { Country, Copas, Contador } = require("../db")

async function getCountries() {
  let respuesta = (
    await axios.get("https://restcountries.com/v3/all")
  ).data.map(e => ({
    name: e.name.common,
    flags: e.flags[1],
    region: e.region ? e.region : "Has no region",
    capital: e.capital ? e.capital[0] : "Has no capital",
    subregion: e.subregion ? e.subregion : "Has no subregion",
    area: e.area,
    population: e.population ? e.population : 0,
    id: e.cca3 ? e.cca3 : "Has no id",
  }))
  Country.bulkCreate(respuesta)
  world(mundiales)
  crearpredicciones(predicciones)
  console.log("database created")
}
const predicciones = [
  ["Argentina", 0, "https://flagcdn.com/w320/ar.png"],
  ["Netherlands", 0, "https://flagcdn.com/w320/nl.png"],
  ["Iran", 0, "https://flagcdn.com/w320/ir.png"],
  ["Qatar", 0, "https://flagcdn.com/w320/qa.png"],
  ["Ecuador", 0, "https://flagcdn.com/w320/ec.png"],
  ["United States", 0, "https://flagcdn.com/w320/us.png"],
  ["Senegal", 0, "https://flagcdn.com/w320/sn.png"],
  ["Saudi Arabia", 0, "https://flagcdn.com/w320/sa.png"],
  ["Denmark", 0, "https://flagcdn.com/w320/dk.png"],
  ["Tunisia", 0, "https://flagcdn.com/w320/tn.png"],
  ["Mexico", 0, "https://flagcdn.com/w320/mx.png"],
  ["Poland", 0, "https://flagcdn.com/w320/pl.png"],
  ["France", 0, "https://flagcdn.com/w320/fr.png"],
  ["Australia", 0, "https://flagcdn.com/w320/au.png"],
  ["Morocco", 0, "https://flagcdn.com/w320/ma.png"],
  ["Croatia", 0, "https://flagcdn.com/w320/hr.png"],
  ["Germany", 0, "https://flagcdn.com/w320/de.png"],
  ["Japan", 0, "https://flagcdn.com/w320/jp.png"],
  ["Spain", 0, "https://flagcdn.com/w320/es.png"],
  ["Costa Rica", 0, "https://flagcdn.com/w320/cr.png"],
  ["Belgium", 0, "https://flagcdn.com/w320/be.png"],
  ["Canada", 0, "https://flagcdn.com/w320/ca.png"],
  ["Cameroon", 0, "https://flagcdn.com/w320/cm.png"],
  ["Switzerland", 0, "https://flagcdn.com/w320/ch.png"],
  ["South Korea", 0, "https://flagcdn.com/w320/kr.png"],
  ["Uruguay", 0, "https://flagcdn.com/w320/uy.png"],
  ["Portugal", 0, "https://flagcdn.com/w320/pt.png"],
  ["Ghana", 0, "https://flagcdn.com/w320/gh.png"],
  ["Brazil", 0, "https://flagcdn.com/w320/br.png"],
  ["Serbia", 0, "https://flagcdn.com/w320/rs.png"],
  [
    "Welsh",
    0,
    "https://i.pinimg.com/736x/a5/dc/9e/a5dc9ef1022459b2df26cbe60c061e6e--wales-flag-red-dragon.jpg",
  ],
  [
    "England",
    0,
    "https://upload.wikimedia.org/wikipedia/commons/e/ef/England_flag.png",
  ],
]

const mundiales = [
  [1930, "URY", "42", "ARG"],
  [1934, "ITA", "21", "CZE"],
  [1938, "ITA", "42", "HUN"],
  [1950, "URY", "21", "BRA"],
  [1954, "DEU", "32", "HUN"],
  [1958, "BRA", "52", "SWE"],
  [1962, "BRA", "31", "CZE"],
  [1966, "GBR", "42", "DEU"],
  [1970, "BRA", "41", "ITA"],
  [1974, "DEU", "21", "NLD"],
  [1978, "ARG", "31", "NLD"],
  [1982, "ITA", "31", "DEU"],
  [1986, "ARG", "32", "DEU"],
  [1990, "DEU", "10", "ARG"],
  [1994, "BRA", "00", "ITA"],
  [1998, "FRA", "30", "BRA"],
  [2002, "BRA", "20", "DEU"],
  [2006, "ITA", "11", "FRA"],
  [2010, "ESP", "10", "NLD"],
  [2014, "DEU", "10", "ARG"],
  [2018, "FRA", "42", "HRV"],
]

const world = e => {
  e.map(async e => {
    let mundial = await Copas.create({
      quantity: e[0],
      resultado: e[2],
      vs: e[3],
    })
    let pais = await Country.findByPk(e[1])
    mundial.addCountry(pais)
  })
}

const crearpredicciones = async e => {
  e.map(async d => {
    await Contador.create({
      id: d[0],
      numeros: d[1],
      flags: d[2],
    })
  })
}

module.exports = { getCountries }
