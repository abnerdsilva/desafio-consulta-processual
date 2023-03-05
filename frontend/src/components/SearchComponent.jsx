import * as React from 'react';

function SearchComponent() {
    return (
        <div>
            <select  name="select" style={{width: '15rem', height: '30px'}} placeholder='Tribunal'>
                <option value="valor1">Tribunal</option>
                <option value="valor2">Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>

            <input type="text" placeholder='Numero de processo' style={{width:'15rem', height: '30px', marginLeft: '20px', marginRight: '20px'}} />
            <button className='btn btn-secondary'>Buscar</button>
        </div>
    )
}

export default SearchComponent