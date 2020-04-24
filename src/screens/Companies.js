import React, { Component } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import CategorySelector from "../components/CategorySelector";
import { PendingCard } from "../components/Cards";
class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 2,
    };
  }
  render() {
    let { selectedIndex } = this.state;
    return (
      <Container>
        <NavBacgroundCover>
          <NavBackground>
            <Menu
              selectedIndex={selectedIndex}
              onSelect={(index) => {
                this.setState({ selectedIndex: index });
              }}
            />
            <SearchPad>
              <SymbolImage
                src={require("../asset/search.png")}
                alt=""
              ></SymbolImage>
              <SearchInput
                type={"text"}
                name={"title"}
                placeholder={"Search companies, organizations, or users..."}
                value={this.state.title}
              />
            </SearchPad>
            <Logo src={require("../components/logo.svg")} alt="" />
          </NavBackground>
          <AddBtnContainer>
            <AddCompanyButton
              src={require("../asset/newcompanybtn.png")}
              alt=""
            />
          </AddBtnContainer>
        </NavBacgroundCover>
        <TopPad>
          <CategorySelector />
          <Padder />
          <ListSymbol src={require("../asset/list.png")} />
          <GridSymbol src={require("../asset/grid.png")} />
        </TopPad>
        <CardPad>
          <PendingCard />
          <PendingCard />
          <PendingCard />
          <PendingCard />
          <PendingCard />
          <PendingCard />
          <PendingCard />
          <PendingCard />
        </CardPad>
      </Container>
    );
  }
}
export default Companies;

const AddBtnContainer = styled.div`
  display: flex;
  margin-top: -40px;
  float: right;
`;

const AddCompanyButton = styled.img`
  z-index: 5000;
`;
const NavBacgroundCover = styled.div`
  padding: 0 20px 0 20px;
`;
const CardPad = styled.div`
  background-color: #d8e3ff;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;
const ListSymbol = styled.img`
  margin-right: 20px;
`;
const GridSymbol = styled.img``;
const TopPad = styled.div`
  z-index: 200;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 80px 20px 80px;
`;
const SymbolImage = styled.img`
  width: 17px;
  height: 17px;
  margin: 0 15px 0 5px;
`;
const SearchInput = styled.input`
  width: 100%;
  border: transparent;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  font-family: "Raleway";
`;
const Padder = styled.div`
  flex: 1;
`;
const Container = styled.div`
  flex: 1;
  position: relative;
  background-color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const NavBackground = styled.div`
  height: 200px;
  width: 100%;
  background-image: url("/headerbar.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  minimum-height: 350px;
  overflow: hidden;
  border-bottom-right-radius: 38px;
  border-bottom-left-radius: 38px;
`;

const SearchPad = styled.div`
  margin: 30px 7px 7px 0px;
  padding: 0 120px 0 120px;
  width: 600px;
  height: 55px;
  background-color: white;
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  position: absolute;
  left: 50px;
  top: 50px;
  width: 102px;
  height: 39px;
`;
