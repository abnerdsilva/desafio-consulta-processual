import * as React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchComponent from '../../components/SearchComponent';

import './Index.css'

function DetailsPage() {
    const { state } = useLocation();
    const item = state.item

    useEffect(() => {
        getProcesso(item.uid)
    }, []);

    let URL = 'http://localhost:8787'

    const getProcesso = (uid) => {
        fetch(`${URL}/process/${uid}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });
    }


    return (
        <div className='row'>
            <SearchComponent from={'details'} />

            <hr />
            <br />
            <div className='container'>
                <div className='container'>
                    <h3 >Processo n. {item.nr_cnj}</h3>
                    <p className='detalhe'>Distribuído em {new Date(item.data_inicio).toLocaleDateString('pt-BR')}</p>

                    <div className='row'>
                        <div className='col-8'>
                            <div role="tabpanel">
                                <div className="list-group">
                                    <h4 className='list-group-item list-group-item-secondary'>Movimentações</h4>
                                    {item.movimentacoes == null || item.movimentacoes == undefined ? null : item.movimentacoes.map((m) => (
                                        <div key={m.uid} className="list-group-item" role="tab">
                                            <p className='detalhe'>{new Date(m.data_movimentacao).toLocaleDateString('pt-BR')}</p>
                                            <p style={{ fontSize: 'small', textAlign: 'start' }}>{m.descricao}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <p>Detalhes do processo</p>
                            <p className='detalhe'>Cumprimento de sentença - Honorários advocatícios</p>
                            <p className='detalhe'>{item.tribunal_origem.nome} - {item.tribunal_origem.local}</p>
                            <p className='detalhe'>Processo Judicial - {item.status_processo}</p>
                            <p className='detalhe'>Processo julgado - {item.nr_instancia}ª instância - Valor de caus: R$ {item.vr_causa}</p>

                            <hr />

                            <p>Partes envolvidas</p>
                            {item.envolvidos.lenght}
                            {item.envolvidos.map((e) => (
                                <div key={e.nome}>
                                    {e.nome}
                                    <p className='detalhe'>{e.tipo == 1 ? 'Parte envolvida - Exequente' : e.tipo == 2 ? 'Parte envolvida - Apelante' : 'Advogado envolvido'}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ div >
    )
}

export default DetailsPage