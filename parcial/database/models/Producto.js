module.exports = (sequelize, dataTypes) => {

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
        fechacarga: {
            type: dataTypes.DATE
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
        }
    };

    let config = {
        tableName : 'productos',
        timestamps : true,
        underscored : false
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = (models) => {
        Producto.belongsTo(models.Usuario, {
            as : 'producto_usuario',
            foreignKey : ''
        })

        Producto.hasMany(models.Comentario, {
            as : 'producto_comentario',
            foreignKey : 'FkProductosId'
        })
    }

    return Producto
}