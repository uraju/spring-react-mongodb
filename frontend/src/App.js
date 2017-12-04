import React, { Component } from 'react';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {NameService} from './js/service/NameService';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';

class App extends Component {
    
  constructor() {
    super();
    this.state = {
        names: [],
        name:''
    };
    this.nameService = new NameService();
   // this.handleChange = this.handleChange.bind(this);
}

componentDidMount() {
   //this.nameService.findAllNames().then(data => this.setState({names: data}));
}

handleChange(event) {
  //console.log("Value from event:", event.target.value);

  this.setState({
    name: event.target.value
  }, () => {
    //console.log("New state in ASYNC callback:", this.state.name);
  });
  //console.log("New state DIRECTLY after setState:", this.state.name);
}
printValue() {
  //console.log("Current value:", this.state.name);
}
caseSearch(){
  let name = this.state.name;  
  this.nameService.findOne(name).then(data => this.setState({names: data}));
}
render() {

    return (
        <div>
         
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataTable - Paginator</h1>
                    <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />
                    <button onClick={this.caseSearch.bind(this)}>Search</button>
                    <p>Pagination is enabled by setting paginator property to true, rows attribute defines the number of rows per page and pageLinks specify the the number of page links to display.</p>
                </div>
            </div>

            <div className="content-section implementation">
                <DataTable value={this.state.names} paginator={true} rows={10} rowsPerPageOptions={[5,10,20]}>
                    <Column field="firstName" header="First Name" />
                    <Column field="lastName" header="Last Name" />
                </DataTable>
            </div>
        </div>
    );
}
}

export default App;
