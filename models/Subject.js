module.exports = (sequelize, DataTypes) => {
    const Subject = sequelize.define('Subject', {
        subject_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
    });

    Subject.associate = models => {
        Subject.belongsTo(models.Standard, {
            foreignKey: 'standard_id',
            as: 'standard',
        });
    };

    return Subject;
}