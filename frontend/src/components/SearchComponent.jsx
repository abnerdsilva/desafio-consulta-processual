import * as React from 'react';
import { useEffect } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

function SearchComponent({ process, onClick, from }) {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (process != undefined) {
            onClick()
        } else if (from == 'details') {
            let sparam = ''
            if (document.getElementById('search').value != '') {
                sparam = createSearchParams({
                    type: document.getElementById("search-select").value,
                    value: document.getElementById("search").value
                }).toString()
            }

            navigate({
                pathname: '/',
                search: sparam
            })
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='container' style={{ backgroundColor: '#c7c7c7', padding: '20px' }}>
                <div className="row">
                    <select className='col-4' id='search-select' name="select" placeholder='Tribunal'>
                        <option value="Tribunal">Tribunal</option>
                        <option value="Processo">Processo</option>
                    </select>

                    <input type="text" className='col-6' id='search' name='search' placeholder='Digite aqui sua pesquisa' />
                    <button className='col-2 btn btn-secondary' type='submit'>Buscar</button>
                </div>
            </div>
        </form>
    )
}

export default SearchComponent