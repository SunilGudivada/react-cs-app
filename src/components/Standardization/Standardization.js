import React from 'react';
import './Standardization.css';
import { Table, Container, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Options from './../Options/Options'

class Standardization extends React.Component {

    constructor() {
        super();
        this.state = {
            attrArray: [
                'First Name',
                'Middle Name',
                'Last Name',
                'Alias Name',
                'Full Name',
                'DOB',
                'Nationality',
                'Personal Email',
                'Business Email',
                'Personal Phone',
                'Mobile Phone',
                'Work Address',
                'Home Address'
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                <Card style={{ width: '100%',marginTop:'20px' }}>
                    <Card.Body>
                        <Card.Title>Standardization of Attributes from Multiple Sources</Card.Title>
                    <Table className="table-hover table-striped" style={{marginTop:'20px'}} >
                        <thead className="thead-dark">
                            <tr>
                                <th>Standardized Attributes</th>
                                <th>Source1 Attributes</th>
                                <th>Source2 Attributes</th>
                            </tr>
                        </thead>
            
                        <tbody>
                            {this.state.attrArray.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value}</td>
                                        <td><Options></Options></td>
                                        <td><Options></Options></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
                    </Card.Body>
                    </Card>
                </Container>
            </React.Fragment>
        )
    }
}

export default Standardization;