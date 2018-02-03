import React, { Component } from 'react'
import { Container, Grid, Table, Ref, Segment, Button, Header, Image, Modal} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import ReactJson from 'react-json-view';

export default class App extends Component {
    

  state = { open: false }

  show = dimmer => () => this.setState({ dimmer:false, open: true })
  close = () => this.setState({ open: false })

  handleRef = node => this.setState({ node })

  render() {
    const data1 = {
        "field1": "value",
        "field2": "value2"
    };
    const data2 = { "test": 123, "others": [ { "abc": 1 }, { "xyz": 999 } ] };
    const { node, open, dimmer  } = this.state;

    const sdrCount = [ { docType: '0000', docCount: 14 }, { docType: '0001', docCount: 4 },{ docType: '0002', docCount: 5 } ,{ docType: '0003', docCount: 'none' }  ];
    let sum = 0;
    sdrCount.forEach((elem, index) => {if (!isNaN(elem.docCount)) {
        sum = sum + parseInt(elem.docCount);
        } //end if
    return sum;
    }) // end forEach
    let sdrCountWithTotal = {};
    sdrCountWithTotal.sdrCount = sdrCount;
    sdrCountWithTotal.sdrCountTotal = sum;


    return (
        <Container style={{ marginTop: '3em' }}>
        <Header as='h1'>React Semantic UI example</Header>

        <Header as='h2' dividing>Grid and Model</Header>  
        <Grid columns={2}>
            <Grid.Column>
            <Ref innerRef={this.handleRef}>
            <div>
            <Segment>An example node for testing</Segment>
            <Segment>An example node for testing</Segment>
            <Segment>An example node for testing</Segment>
            </div>
            </Ref>
            </Grid.Column>
            <Grid.Column>
            {node && (
                <Table>
                <Table.Body>
                    <Table.Row>
                    <Table.Cell>nodeName</Table.Cell>
                    <Table.Cell>{node.nodeName}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                    <Table.Cell>nodeType</Table.Cell>
                    <Table.Cell>{node.nodeType}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                    <Table.Cell>textContent</Table.Cell>
                    <Table.Cell>{node.textContent}</Table.Cell>
                    </Table.Row>
                </Table.Body>
                </Table>
           )}
            </Grid.Column>
         </Grid>

        <div style={{ marginTop: '1em' }}>
        {node && (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Node Name</Table.HeaderCell>
                    <Table.HeaderCell><span className="head-link" onClick={this.show(true)}>Node Desc</span></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                <Table.Cell>nodeName</Table.Cell>
                <Table.Cell>{node.nodeName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>nodeType</Table.Cell>
                <Table.Cell>{node.nodeType}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>textContent</Table.Cell>
                <Table.Cell>{node.textContent}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>nodeName</Table.Cell>
                <Table.Cell>{node.nodeName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>nodeType</Table.Cell>
                <Table.Cell>{node.nodeType}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>textContent</Table.Cell>
                <Table.Cell>{node.textContent}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )}
    <div>
        {/* parameter to control the size of box
            https://react.semantic-ui.com/modules/modal
            
            <Button onClick={this.show('mini')}>Mini</Button>
            <Button onClick={this.show('tiny')}>Tiny</Button>
            <Button onClick={this.show('small')}>Small</Button>
            <Button onClick={this.show('large')}>Large</Button>
            <Button onClick={this.show('fullscreen')}>Fullscreen</Button>
            
            // css class names to add 
            .head-link {
            text-decoration:underline;
            cursor: pointer;
            }
            .right {
            position: absolute;
            right: 10px;
            cursor: pointer;
            }
        */}


    </div>
    <Modal closeOnDimmerClick={true}  closeOnDocumentClick={false} dimmer={false} open={open} onClose={this.close}>
    <Modal.Header>Show some data <i onClick={this.close} className="close icon right"></i></Modal.Header>
    <Modal.Content image scrolling>
    {/*
      <Image wrapped size='medium' src='/assets/images/rachel.png' />
    */}
      <Modal.Description>
        <Header>Print JSON Data</Header>
        <p>Data with monokai theme</p>
        <ReactJson theme="monokai" src={data1} />
        <hr />
        <br />
        <p>sdrCount Data with solarized theme</p>
        <ReactJson theme="solarized" src={sdrCount} />
        <hr />
        <br />
        <p>sdrCountWithTotal Data with solarized theme</p>
        <ReactJson theme="solarized" src={sdrCountWithTotal} />
        <hr />
        <br />
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button color='black' onClick={this.close}>
        Nope
      </Button>
      <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
    </Modal.Actions>
  </Modal>    
    </div>
      </Container>
    )
  }
}
