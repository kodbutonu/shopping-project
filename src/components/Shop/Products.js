import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS=[
  {
    id:"p1",
    price:65,
    title:"The little Price",
    description:"The first book I ever wrote."
  },
  {
    id:"p2",
    price:25,
    title:"Hamlet",
    description:"Very interesting book."
  },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {DUMMY_PRODUCTS.map((product=>
      <ul>
        <ProductItem
         id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      </ul>
      ))}
     
    </section>
  );
};

export default Products;
