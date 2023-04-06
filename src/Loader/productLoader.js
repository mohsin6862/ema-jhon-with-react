import { getShoppingCart } from "../components/Utilities/fakedb";

const allProductLoader =async ()=>{

    const allProductsLoaded = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    const allProducts = await allProductsLoaded.json()
    console.log(allProducts);


    
const storedCart = getShoppingCart()

console.log(storedCart)
const savedCart = [];
for(const id in storedCart){
    const addedProduct = allProducts.find(product => product.id === id)
    console.log("added on cart =",addedProduct)

    if(addedProduct){

        const  quantity = storedCart[id];
        addedProduct.quantity= quantity;
        console.log(quantity)
        savedCart.push(addedProduct)
    }
}
return savedCart;
   

}

export default allProductLoader;