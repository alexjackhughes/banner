import React from "react";
import styled from "styled-components";

import logo from "../../assets/images/tumelo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3vw;
  margin-left: 10vw;
  margin-right: 10vw;
`;

const ListItem = styled.div`
  background-color: #eeeeee;
  text-align: center;

  margin: 1em;
  padding: 2em;
`;

const getItems = () => {
  const elements = [];
  for (let i = 0; i < 10; i++) {
    elements.push(<ListItem key={i} />);
  }
  return elements;
};

const List = () => {
  const items = getItems();

  return (
    <Container>
      {items.map(item => {
        return item;
      })}
    </Container>
  );
};

export default List;
