import { useNavigate } from "react-router-dom"

function Card({ item }) {
    const navigate = useNavigate();

    const onClickCardProcess = (p) => {
        if (p.uid == undefined) {
            alert('Não foi possivel identificar processo')
            return
        }

        navigate(`/details/${p.uid}`)
    }

    return (
        <div style={{ padding: '20px', border: 'groove', margin: '10px' }} key={item.uid} onClick={() => onClickCardProcess(item)}>
            <div className='row'>
                <h2 className="col-10">{item.nr_cnj}</h2>
                <p className="col-2">{item.data_inicio}</p>
            </div>

            {item.envolvidos == null
                ? null
                : item.envolvidos.map(p => (
                    <>
                        {p.tipo == 1 ? `Parte exequente:` : `Parte apelante: `} {p.nome}
                        <br />
                    </>
                ))}

            <br />
            <p>{item.descricao}</p>
        </div>
    )
}

export default Card