import React from 'react';
import { Container } from './styles';
import List from '../list';

export default function Board() {
    return (
        <Container>
            <List></List>
            <List></List>
            <List></List>
            <List></List>
        </Container>
    );
}