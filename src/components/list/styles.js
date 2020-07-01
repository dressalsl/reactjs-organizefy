import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px;
    opacity: ${props => props.done ? 0.6 : 1.0};

    & + div {
        border-left: 1px solid rgba(0, 0, 0 , 0.5);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-itens: center;

        h2 {
            font-weight: 500;
            font-size: 16px;
            padding: 0 10px;
        }

        button {
            height: 42px;
            width: 42px;
            border-radius: 18px;
            background: #e99886;
            border: 0;
            cursor: pointer;
        }
    }

    ul {
        margin-top: 30px;
    }
`;

// & + div --> quero estilizar toda div que antes dela tem uma div