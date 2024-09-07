const products = [
        {
            "id": "1",
            "name": "Ramo de Rosas - 5 unidades",
            "price": 7500,
            "category": "rosas",
            "img": "https://plus.unsplash.com/premium_photo-1703806517546-581595edd4e4",
            "stock": "10",
            "description": "Ramo de Rosas color rosa pálido, se incluyen 5 unidades por ramo."
        },
        {
            "id": "2",
            "name": "Ramo de Tulipanes - 10 unidades",
            "price": 8500,
            "category": "tulipanes",
            "img": "https://plus.unsplash.com/premium_photo-1703806517546-581595edd4e4",
            "stock": "15",
            "description": "Hermoso ramo de tulipanes de colores variados. Se incluyen 10 unidades."
        },
        {
            "id": "3",
            "name": "Ramo de Girasoles - 3 unidades",
            "price": 6000,
            "category": "girasoles",
            "img": "https://plus.unsplash.com/premium_photo-1703806517546-581595edd4e4",
            "stock": "8",
            "description": "Ramo de 3 girasoles brillantes, perfecto para iluminar cualquier espacio."
        },
        {
            "id": "4",
            "name": "Ramo de Rosas Rojas - 12 unidades",
            "price": 12000,
            "category": "rosas",
            "img": "https://plus.unsplash.com/premium_photo-1703806517546-581595edd4e4",
            "stock": "5",
            "description": "Rosas rojas intensas en un ramo de 12 unidades, ideal para ocasiones especiales."
        },
        {
            "id": "5",
            "name": "Ramo de Tulipanes Blancos - 8 unidades",
            "price": 9500,
            "category": "tulipanes",
            "img": "https://plus.unsplash.com/premium_photo-1703806517546-581595edd4e4",
            "stock": "12",
            "description": "Ramo de 8 tulipanes blancos, elegantes y frescos."
        },
        {
            "id": "6",
            "name": "Ramo Mixto - Rosas y Girasoles",
            "price": 11000,
            "category": "rosas",
            "img": "https://plus.unsplash.com/premium_photo-1703806517546-581595edd4e4",
            "stock": "7",
            "description": "Combinación perfecta de rosas y girasoles en un hermoso ramo mixto."
        },
        {
            "id": "7",
            "name": "Ramo de Girasoles - 7 unidades",
            "price": 9500,
            "category": "girasoles",
            "img": "https://plus.unsplash.com/premium_photo-1703806517546-581595edd4e4",
            "stock": "10",
            "description": "Ramo grande de 7 girasoles con pétalos brillantes, ideal para regalar."
        },
        {
            "id": "8",
            "name": "Ramo de Tulipanes Amarillos - 6 unidades",
            "price": 7000,
            "category": "tulipanes",
            "img": "https://plus.unsplash.com/premium_photo-1703806517546-581595edd4e4",
            "stock": "20",
            "description": "Tulipanes amarillos que destacan por su frescura. Incluye 6 unidades."
        },
        {
            "id": "9",
            "name": "Ramo de Rosas Blancas - 9 unidades",
            "price": 9500,
            "category": "rosas",
            "img": "https://plus.unsplash.com/premium_photo-1703806517546-581595edd4e4",
            "stock": "9",
            "description": "Ramo de rosas blancas, elegante y sofisticado. Se incluyen 9 rosas."
        },
        {
            "id": "10",
            "name": "Ramo de Girasoles - 12 unidades",
            "price": 14000,
            "category": "girasoles",
            "img": "https://plus.unsplash.com/premium_photo-1703806517546-581595edd4e4",
            "stock": "6",
            "description": "Gran ramo de 12 girasoles luminosos, ideal para alegrar el día de alguien."
        }
    ]
    
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}