module.exports = function(sequelize, dataTypes){

    let alias = 'Producto';

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        imagen : {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        FkUserId: {
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
        tableName : 'productos',
        timestamps : true,
        underscored : false
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models){
        Producto.belongsTo(models.Usuario, {
            as : 'producto_usuario',
            foreignKey : 'FkUserId'
        })

        Producto.hasMany(models.Comentario, {
            as : 'producto_comentario',
            foreignKey : 'FkProductosId'
        })
    }

    return Producto
}