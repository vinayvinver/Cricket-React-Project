import React, { Component } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default class Table extends Component {
    render(){
        return (
            <MDBTable>
              <MDBTableHead dark>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>First</th>
                  <th scope='col'>Last</th>
                  <th scope='col'>Handle</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope='row'>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          );
    }
}