import './App.css';

import React, { Component } from 'react'
import swal from 'sweetalert';
import ChartsPage from './components/Linechart';
import Table from './components/table';
import Cricket from './components/cricket';

class App extends Component {
 
  render() {
     
    return (
      <div style={{textAlign:'center',
                    alignItems:'center',
                    width:1000}}>
        <Cricket />
        {/* <ChartsPage />
        <Table /> */}
      </div>
    )
  }
}
export default App;
