module.exports = (sequelize, dataTypes) => {

    let alias = 'Usuario';

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email : {
            type: dataTypes.STRING
        }, 
        usuario : {
            type: dataTypes.STRING
        },
        contrasenia : {
            type: dataTypes.STRING
        }, 
        foto: {
            type: dataTypes.STRING
        }, 
        fecha_de_nacimiento : {
            type: dataTypes.DATE
        }, 
        dni: {
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

    let config= {
        tableName : 'usuarios',
        timestamps : true,
        underscored : false
    }

    const Usuario= sequelize.define(alias, cols, config);

    Usuario.associate = (models) => {
        Usuario.hasMany(models.Producto, {
            as : 'usuario_producto',
            foreignKey : 'FkUserId'
        })

        Usuario.hasMany(models.Comentario, {
            as : 'usuario_comentario',
            foreignKey : 'FkUserId'
        })
    }

    return Usuario
}