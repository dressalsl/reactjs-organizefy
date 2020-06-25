import React from 'react';
import { Container } from './styles';

import { MdAdd } from 'react-icons/md';
import Card from '../card';

export default function List() {
    return (
        <Container>
            <header>
                <h2>Taks</h2>
                <button type='button'>
                    <MdAdd size={24} color='#fff'></MdAdd>
                </button>
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