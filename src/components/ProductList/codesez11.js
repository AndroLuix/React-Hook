export const CODE = `import React, { useTransition } from 'react'
import { data } from "./data";

const MainProductComponents = () => {
    const [isPending, startTransition] = useTransition()
  const [inputValue, setInputValue] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState(data);

  const handleChange = (e) => {
    const { value } = e.target;

    startTransition(()=>{
        setInputValue(value);

    })
  };

  React.useEffect(() => {
    if (!inputValue) {
      setFilteredProducts(data);
    }
    setFilteredProducts(data.filter((el) => el.text.includes(inputValue)));
  }, [inputValue]);
  return (
    <div className='mt-4'>
      <div className='d-flex justify-content-center'>
        <input
          type='text'
          className='input-group-text bg-white'
          onChange={handleChange}
        />
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default MainProductComponents;



const ProductList = ({ products }) => {
  return (
    <div className='mx-auto mt-4'>
      {products.map((product, index) => {
        return (
          <div
            key={index}
            className='card p-3 border-1 rounded-3 mb-2'
            style={{
              borderColor: "#E5e5e5",
            }}
          >
            <div className='d-flex align-items-center justify-content-center'>
              <p className='text-black mb-0'>{product.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};



`