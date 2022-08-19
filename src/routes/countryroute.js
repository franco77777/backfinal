const { Country, Activity, Copas, Contador } = require("../db")
const { Op } = require("sequelize")
require("dotenv").config()

const getPaises = async (req, res, next) => {
  const { name } = req.query
  try {
    if (name) {
      let nombre = await Country.findAll({
        where: {
          name: {
            //[Sequelize.Op.iLike]: `%${name}%`,
            [Op.iLike]: "%" + name + "%",
          },
        },
        order: [["name", "ASC"]],
        include: [{ model: Activity }, { model: Copas }],
      })
      return nombre.length ? res.json(nombre) : res.sendStatus(404)
    }
    const projects = await Country.findAll({
      include: [{ model: Activity }, { model: Copas }],
    })
    res.json(projects)
  } catch (error) {
    next(error)
  }
}

const getPais = async (req, res, next) => {
  try {
    const { id } = req.params
    const resultado = await Country.findByPk(id, {
      include: [
        {
          model: Activity,
        },
        { model: Copas },
      ],
    })

    res.json(resultado)
  } catch (error) {
    next(error)
  }
}

const postActivity = async (req, res, next) => {
  try {
    let actividadCreada = await Activity.create(req.body[0])
    req.body[1].forEach(async e => {
      const conectando = await Country.findByPk(e)
      actividadCreada.addCountry(conectando)
    })
    return res.json("activity created")
  } catch (error) {
    next(error)
  }
}

const getContador = async (req, res) => {
  let resultado = await Contador.findAll({ order: [["numeros", "DESC"]] })
  return res.json(resultado)
}

const putContador = async (req, res, next) => {
 try {
   const { id } = req.params
   const resultado = await Contador.findByPk(id)
   resultado.numeros = req.body[0]
   await resultado.save()
   res.json(resultado)
 } catch (error) {
  return res.jon(error)
 }
}
module.exports = { getPaises, getPais, postActivity, getContador, putContador }
