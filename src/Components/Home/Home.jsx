import Product from '../Product/Product';

const Home = ({data , addItemToCart}) => {
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2  gap-5 md:p-5 px-24 md:container mx-auto'>
            {
                data.map(product => <Product key={product.id} product = {product}  addItemToCart = {addItemToCart} />
               )
            }
        </div>
    );
};

export default Home;
