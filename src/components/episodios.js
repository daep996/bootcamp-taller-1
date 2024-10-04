import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getEpisodiosPersonaje } from '../store/dataSlice'
import "bootstrap/dist/css/bootstrap.min.css";

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ListGroup from 'react-bootstrap/ListGroup';

function Episodios() {

    const dispatch = useDispatch();
    const episodios = useSelector((state) => state.dataFetch.episodiosPersonaje);

    useEffect(() => {
        dispatch(getEpisodiosPersonaje())
    }, [episodios, dispatch]);

    return (
        <>
            <nav>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Volver a la lista de personajes</Breadcrumb.Item>
                    <Breadcrumb.Item active >Episodios</Breadcrumb.Item>
                </Breadcrumb>
            </nav>
            <div>
                <h2>Episodios</h2>
                <ListGroup style={{width: '28rem'}}>
                    {
                        episodios.length > 0 && episodios.map((item, index) => {
                            return (
                                <ListGroup.Item key={index}>
                                    <a href={item} target="_blank" rel="noreferrer">{item}</a>
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </div>
        </>
    );
}

export default Episodios;