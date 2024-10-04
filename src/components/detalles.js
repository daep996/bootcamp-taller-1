import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getInfoPersonaje } from '../store/dataSlice'

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';

function Detalles() {

    const id = useSelector((state) => state.dataFetch.idPersonaje);
    const detalle = useSelector((state) => state.dataFetch.detallePersonaje);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfoPersonaje())
    }, [id, dispatch]);

    return (
        <>
            <nav>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Volver a la lista de personajes</Breadcrumb.Item>
                    <Breadcrumb.Item active >Detalles</Breadcrumb.Item>
                </Breadcrumb>
            </nav>
            <div>
                <h2>Detalles de {detalle.name}</h2>
                <p>id: {id}</p>
                <Card style={{ width: '28rem' }}>
                    <Card.Img variant="top" src={detalle.image} alt={detalle.name} />
                    <Card.Body>
                        <Card.Title>{detalle.name}</Card.Title>
                        <Card.Text>
                            Especie: {detalle.species}
                        </Card.Text>
                        <Card.Text>
                            Estado: {detalle.status}
                        </Card.Text>
                        <Card.Text>
                            Genero: {detalle.gender}
                        </Card.Text>
                        <Card.Text>
                            Origen: {detalle?.origin?.name}
                        </Card.Text>
                        <Card.Text>
                            Ubicación: {detalle?.location?.name}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default Detalles;