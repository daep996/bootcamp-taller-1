import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Container  from 'react-bootstrap/Container';

import { setData, setId } from '../store/dataSlice'

function Tabla() {

    const navigate = useNavigate();
    const data = useSelector((state) => state.dataFetch.data);
    const dispatch = useDispatch();
    const url = 'https://rickandmortyapi.com/api/character'

    
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((dataAPI) => {
                const {results} = dataAPI
                // console.log('results: ', results)
                dispatch(setData(results))
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const irAPersonaje = (id) => {
        dispatch(setId(id))
        navigate('/detalles')
    }

    const irAEpisodios = (id) => {
        dispatch(setId(id))
        navigate('/episodios')
    }

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center">
            <h1 style={{margin: '2rem'}}>Personajes de Rick and Morty</h1>
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
                alt="Logo de la serie de TV Rick & Morty"
                width={706}
                style={{ margin: '0 2rem' }}
                thumbnail
            />
            <p style={{ width: "48rem", textWrap: "wrap", padding: '1rem 2rem' }}>
                Rick y Morty (en inglés: Rick and Morty) es una serie de televisión
                estadounidense de animación para adultos creada por Justin Roiland y
                Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon
                Network. La serie sigue las desventuras de un científico, Rick
                Sánchez, y su fácilmente influenciable nieto, Morty, quienes pasan el
                tiempo entre la vida doméstica y los Viajes espaciales e
                intergalácticos.
            </p>
            <Table striped="rows" bordered hover style={{width: '44rem', margin: '1rem 2rem'}}>
                <thead>
                <tr>
                    <th></th>
                    <th>Nombre del personaje</th>
                    <th>Ver episodios</th>
                    <th>Ver más detalles</th>
                </tr>
                </thead>
                <tbody style={{verticalAlign: 'middle', textAlign: 'center'}}>
                    {data.length > 0 && data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    <Image src={item.image} alt={item.name} style={{'width': '64px'}} thumbnail />
                                </td>
                                <td style={{fontSize: '1.2rem'}}>{item.name}</td>
                                <td><button onClick={() => irAEpisodios(item.id)} type="button" className="btn btn-success">Episodios</button></td>
                                <td><button onClick={() => irAPersonaje(item.id)} className="btn btn-info" >Más detalles</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
    </Container>);
}

export default Tabla;