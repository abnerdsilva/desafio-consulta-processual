import * as React from 'react';
import SearchComponent from '../../components/SearchComponent';

function HomePage() {
    return(
        <>
            <div className='container-fluid' style={{backgroundColor: '#c7c7c7', padding: '30px'}}>
                <h3 style={{textAlign:'left'}}>Buscar</h3>

                Selecione um tribunal para lsitar os processos ou buscar pelo número unificado.
                <br />
                <br />
                
                <SearchComponent />
            </div>
        </>
    )
}

export default HomePage