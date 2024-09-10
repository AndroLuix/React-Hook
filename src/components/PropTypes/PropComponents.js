import React from 'react'
import { datiIncompleti } from '../data'
import PropTypes from 'prop-types'
import CodeBlock from '../Tools/CodeBlock';
import { CODE } from './propComponentCode';

const defaultImage = "https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";



const PropComponents = () => {

    return (
        <>
            <div className='d-flex flex-row gap-5 wrap justify-content-center bg-dark py-5'>

                {
                    datiIncompleti.map(el => {
                        return <Prodotto key={el.id} {...el} />
                    })
                }

            </div>
            <div>
                <CodeBlock code={CODE} />
            </div>
        </>
    )
}
const Prodotto = ({ nome, prezzo, image }) => {
    console.log(nome, prezzo, image)
    const img = image && image.url
    return (
        <atricle className='card shadow my-3 p-2  ' style={{ width: '16rem' }}>
            <div className='card-body'>
                <img src={img || defaultImage} alt={nome} className='card-img-top object-fit-cover' style={{ minHeight: '300px' }}></img>
                <div className='card-text pt-4'>
                    <h4 className='card-title'>{nome}</h4>
                    <p className='card-subtitile'>€ {prezzo}</p>
                </div>
            </div>
        </atricle>
    )
}

Prodotto.propTypes = {
    nome: PropTypes.string.isRequired,
    prezzo: PropTypes.number.isRequired,
    image: PropTypes.object.isRequired,
}

Prodotto.defaultProps = {

    nome: 'Dear...',
    prezzo: 17.99,
    image: defaultImage,

}
export default PropComponents