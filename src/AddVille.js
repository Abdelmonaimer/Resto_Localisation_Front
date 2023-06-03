import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';

function AddVille(){
  const [villes, setVilles] = useState([]);
  const [nom, setNom] = useState(null);
  const addVille = async () => {
    try {
        const response = await axios.post('http://localhost:8080/villes/save', { nom: nom});
        setVilles([...villes, response.data]);
        setNom(null);
        
    } catch (error) {
        console.error(error);
    }
    window.location.reload();
    window.location.replace('/admin/');
   //history('admin/', { replace: true });
    
};




  return(
    <div>
        <Container>
          <h3><b>Add City :</b></h3>
            <Form onSubmit={addVille}>
                <FormGroup>
                    <Label htmlFor='nom'>Nom :</Label>
                    <Input type='text' name='nom' id='nom' value={nom} onChange={(e) => setNom(e.target.value)} />
                </FormGroup>
                <FormGroup>
                <Button color="primary" type="submit">Save</Button>{' '}
                <Button color="secondary" tag={Link} to="/admin/">Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    </div>
  )
}
export default AddVille;