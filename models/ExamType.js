module.exports = (sequelize, DataTypes) => {
    const ExamType = sequelize.define('ExamType', {
        name: DataTypes.STRING,
    });
    return ExamType;
}