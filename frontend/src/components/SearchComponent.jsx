import * as React from 'react';
import { Link } from 'react-router-dom';

function SearchComponent() {
    return (
        <div className='container' style={{ backgroundColor: '#c7c7c7', padding: '20px' }}>
            <div className="row">
                <select className='col-4' name="select" placeholder='Tribunal'>
                    <option value="valor1">Tribunal</option>
                    <option value="valor2">Valor 2</option>
                    <option value="valor3">Valor 3</option>
                </select>

                <input type="text" className='col-6' placeholder='Numero de processo' />
                <Link to="/details" className='col-2 btn btn-secondary'>Buscar</Link>
            </div>
        </div>
    )
}

export default SearchComponent