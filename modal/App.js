import React, { Component } from 'react'
import { Container, Grid, Table, Ref, Segment, Button, Header, Image, Modal} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css';

export default class App extends Component {

  state = { open: false }

  show = dimmer => () => this.setState({ dimmer:true, open: true })
  close = () => this.setState({ open: false })

  handleRef = node => this.setState({ node })

  render() {
    const { node, open, dimmer  } = this.state

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
    <Modal closeOnDimmerClick={false} dimmer={dimmer} open={open} onClose={this.close}>
    <Modal.Header>Select a Photo <i onClick={this.close} className="close icon right"></i></Modal.Header>
    <Modal.Content image scrolling>
      <Image wrapped size='medium' src='/assets/images/rachel.png' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
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
