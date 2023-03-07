import * as React from 'react';
import { useEffect } from 'react';

function SearchComponent({ process, setProcess }) {
    // const [process, setProcess] = useState([])

    useEffect(() => {
        console.log("[SearchComponent]:", process)
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (process != undefined) {
            let searchType = document.getElementById("search-select").value;
            let searchDescription = document.getElementById("search").value;
            if (searchDescription == '' || searchType == '') {
                setProcess(process)
                return
            }

            let processFiltered = process.filter((v) => searchType == 'Tribunal' ? v.tribunal_origem == searchDescription : v.nr_cnj == searchDescription)
            setProcess(processFiltered)
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