import React from 'react';
import { Container } from './styles';

import { MdAdd } from 'react-icons/md';
import Card from '../card';

export default function List({ data }) {
    return (
        <Container>
            <header>
                <h2>{data.title}</h2>
            </header>

            <ul>
              <Card></Card>  
              <Card></Card>  
              <Card></Card>  
              <Card></Card>  
              <Card></Card>  
            </ul>

        </Container>
    );
}