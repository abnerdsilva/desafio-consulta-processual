import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import SearchComponent from '../../components/SearchComponent';

import './Index.css'

function HomePage() {
    const [process, setProcess] = useState([])
    const [tempProcess, setTemProcess] = useState([])

    useEffect(() => {
        getAll();
    }, []);

    let URL = 'http://localhost:8787'

    const getAll = () => {
        fetch(`${URL}/process`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setProcess(data)
                setTemProcess(data)
            });
    }

    const changeProcess = (p) => {
        setProcess(p)
    }

    return (
        <>
            <div className='container-fluid' style={{ backgroundColor: '#c7c7c7', padding: '30px' }}>
                <h3 style={{ textAlign: 'left' }}>Buscar</h3>

                Selecione um tribunal para lsitar os processos ou buscar pelo número unificado.
                <br />
                <br />

                <SearchComponent
                    process={tempProcess}
                    setProcess={changeProcess} />
            </div>

            {process.map((p) => {
                return <Card key={p.nr_cnj} item={p} />
            })}
        </>
    )
}

export default HomePage