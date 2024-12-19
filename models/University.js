module.exports = (sequelize, DataTypes) => {
    const University = sequelize.define('University', {
        university_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING
    });
    return University;
}