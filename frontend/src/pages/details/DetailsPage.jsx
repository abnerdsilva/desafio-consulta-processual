import * as React from 'react';
import SearchComponent from '../../components/SearchComponent';

import './Index.css'

function DetailsPage() {
    return (
        <div className='row'>
            <div>
                <SearchComponent />
            </div>

            <hr />

            <div className='container'>
                <h3 >Processo n. 1008126-92.2015.8.26.0132 do TJSP</h3>

                <p className=''>Distribuído em 09/11/2017</p>

                <div className='row'>
                    <div className='col-8'>
                        <div role="tabpanel">
                            <div className="list-group">
                                {/* <p className="list-group-item list-group-item-secondary" role="tab">Movimentações</p> */}
                                <div className="list-group-item" role="tab">
                                    <p className='detalhe'>11/06/2018</p>
                                    <p style={{ fontSize: 'small', textAlign: 'start' }}>Profile</p>
                                </div>
                                <div className="list-group-item" role="tab">
                                    <p className='detalhe'>11/06/2018</p>
                                    <p style={{ fontSize: 'small', textAlign: 'start' }}>Profile</p>
                                </div>
                                <div className="list-group-item" role="tab">
                                    <p className='detalhe'>11/06/2018</p>
                                    <p style={{ fontSize: 'small', textAlign: 'start' }}>Profile</p>
                                </div>
                                <div className="list-group-item" role="tab">
                                    <p className='detalhe'>11/06/2018</p>
                                    <p style={{ fontSize: 'small', textAlign: 'start' }}>Profile</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <p>Detalhes do processo</p>
                        <p className='detalhe'>Cumprimento de sentença - Honorários advocatícios</p>
                        <p className='detalhe'>TJSP - Forum João Mendes Júnior Balneários Camburiú - 4º Vara Civil</p>
                        <p className='detalhe'>Processo Judicial - Rito ordinário</p>
                        <p className='detalhe'>Processo julgado - 1ª Instância - Valor de caus: R$ 1.387,90</p>

                        <hr />

                        <p>Partes envolvidas</p>
                        <p className='detalhe'>Nelson Willian & Advogados Associados</p>
                    </div>
                </div>
            </div>
        </ div >
    )
}

export default DetailsPage