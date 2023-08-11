import productsMock from '../mocks/productsMock'

const productsPromise = (categoryId) => new Promise((resolve, reject) => {
    if(productsMock) {

        setTimeout(() => {
            if(categoryId === 'all') {
                resolve(productsMock)
            } else {
                const productsFiltered = productsMock.filter(product => product.category === categoryId)
                resolve(productsFiltered)
            }
        }, 1000)


    } else {
        setTimeout(() => {
            reject('Error en API')
        }, 1000)
    }


})

export default productsPromise