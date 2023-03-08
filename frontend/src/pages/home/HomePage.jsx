import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import SearchComponent from '../../components/SearchComponent';

import './Index.css'
import { useSearchParams } from 'react-router-dom';

function HomePage() {
    const [searchparams] = useSearchParams()
    const [process, setProcess] = useState([])
    const [tempProcess, setTempProcess] = useState([])

    useEffect(() => {
        getAll()

        if (searchparams.get('value') != '' && searchparams.get('value') != null) {
            document.getElementById("search-select").value = searchparams.get('type')
            document.getElementById("search").value = searchparams.get('value')
        }
    }, []);

    let URL = 'http://localhost:8787'

    const getAll = () => {
        fetch(`${URL}/process`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setProcess(data)
                setTempProcess(data)
            });
    }

    const changeProcess = () => {
        let searchType = document.getElementById("search-select").value;
        let searchDescription = document.getElementById("search").value;
        if (searchDescription == '' || searchType == '') {
            setProcess(tempProcess)
            return
        }

        let processFiltered = tempProcess.filter((v) => searchType == 'Tribunal' ? v.tribunal_origem.nome == searchDescription : v.nr_cnj == searchDescription)
        setProcess(processFiltered)
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
                    onClick={changeProcess}
                    from={'home'} />
            </div>

            {(process == null || process == undefined) ? null : process.map((p) => {
                return <Card key={p.uid} item={p} />
            })}
        </>
    )
}

export default HomePage