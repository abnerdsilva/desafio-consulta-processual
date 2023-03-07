import { useNavigate } from "react-router-dom"

function Card({ item }) {
    const navigate = useNavigate();

    const onClickCardProcess = (p) => {
        navigate('/details')
    }

    return (
        <div style={{ padding: '20px', border: 'groove', margin: '10px' }} key={item.nr_cnj} onClick={() => onClickCardProcess(item)}>
            <div className='row'>
                <p className="col-10">{item.nr_cnj}</p>
                <p className="col-2 detalhe">{item.data_inicio}</p>
            </div>
            <p className="detalhe">{item.descricao}</p>
        </div>
    )
}

export default Card