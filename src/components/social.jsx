import React, { Component } from "react";
import { Table } from "reactstrap";
import Instagram from "../content/images/social/ig-logo-email.png";
import LinkedIn from "../content/images/social/linkedIn.png";
import '../App.css';

export default class Social extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>
              <a href="https://www.instagram.com/devbogoodski/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt={Instagram} width="32px" /></a>
            </th>
            
            <th id="alignRight">
              <a href="https://www.linkedin.com/in/sbogucki12/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt={LinkedIn} width="32px" /></a>
            </th>
          </tr>
        </thead>
      </Table>
    );
  }
}
