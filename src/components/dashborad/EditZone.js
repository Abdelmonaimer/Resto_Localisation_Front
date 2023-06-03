import React, { useState, useEffect } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function EditZone() {
    const { id } = useParams();
    const [series, setSeries] = useState([]);
    const [nom, setNom] = useState(null);
    const [villes, setVilles] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null);
    const [villeById, setVilleById] = useState([]);

    const getVilles = async () => {
        try {
            const response = await axios.get(`/villes/all`);
            setVilles(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getVilleById = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/villes/${selectedValue}`);
            setVilleById(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const getSerieById = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/zones/${id}`);
            setSeries(response.data);
            setNom(response.data.nom);
        } catch (error) {
            console.error(error);
        }
    };
    const updateSerie = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/zones/${id}`, { id: id, nom: nom, ville: villeById });
            const updatedUsers = series.map((serie) => {
                if (serie.id === response.data.id) {
                    return response.data;
                }
                return serie;
            });
            setSeries(updatedUsers);
            setNom(null);

        } catch (error) {
            console.error(error);
        }
        // window.location.reload();
        window.location.replace('/admin/zones');
    };
    const handleChange = event => {
        setSelectedValue(event.target.value);
    };

    useEffect(() => {
        getVilles();
        getSerieById();

        getVilleById();


    }, [selectedValue]);

    return (
        <div>
            <Container>
                <h3><b>Edit Serie :</b></h3>
                <Form onSubmit={updateSerie}>
                    <FormGroup>
                        <Label htmlFor='nom'>Nom :</Label>
                        <Input type='text' name='nom' id='nom' value={nom} onChange={(e) => setNom(e.target.value)} />
                        <select className='form-select my-2' value={selectedValue} onChange={handleChange}>
                            <option value="" disabled>Select a City</option>
                            {villes.map(item => (
                                <option key={item.id} value={item.id}>
                                    {item.nom}
                                </option>
                            ))}
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Button color="success" type="submit">Update</Button>{' '}
                        <Button color="secondary" tag={Link} to="/admin/series">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}

export default EditZone
