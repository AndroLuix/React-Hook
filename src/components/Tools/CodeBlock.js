import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Tema scuro

const CodeBlock = ({ code }) => {
    const [copied, setCopied] = useState(false); // Stato per la notifica di copia

    // Funzione per copiare il codice nella clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(code)
            .then(() => {
                setCopied(true); // Imposta lo stato a "copiato"
                setTimeout(() => setCopied(false), 2000); // Ripristina dopo 2 secondi
            })
            .catch(err => {
                console.error('Errore nella copia del testo: ', err);
            });
    };

    return (
        <div className='p-5' style={{ position: 'relative', marginBottom: '20px' }}>
        
            <button 
                onClick={copyToClipboard} 
                className='btn btn-secondary'
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: '10px',
                    backgroundColor: copied ? 'green' : '#007bff',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                {copied ? 'Copiato!' : 'Copia'}
            </button>

            <SyntaxHighlighter language="javascript" style={dracula}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
