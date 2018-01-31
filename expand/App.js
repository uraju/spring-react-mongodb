import React, { Component } from 'react';
import './App.css';
import Snippet from './Snippet'

class App extends Component {

  render() {
    const test0 = { 
      pretext:'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, '
     ,text: 'event handling, <span style="background-color: coral;">animation</span>, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.'
     ,posttext: 'With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.'
     ,key: 'key00'
     };
         const test1 = { 
     text:'text with snippet 10 with hilight'
    ,pretext: 'This is pre text 10'
    ,posttext: 'This is post text 10'
    ,key: 'key10'
    };
    const test2 = { 
      text:'text with snippet 20 with hilight'
     ,pretext: 'This is pre text 20'
     ,posttext: 'This is post text 20'
     ,key: 'key20'
     };
     const test3 = { 
      text:'text with snippet 30 with hilight'
     ,pretext: 'This is pre text 30'
     ,posttext: 'This is post text 30'
     ,key: 'key30'
     };
    const snips = [
      { text:'text with snippet 1 with hilight'
       ,pretext: 'This is pre text 1'
       ,posttext: 'This is post text 1'
       ,key: 'key1'
      }
      ,{ text:'text with snippet 2 with hilight'
       ,pretext: 'This is pre text 2'
       ,posttext: 'This is post text 2'
       ,key: 'key2'
      }
      ,{ text:'text with snippet 3 with hilight'
       ,pretext: 'This is pre text 3'
       ,posttext: 'This is post text 3'
       ,key: 'key3'
      }
    ];
    const SnipList = (props) =>{ const result = props.alist.map((snip) => 
     <div key= {snip.key}><Snippet snippet={snip} /> </div>
    ); 
    // console.log(result);
    return (<div>{result}</div>);
  }

     return (
      
      <div className="App">
        <div>React welcome page</div>
        <hr />
        <div>Direct object</div>
        <Snippet snippet={test0} />
        <Snippet snippet={test1} />
        <Snippet snippet={test2} />
        <Snippet snippet={test3} />  
        <hr />
        <div>Array object</div>
        <SnipList alist={snips} />
      </div>
    );
  }
}

export default App;
