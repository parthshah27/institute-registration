module.exports = (sequelize, DataTypes) => {
    const ClassCategory = sequelize.define('ClassCategory', {
        class_category_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
    });

    ClassCategory.associate = models => {
        ClassCategory.belongsTo(models.Institute, {
            foreignKey: 'institute_id',
            as: 'instituteType',
        });
    };

    return ClassCategory;
}