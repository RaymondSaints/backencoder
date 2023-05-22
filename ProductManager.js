class ProductManager{
   //Constructor
 constructor (){
    this.products=[]
    this.id=0;
 }
//------
//metodo para agregar productos
  addProducts (title, description, price, thumbnail, code, stock){
   /*capturo el valor de code de products y usando el metodo some comparo, el 
   valor que me da lo usare para validar*/
   const codeFound= this.products.some(products=> products.code === code);

   //validacion de datos"
   if(!title || !description || !price || !thumbnail || !code || !stock){
      console.log(`Error: data not inserted, please enter all the required data`);
      
   }else if(codeFound) {//Uso el valor del comparador en codeFound para saber si el codigo existe<--REVISAR SI FUNCIONA BIEN
      console.log(`Error: number of CODE${code} is existing`)
   }else{ 
      //creamos un producto que reciba todos los valores
      const newProduct={
         title:title,
         description:description,
         price:price,
         thumbnail:thumbnail,
         code:code,
         stock:stock,
         id:this.id++//Aumento le id en 1 para que cada producto tenga un id unico
      }
      //Empujamos el valor de newProduct a nuestro array de productos products
      this.products.push(newProduct)
      console.log(`Nice job, the product ${title} is update!`)
   }
}
//-------

//METODO GETPRODUCTS PARA OBTENER LOS PRODUCTOS
getProducts(){
   console.log(this.products);
   return this.products;//retornamos nuestro array de productos
}
//--------

//METODO GETPRODUCTSBYID BUSCA LOS PRODUCTOS POR ID
getProductsById(idp){
   const productID=this.products.find(product=>product.id === idp);
   if(productID){
      console.log(`The product with ID:"${idp}" is: ${productID}`)
      return productID
   }else{
      console.log(`SORRY the product with iD${idp} NOT exist`)
   }
}


}

const productManager = new ProductManager();

productManager.addProducts("television", "24Pulgadas", 42000, "IMG1", "77tv1", "22");//Este ingre funciona
productManager.addProducts("television china", "25Pulgadas", 42000, "IMG77", "77tv1", "22");//Este ingreso no funciona
productManager.getProductsById(0);//Busca producto con id -> 0
productManager.getProducts();