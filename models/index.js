'use strict';

const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const sequelize = new Sequelize('institute_registration', 'postgres', 'admin123', {
  host: 'localhost',
  dialect: 'postgres',
  logging: true,
});

const Institute = require('./Institute')(sequelize, Sequelize.DataTypes);
const Board = require('./Board')(sequelize, Sequelize.DataTypes);
const ClassCategory = require('./ClassCategory')(sequelize, Sequelize.DataTypes);
const Standard = require('./Standard')(sequelize, Sequelize.DataTypes);
const Subject = require('./Subject')(sequelize, Sequelize.DataTypes);
const University = require('./University')(sequelize, Sequelize.DataTypes);
const ExamType = require('./ExamType')(sequelize, Sequelize.DataTypes);
const Medium = require('./Medium')(sequelize, Sequelize.DataTypes);

Institute.hasMany(Board, { foreignKey: 'institute_id', as: 'boards' });
Board.belongsTo(Institute, { foreignKey: 'institute_id', as: 'institute' });

ClassCategory.hasMany(Standard, { foreignKey: 'class_category_id', as: 'standards' });

Standard.hasMany(Subject, { foreignKey: 'standard_id', as: 'subjects' });
Subject.belongsTo(Standard, { foreignKey: 'standard_id', as: 'standard' });

module.exports = { sequelize, Institute, Board, ClassCategory, Standard, Subject, University, ExamType, Medium };
