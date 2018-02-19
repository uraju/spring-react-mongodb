import React, { Component } from 'react'
import { Container, TextArea, Segment, Button, Header, Icon, Input, Modal,Divider, Form, Label } from 'semantic-ui-react'
//import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

export default class Email extends Component {

  state = { open: false, 
            size: 'tiny', 
            name: 'Test', 
            folder: '',
            subject: '',
            comment: ''
        }
  show = (size) => () => this.setState({ size: size, open: true });
  close = () => this.setState({ open: false });
  sendFeedback = () => {
      let feedback = {
        folder: this.state.folder,
        name: this.state.name,
        subject: this.state.subject,
        comment: this.state.comment
        };
      this.setState({ open: false });
      // var data = new FormData();
      // data.append( "json", JSON.stringify( feedback ) );
      // console.log(JSON.stringify(feedback));
      // console.log('Data: '+ JSON.stringify(data));
      // url (required), options (optional)
      axios.post('/process-feedback', {
        feed: feedback
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      //call ajax to post
  }

  /*

        fetch('http://localhost:3001/process-feedback', {
            mode: 'cors', 
            method: 'post',
            headers: {
                "Content-type": "application/json"
              },
            body: feedback
        })
        .then(function(res){ return res.json(); })
        .then(function(data){ console.log( JSON.stringify( data ) ) })
        .catch(function(err) {
            console.log(JSON.stringify(err));
            // Error :(
        });  
  syntex to post data using fetch
  var payload = {
    a: 1,
    b: 2
};

var data = new FormData();
data.append( "json", JSON.stringify( payload ) );

fetch("/echo/json/",
{
    method: "POST",
    body: data
})
.then(function(res){ return res.json(); })
.then(function(data){ alert( JSON.stringify( data ) ) })

---------
fetch('https://davidwalsh.name/users.json', {
	method: 'POST', 
	mode: 'cors', 
	redirect: 'follow',
	headers: new Headers({
		'Content-Type': 'text/plain'
	})
}).then(function() {
     //handle response  
    });
---------
  */
  render() {
    const { open } = this.state;

    const sdrCount = [ { docType: '0000', docCount: 14 }, { docType: '0001', docCount: 4 },{ docType: '0002', docCount: 5 } ,{ docType: '0003', docCount: 'none' }  ];
    let sum = 0;
    sdrCount.forEach((elem, index) => {if (!isNaN(elem.docCount)) {
        sum = sum + parseInt(elem.docCount,0);
        } //end if
    return sum;
    }) // end forEach
    console.log('Sum: ' + sum);
    let sdrCountWithTotal = {};
    sdrCountWithTotal.sdrCount = sdrCount;
    sdrCountWithTotal.sdrCountTotal = sum;


    return (
        <Container style={{ marginTop: '3em' }}>
        <Header as='h2' dividing>Some Application</Header>  
        <Segment>
        <Form>
            <Label>
                Total <Icon name='mail' /> {sum}
            </Label>
            <Divider />
            <Form.Field>
                <Label>Name:</Label>
                <Input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
            </Form.Field>
            <Form.Field>
                <Label>Folder:</Label>
                <Input value={this.state.folder} onChange={(e) => this.setState({folder: e.target.value})} />
            </Form.Field>
        </Form>
        </Segment>
        <Segment>
            <Button onClick={this.show('tiny')}>Feedback Tiny</Button>
            <Button onClick={this.show('small')}>Feedback Small</Button>
            <Button onClick={this.show('large')}>Feedback Large</Button>
            <Button onClick={this.show('fullscreen')}>Feedback Fullscreen</Button>
        </Segment>

    <Modal closeOnDimmerClick={true} size={this.state.size}  closeOnDocumentClick={false} dimmer={false} open={open} onClose={this.close}>
    <Modal.Header>Feedback <i style={{position: 'absolute', right: '10px', cursor: 'pointer'}} onClick={this.close} className="close icon right"></i></Modal.Header>
    <Modal.Content image scrolling>
      <Modal.Description>
        <Form>
            <Form.Field>
                <Label>Subject:</Label>
                <Input value={this.state.subject} 
                    placeholder='What is it about?'
                    onChange={(e) => this.setState({subject: e.target.value})} />
            </Form.Field>
            <Form.Field>
                <Label>Comments:</Label>
                <TextArea value={this.state.comment} 
                    onChange={(e) => this.setState({comment: e.target.value})}
                    placeholder='Tell us more ...' style={{ minHeight: 100 }} />
            </Form.Field>
        </Form>
        <Divider />
        <Header as='h4' >Application Data</Header>
        <p>Folder document total {sum}</p>
        {(this.state.name.length > 0) && (<p><em>Name: </em><strong>{this.state.name}</strong></p>)}
        {(this.state.folder.length > 0) && (<p><em>Folder: </em><strong>{this.state.folder}</strong></p>)}
        <Divider />
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button color='black' icon='close' labelPosition='right' content="Cancel"  onClick={this.close} />
      <Button positive icon='mail' labelPosition='right' content="Send" onClick={this.sendFeedback} />
    </Modal.Actions>
  </Modal>    
    <Divider />

      </Container>
    )
  }
}

