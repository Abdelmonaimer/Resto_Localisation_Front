import React, { useState, useEffect } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
function EditRestaurant() {
    const { id } = useParams();
    const [series, setSeries] = useState([]);
    const [nom, setNom] = useState(null);
    const [adresse, setAdresse] = useState(null);
    const [lattitude, setLattitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [week, setWeek] = useState(null);
    const [rank, setRank] = useState(null);
    const [open_hour, setOpenHour] = useState(null);
    const [close_hour, setCloseHour] = useState(null);
    const getSerieById = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/restaurants/${id}`);
            setSeries(response.data);
            setNom(response.data.nom);
            setAdresse(response.data.adresse);
            setLattitude(response.data.lattitude);
            setLongitude(response.data.longitude);
            setWeek(response.data.week);
            setRank(response.data.rank);
            setOpenHour(response.data.open_hour);
            setCloseHour(response.data.close_hour);
        } catch (error) {
            console.error(error);
        }
    };
    const updateSerie = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/restaurants/${id}`, {
                id: id,
                nom: nom,
                adresse: adresse,
                lattitude: lattitude,
                longitude: longitude,
                week: week,
                rank: rank,
                open_hour: open_hour,
                close_hour: close_hour
            });
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
        window.location.replace('/admin/restaurants');
    };
    useEffect(() => {
        getSerieById();

    }, []);
    return (
        <div>
            <Container>
                <h3><b>Edit Restaurant :</b></h3>
                <Form onSubmit={updateSerie}>
                    <FormGroup>
                        <Label htmlFor='nom' className='mb-2'>Nom :</Label>
                        <Input type='text' name='nom' id='nom' value={nom} onChange={(e) => setNom(e.target.value)} />
                        <Label htmlFor='adresse' className='mb-2'>Adresse :</Label>
                        <Input type='text' name='adresse' id='adresse' value={adresse} onChange={(e) => setAdresse(e.target.value)} />
                        <Label htmlFor='lattitude' className='mb-2'>Lattitude :</Label>
                        <Input type='text' name='lattitude' id='lattitude' value={lattitude} onChange={(e) => setLattitude(e.target.value)} />
                        <Label htmlFor='longitude' className='mb-2'>Longitude :</Label>
                        <Input type='text' name='longitude' id='longitude' value={longitude} onChange={(e) => setLongitude(e.target.value)} />
                        <Label htmlFor='nom' className='mb-2'>Week :</Label>
                        <Input type='text' name='week' id='week' value={week} onChange={(e) => setWeek(e.target.value)} />
                        <Label htmlFor='rank' className='mb-2'>Rank :</Label>
                        <Input type='text' name='rank' id='rank' value={rank} onChange={(e) => setRank(e.target.value)} />
                        <Label htmlFor='open_hour' className='mb-2'>Open Hour :</Label>
                        <Input type='text' name='open_hour' id='open_hour' value={open_hour} onChange={(e) => setOpenHour(e.target.value)} />
                        <Label htmlFor='close_hour' className='mb-2'>Close Hour :</Label>
                        <Input type='text' name='close_hour' id='close_hour' value={close_hour} onChange={(e) => setCloseHour(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Button color="success" type="submit">Update</Button>{' '}
                        <Button color="secondary" tag={Link} to="/admin/restaurants">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}

export default EditRestaurant;
