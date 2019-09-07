import React from "react";

import { Container, ListItem } from "./style";

// Generates an array of styled divs
const generateListItems = () => {
  const elements = [];

  for (let i = 0; i < 10; i++) {
    elements.push(<ListItem key={i} />);
  }
  return elements;
};

/**
 * Renders a list of divs, so that the banner
 * is positioned against some fake data.
 */
const List = () => {
  const items = generateListItems();

  return (
    <Container>
      {items.map(item => {
        return item;
      })}
    </Container>
  );
};

export default List;
