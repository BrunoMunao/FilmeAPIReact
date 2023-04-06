import React, { Component } from 'react';
import Form from './Form/Form';
import './Home.css'

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
