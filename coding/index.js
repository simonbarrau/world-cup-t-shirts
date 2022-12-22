class ProductManager {

    constructor() {
      this.products = []
    }
  
    getProducts(){
      return console.log(this.products)
    }
  
  
    addProduct(title, description, price, thumbnail, code, stock) {
      
      if(!title || !description || !price || !thumbnail || !code || !stock) {
        return console.log('Error, product incomplete');
      } else {
        const isCode = this.#evaluarCode(code)
          if(isCode){
            console.log('That code already exist, try again')
          } else {
            const product = {
            id: this.#generarId(), 
            code,
            title,
            description,
            price,
            thumbnail,
            stock,
        }
        this.products.push(product)
    }
}


}
#generarId() {
  let id =
    this.products.length === 0
      ? 1
      : this.products[this.products.length - 1].id + 1
  return id
}
  
  
#evaluarCode(code){
    return this.products.find(product => product.code === code)
}


#evaluarProductoId(id){
    return this.products.find(product => product.id === id)
}

getProductById(idProduct){
  const productFound = this.#evaluarProductoId(idProduct)
  if(productFound){
    console.log(productFound)
  } else {
    console.log('Product not found')
  }
}
  }
  
  const product = new ProductManager()
  
  // primer getProducts = array vacio
  product.getProducts()
  
  // agrego primer producto
  product.addProduct('producto prueba', 'Este es el producto prueba', 200, 'sin imagen', 'abc123', 25)
  
  // segundo getProducts = array con el primer producto agregado
  product.getProducts()
  
  // error = codigo repetido
  product.addProduct('producto prueba', 'Este es el producto prueba', 200, 'sin imagen', 'abc123', 25)
  
  //objeto del producto con el id deseado:
  product.getProductById(1)
  
  //id no encontrado:
  product.getProductById(67)