import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';

function AddSerie() {
    const [series, setSeries] = useState([]);
    const [nom, setNom] = useState(null);
    const addSerie = async () => {
        try {
            const response = await axios.post('http://localhost:8080/series/save', { nom: nom });
            setSeries([...series, response.data]);
            setNom(null);

        } catch (error) {
            console.error(error);
        }
        //window.location.reload();
        window.location.replace('/admin/series');
        //history('admin/', { replace: true });

    };
    return (
        <div>
            <Container>
                <h3><b>Add Serie :</b></h3>
                <Form onSubmit={addSerie}>
                    <FormGroup>
                        <Label htmlFor='nom'>Nom :</Label>
                        <Input type='text' name='nom' id='nom' value={nom} onChange={(e) => setNom(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/admin/series">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>

        </div>
    )
}

export default AddSerie
