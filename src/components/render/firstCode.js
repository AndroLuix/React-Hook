const CODE = `import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = "https://api.github.com/users/QuincyLarson";

const First = () => {
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [user, setUser] = useState('Default User');

    const getData = async () => {

        setError(false); setLoading(true);
        try {
            const response = await axios.get(url);
            const login = response.data;
            setUser(login);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    if (isLoading) {
        return <h2> Loading...</h2>
    }
    if (isError) {
        return <h2>Error <span className='text-danger'>404 NOT FOUND</span></h2>
    }
    return (
        <div>
            <h2 className='text-center'>Conditional Compining</h2>
            <div className='card d-flex align-items-center p-5 shadow mt-5'>
                <h3>{user.login}</h3>  {/* Renderizza il nome utente */}
                <img className='object-fit p-4 rounded' src={user.avatar_url} alt={user.login} style={{width:'200px'}}/>  {/* Mostra l'immagine dell'avatar */}
                <p>{user.bio}</p>  {/* Mostra la biografia */}
            </div>
        </div>
    )
}

export default First`

export {CODE}