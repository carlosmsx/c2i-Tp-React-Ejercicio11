import React, {useState, useEffect} from 'react';
import ListaNoticias from './ListaNoticias';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Spinner from './Spinner'

const Formulario = () => {
    const apiKey = 'b73be4b9b9ff4a54b30c97e0f4f98766';
    //https://newsapi.org/v2/top-headlines/sources?category=general&apiKey=b73be4b9b9ff4a54b30c97e0f4f98766

    const [listaNoticias, setListaNoticias] = useState([]);
    const [mostrarSpinner, setMostrarSpinner] = useState(false);

    const consultarAPI = async (category)=>{
        setMostrarSpinner(true);
        console.log(category)
        const respuesta = await fetch(`https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=${apiKey}`);
        const dato = await respuesta.json();
        setListaNoticias(dato.sources);
        console.log(listaNoticias);
        setMostrarSpinner(false);
    }

    const change = (event)=>{
        consultarAPI(event.target.value);
    }

    return (
        <div className="container-fluid pt-4">
            <Form>
                <Form.Group className="mb-3 d-flex" controlId="formCategoria">
                    <Form.Label>Buscar por categoría</Form.Label>
                    <Form.Select onChange={change}>
                        <option value="">seleccione una categoría...</option>
                        <option value="business">Negocios</option>
                        <option value="entertainment">Entretenimientos</option>
                        <option value="general">General</option>
                        <option value="health">Salud</option>
                        <option value="science">Ciencia</option>
                        <option value="sports">Deportes</option>
                        <option value="technology">Tecnologia</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <hr/>
            {(mostrarSpinner===true)?<Spinner/>:<ListaNoticias listaNoticias={listaNoticias}/>}
        </div>
    );
};

export default Formulario;