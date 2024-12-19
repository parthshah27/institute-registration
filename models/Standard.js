module.exports = (sequelize, DataTypes) => {
    const Standard = sequelize.define('Standard', {
        standard_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
    });
    return Standard;
}