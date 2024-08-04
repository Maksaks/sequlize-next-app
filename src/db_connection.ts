import {Sequelize} from 'sequelize'
import {SequelizeOptions} from "sequelize-typescript"
import {options} from '../db/config/config.mjs'

const dbOptions = <SequelizeOptions>options;
dbOptions.dialectModule = require('mysql2')

const sequelize = new Sequelize(dbOptions)

export default sequelize;