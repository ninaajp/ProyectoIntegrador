module.exports = function(sequelize, dataTypes) {

    let alias = 'Comentario';

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        texto: {
            type: dataTypes.STRING
        },
        FkUserId: {
            type: dataTypes.INTEGER
        },
        FkProductosId : {
            type: dataTypes.INTEGER
        },
        createdAt : {
            type: dataTypes.DATE
        },
        updatedAt : {
            type: dataTypes.DATE
        },
        deletedAt : {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName : 'comentarios',
        timestamps : true,
        underscored : false
    }

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Usuario, {
            as : 'comentario_usuario',
            foreignKey : 'FkUserId'
        })

        Comentario.belongsTo(models.Producto, {
            as : 'comentario_producto',
            foreignKey : 'FkProductosId'
        })
    }

    return Comentario
}