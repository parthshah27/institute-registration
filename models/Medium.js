module.exports = (sequelize, DataTypes) => {
    const Medium = sequelize.define('Medium', {
        standard_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
    });
    return Medium;
}