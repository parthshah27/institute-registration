module.exports = (sequelize, DataTypes) => {
    const Institute = sequelize.define('Institute', {
        institute_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        type: DataTypes.ENUM('Playhouse', 'School', 'College', 'Competitive Exam Center'),
        board_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Board',
                key: 'board_id',
            },
            allowNull: false,
        },
        medium: {
            type: DataTypes.ENUM('English', 'Hindi', 'Marathi', 'Gujarati'),
            allowNull: false,
        },
        class_category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'ClassCategory',
                key: 'class_category_id',
            },
            allowNull: false,
        },
        standard_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Standard',
                key: 'standard_id',
            },
            allowNull: false,
        },
        university_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'University',
                key: 'university_id',
            },
            allowNull: false,
        },
        degreeType: DataTypes.ENUM('Undergraduate', 'Postgraduate', 'Doctorate'),
        subject_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Subject',
                key: 'subject_id',
            },
            allowNull: false,
        },
    });

    Institute.associate = models => {
        Institute.belongsTo(models.Board, { foreignKey: 'board_id' });
        Institute.belongsTo(models.ClassCategory, { foreignKey: 'class_category_id' });
        Institute.belongsTo(models.Standard, { foreignKey: 'standard_id' });
        Institute.belongsTo(models.University, { foreignKey: 'university_id' });
        Institute.belongsTo(models.Subject, { foreignKey: 'subject_id' });
    }

    return Institute;
};