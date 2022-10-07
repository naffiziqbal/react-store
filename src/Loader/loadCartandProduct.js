import { getStoredCart } from "../fakedb";

export const loadCartAndProducts = async () => {
    // Get Product
    const productsData = await fetch('https://fakestoreapi.com/products');
    const products = await productsData.json();

    // get Cart 
    const savedCart = getStoredCart();
    const storedCart = []
    for (const id in savedCart) {
        const addedProduct = products.find(product => product );
        if (addedProduct) {
            const quantity = savedCart[id]
            addedProduct.quantity = quantity;
            storedCart.push(addedProduct)
        }
        
    }



    return {products, storedCart}
}
