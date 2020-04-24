import React, { Component } from "react";
import styled from "styled-components";

class CategorySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }
  render() {
    return (
      <Container>
        <Title>Sort by</Title>
        <Content>Pending</Content>
        <Baloon>
          <Count>2</Count>
        </Baloon>
        <CaretImage src={require("../asset/caret.png")} />
      </Container>
    );
  }
}
export default CategorySelector;

const CaretImage = styled.img`
  margin: 0 7px 0 7px;
`;
const Count = styled.div`
  font-size: 13px;
  color: #158cbb;
  font-weight: bold;
`;
const Baloon = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background-color: #d3ebf5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 224px;
  height: 40px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #d8e3ff;
  border-radius: 7px;
  padding: 0 5px 0 15px;
`;
const Title = styled.div`
  flex: 1;
  color: #6e7ab2;
  font-size: 14px;
  font-weight: 500;
  font-family: Raleway;
`;
const Content = styled.div`
  color: #39393d;
  font-size: 14px;
  font-weight: 600;
  padding: 0 8px 0 5px;
  font-family: Raleway;
`;
