import productsMock from '../mocks/productsMock'

const getProductById = (productId) => new Promise((resolve, reject) => {

    if(productsMock) {

        setTimeout(() => {
            const productFinded = productsMock.find((product) => product.id === productId)

            resolve(productFinded)
        }, 1000)


    } else {
        setTimeout(() => {
            reject('Error en API')
        }, 1000)
    }


})

export default getProductById