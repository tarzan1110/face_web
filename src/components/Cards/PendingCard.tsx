import React from "react";
import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PendingCard = ({}) => {
  return (
    <CardContainer>
      <ProgressLine>
        <Padder></Padder>
        <ProgressBarContainer>
          <CircularProgressbar
            value={0.5}
            maxValue={1}
            text={`${0.5 * 100}%`}
          />
        </ProgressBarContainer>
      </ProgressLine>
      <DescriptionPad>
        <LogoCover>
          <img src={require("../../asset/logo.png")} alt=""></img>
        </LogoCover>
        <Title>Fitness League</Title>
        <Subtitle>
          Saved by<Name>Eric Bronack</Name>
        </Subtitle>
        <Subtitle>on April 2, 2020</Subtitle>
        <BottomLine>
          <Padder></Padder>
          <img src={require("../../asset/deleteIcon.png")} alt=""></img>
        </BottomLine>
      </DescriptionPad>
    </CardContainer>
  );
};
const LogoCover = styled.div``;
const BottomLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
`;
const Name = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #2eb0e4;
  margin-left: 5px;
`;
const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #74788d;
  margin-bottom: 7px;
`;
const Title = styled.div`
  padding: 15px 0 10px 0;
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
  color: #39393d;
  font-family: Raleway;
`;
const Padder = styled.div`
  flex: 1;
`;
const DescriptionPad = styled.div`
  padding: 15px 15px 15px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProgressLine = styled.div`
  padding: 20px 25px 0 0;
  display: flex;
  float: right;
  width: 100%;
`;
const ProgressBarContainer = styled.div`
  height: 60px;
  width: 60px;
`;
const CardContainer = styled.div`
  float: right;
  width: 293px;
  height: 292px;
  background-color: white;
  border-radius: 20px;
  border: 2px solid #24ace2;
  box-shadow: 0 13px 51px #2b347d;
  margin: 10px;
`;

export default PendingCard;
