const camisetas_de_futbol = [
    {
        id: 1,
        nombre: 'Camiseta Argentina',
        imagen: '/images/products/camisetaArg.png',
        descripcion: 'Camiseta de Boca Juniors para adulto talle L',
        fecha_de_carga: 'DD-MM-AAAA',
        vendedor: {
            id: 1,
            nombre: 'Nina',
            email: 'nina@gmail.com',
            foto: '/images/users/default-image.png',
            dni: '43321297',
            fecha_de_nacimiento: '2000-01-01',
            contrasenia: '123456',
            fecha_de_carga: '07-04-2023',
        },
        comentarios: [
            {
                id: 1,
                texto: 'Muy buena calidad',
                fecha_de_carga: '07-04-2023',
                usuario: {
                    id: 1,
                    nombre: 'Nina',
                    email: 'nina@gmail.com',
                    foto: '/images/users/default-image.png',
                    dni: '43321297',
                    fecha_de_nacimiento: '2000-01-01',
                    fecha_de_carga: '07-04-2023',
                }
            },
            {
                id: 2,
                texto: 'Excelente camiseta',
                fecha_de_carga: '07-04-2023',
                usuario: {
                    id: 2,
                    nombre: 'santi',
                    email: 'santi@gmail.com',
                    foto: '/images/users/default-image.png',
                    dni: '44447666',
                    fecha_de_nacimiento: '27-08-2002',
                    fecha_de_carga: '07-04-2023',
                }
            }
        ]
    }, // HASTA ACÁ ESTÁ BIEN 
    {
        id: 2,
        nombre: 'Camiseta de Racing',
        imagen: '/images/products/camisetaRacing.jpeg',
        descripcion: 'Camiseta de Racing para adulto talle L',
        fecha_de_carga: 'DD-MM-AAAA',
        vendedor: {
            id: 2,
            nombre: 'santi',
            email: 'santi@gmail.com',
            foto: '/images/users/default-image.png',
            dni: '44447666',
            fecha_de_nacimiento: '27-08-2002',
            fecha_de_carga: '07-04-2023',
            ids_publicaciones: [2],
            ids_comentarios: []
        },
        comentarios: [

        ]
    },   
    {
        id: 3,
        nombre: 'Camiseta de Atletico',
        imagen: '/images/products/camisetaAtletico.jpeg',
        descripcion: 'Camiseta de Atletico para adulto talle L',
        fecha_de_carga: 'DD-MM-AAAA',
        vendedor: {
            id: 2,
            nombre: 'santi',
            email: 'santi@gmail.com',
            foto: '/images/users/default-image.png',
            dni: '44447666',
            fecha_de_nacimiento: '27-08-2002',
            fecha_de_carga: '07-04-2023',
            ids_publicaciones: [2],
            ids_comentarios: []
        },
        comentarios: [
            {
                id: 3,
                texto: 'Buena casaca',
                fecha_de_carga: '07-04-2023',
                usuario: {
                    id: 4,
                    nombre: 'Sofia',
                    email: 'sofia@gmail.com',
                    foto: '/images/users/default-image.png',
                    dni: '50000001',
                    fecha_de_nacimiento: '30-11-2003',
                    fecha_de_carga: '07-04-2023',
                },
            }
        ]
    },
    {
        id: 4,
        nombre: 'Camiseta de Elche',
        imagen: '/images/products/camisetaElche.jpeg',
        descripcion: 'Camiseta de Barcelona para adulto talle L',
        fecha_de_carga: 'DD-MM-AAAA',
        vendedor: {
            id: 4,
            nombre: 'Sofia',
            email: 'sofia@gmail.com',
            foto: '/images/users/default-image.png',
            dni: '50000001',
            fecha_de_nacimiento: '30-11-2003',
            fecha_de_carga: '07-04-2023',
        },
        comentarios: [

        ]
    },
]

module.exports = camisetas_de_futbol;