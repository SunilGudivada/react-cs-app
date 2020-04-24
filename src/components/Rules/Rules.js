import React from 'react';
import { Container,Card,Button,Row,Col,Form } from 'react-bootstrap';
import './Rules.css'

class Rules extends React.Component{
    constructor() {
        super();
        this.state = { rules:[
                        {
                            CustomerId: {
                                matchingMethod:''
                            },
                            FullName: {
                                matchingMethod:'',
                                value: '',
                                cutOff: ''
                            }
                        }
                    ] 
                }
        }

    appendRule = ()=> {
        let newRule = {
                        CustomerId: {
                            matchingMethod:''
                        },
                        FullName: {
                            matchingMethod:'',
                            value: '',
                            cutOff: ''
                        }
                    }
        let allRules = this.state.rules.push(newRule);
        this.setState({allRules});
    }

    changeMatchingMethod = (event,index, attr) =>{
        let updatedRule = this.state.rules[index];
        if(attr === "customerID"){
            updatedRule.CustomerId.matchingMethod = event.target.value;
            this.state.rules[index] = updatedRule;
            this.setState(this.state.rules[index]);
        }else{
            updatedRule.FullName.matchingMethod = event.target.value;
            this.state.rules[index] = updatedRule;
            this.setState(this.state.rules);
        }
    }

    render(){
        return(
            <Container>
                <Card style={{ width: '100%',marginTop:'12px' }}>
                    <Card.Body>
                        <Card.Title>Deduplication Rules</Card.Title>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group controlId="formRuleSetName">
                                        <Form.Label>Rule Set Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter RuleSet Name" />
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col></Col>
                            <Col>
                                <Form.Group controlId="formRuleSetDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows="2" placeholder="Enter RuleSet Description "/>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Row style={{marginTop: '10px'}}>
                            <Col>
                            <Form.Group controlId="formAggregationMethod" >
                                <Form.Label>Selection Aggregation Method</Form.Label>
                                <Form.Control as="select" defaultValue="..">
                                    <option>Choose Aggregation Method</option>
                                    <option>Minimum</option>
                                    <option>maxiumum</option>
                                    <option>Average</option>
                                </Form.Control>
                            </Form.Group>  
                            </Col>

                            <Col />
                            <Col>RuleSet Score Threshold <Form.Control type="text" placeholder="RuleSet Threshold Score" /></Col> 
                        </Row>  
                                                                      
                    </Card.Body>
                </Card>
                <Button variant="primary" style={{margin: '10px'}} onClick={this.appendRule}>Add Rule</Button>  
                {this.state.rules.map((value, index) => {
                    return (
                        <>
                            <Card key={index} style={{ marginBottom: '10px' }}>
                                <Card.Body id="ruleSet">
                                    <Row>
                                        <Col>
                                            <Form.Label>Rule Name</Form.Label>
                                            <Form.Control type="Text" placeholder="Enter Rule Name"></Form.Control>
                                        </Col>
                                        <Col />
                                        <Col>
                                            <Form.Label>Rule Weightage</Form.Label>
                                            <Form.Control type="Text" placeholder="Enter Rule Weightage"></Form.Control>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '10px', backgroundColor: '#d4d3d3', borderRadius: '4px', padding: '10px' }}>
                                        <Col >Customer ID</Col>
                                        <br></br>
                                        <Col>
                                            <Form.Label>Matching Method</Form.Label>
                                            <Form.Control as="select" defaultValue=".." onChange={(e)=>this.changeMatchingMethod(e,index , 'customerID')}>
                                                <option>Choose Matching Method</option>
                                                <option value="ExactMatch">Exact Match</option>
                                                <option value="Fuzzy">Fuzzy</option>
                                            </Form.Control>
                                        </Col>
                                        {(this.state.rules[index].CustomerId.matchingMethod === 'Fuzzy')?(
                                            <>
                                            <Col>
                                                <Form.Label>Fuzzy Value</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Fuzzy Value"></Form.Control>
                                            </Col>
                                            <Col>
                                                <Form.Label>Fuzzy Cut Off</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Fuzzy Cut off"></Form.Control>
                                            </Col>
                                            </>
                                        ):(<><Col /><Col /></>)}
                                        
                                    </Row>
                                    <Row style={{ marginTop: '10px', backgroundColor: '#d4d3d3', borderRadius: '4px', padding: '10px' }}>
                                        <Col >Full Name</Col>
                                        <br></br>
                                        <Col>
                                            <Form.Label>Matching Method</Form.Label>
                                            <Form.Control as="select" defaultValue=".." onChange={(e)=>this.changeMatchingMethod(e,index , 'FullName')}>
                                                <option>Choose Matching Method</option>
                                                <option value="ExactMatch">Exact Match</option>
                                                <option value="Fuzzy">Fuzzy</option>
                                            </Form.Control>
                                        </Col>
                                        {(this.state.rules[index].FullName.matchingMethod === 'Fuzzy')?(
                                            <>
                                            <Col>
                                                <Form.Label>Fuzzy Value</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Fuzzy Value"></Form.Control>
                                            </Col>
                                            <Col>
                                                <Form.Label>Fuzzy Cut Off</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Fuzzy Cut off"></Form.Control>
                                            </Col>
                                            </>
                                        ):(<><Col /><Col /></>)}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </>
                    )
                })
                }
                {(this.state.rules.length >= 3) ? (
                    <Button variant="primary" style={{ margin: '10px' }} onClick={this.appendRule}>Add Rule</Button>
                ) : (<div></div>)
                }
            </Container>
        )
    }

    
}

export default Rules;