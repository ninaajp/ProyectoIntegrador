const usuarios = [
    {
        id: 1,
        nombre: 'nina',
        email: 'nina@gmail.com',
        foto: '/images/users/default-image.png',
        dni: '12345678',
        fecha_de_nacimiento: '01-01-2000',
        fecha_de_carga: '07-04-2023',
        ids_publicaciones: [1],
        ids_comentarios: [1, 2]
    },
    {
        id: 2,
        nombre: 'santi',
        email: 'santi@gmail.com',
        foto: '/images/users/default-image.png',
        dni: '1111111',
        fecha_de_nacimiento: '01-01-2000',
        fecha_de_carga: '07-04-2023',
        ids_publicaciones: [2,3,4],
        ids_comentarios: []
    }
]

module.exports = usuarios;