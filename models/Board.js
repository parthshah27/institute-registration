module.exports = (sequelize, DataTypes) => {
    const Board = sequelize.define('Board', {
        board_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        type: {
            type:DataTypes.ENUM('GSAB', 'CBSE', 'ICSE', 'IB', 'State Board'),
        },
    });

    Board.associate = models => {
        Board.belongsTo(models.Institute, {
            foreignKey: 'institute_id',
            as: 'institute',
        });
    };
    return Board;
};