export const CODE = `
import React, { useState, useTransition, useDeferredValue } from 'react'
import { data } from "../ProductList/data";
import CodeBlock from '../Tools/CodeBlock';
import { CODE } from './codesez12'
const DefrredComponent = () => {
    const [isPending, startTransition] = useTransition()
    const [inputValue, setInputValue] = React.useState("");
    const [filteredProducts, setFilteredProducts] = React.useState(data);
    const [codeBtn, setCodeBtn] = useState(false);

    const handleChange = (e) => {
        const { value } = e.target;

        startTransition(() => {
            setInputValue(value);

        })
    };

    console.log(codeBtn);

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
                    placeholder='Search for ID number'
                />
            </div>

            <div className="mx-auto my-4 ">
                <button className="btn btn-dark shadow" onClick={() => setCodeBtn(!codeBtn)}>{codeBtn ? "Show Result" : " Show Code"}</button>
            </div>
            {codeBtn ? (
                <CodeBlock code={CODE} />
            ) : (
                isPending ? (
                    <h4>Loading...</h4>
                ) : (
                    <ProductList products={filteredProducts} />
                )
            )




            }

        </div>
    );
};




// Le modifiche sono svolte quui con deferred Value
const ProductList = ({ products }) => {
    const deferredProducts = useDeferredValue(products)
    return (
        <div className='mx-auto mt-4'>
            {deferredProducts.map((product, index) => {
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


export default DefrredComponent;

`