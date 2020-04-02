import React, { Component } from "react";
import styled from "styled-components";

const COLOR_DAMSON = "#954f9f";
const COLOR_GREY = "#83858f";
const COLOR_DARK_GREY = "#474950";
const COLOR_NEED_REVIEW = "#4b4a50";
const COLOR_LIGHT_BLACK = "#39393d";

const MenuItem = ({
  selected,
  label,
  onSelect,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <SelectedMenu
      onClick={() => {
        onSelect();
      }}
      onMouseEnter={() => {
        !!onMouseEnter && onMouseEnter();
      }}
      onMouseLeave={() => {
        !!onMouseLeave && onMouseLeave();
      }}
    >
      <SelectedMenuBackgroundBar selected={selected} />
      <SelectedMenuBackground
        selected={selected}
        src={require("../asset/rectangle.png")}
        alt=""
      >
        {label}
      </SelectedMenuBackground>
    </SelectedMenu>
  );
};
const CheckItem = () => {
  return <CheckItemImg src={require("../asset/check.png")} alt="" />;
};
const CloseItem = () => {
  return <CheckItemImg src={require("../asset/cross.png")} alt="" />;
};
const WarnItem = () => {
  return <WarnItemImg src={require("../asset/exclam.png")} alt="" />;
};
const NeedReviewItem = () => {
  return (
    <NeedReviewItemContainer>
      <NeedReviewItemSymbol></NeedReviewItemSymbol>
      <NeedReviewItemLabel>Needs Review</NeedReviewItemLabel>
    </NeedReviewItemContainer>
  );
};
const AdverseItem = () => {
  return (
    <StatusItemContainer>
      <AdverseItemSymbol></AdverseItemSymbol>
      <OtherItemLabel>Adverse</OtherItemLabel>
    </StatusItemContainer>
  );
};
const PreAdverseItem = () => {
  return (
    <StatusItemContainer>
      <PreAdverseItemSymbol></PreAdverseItemSymbol>
      <OtherItemLabel>Pre-Adverse</OtherItemLabel>
    </StatusItemContainer>
  );
};
const PendingItem = () => {
  return <PendingItemContainer>Pending</PendingItemContainer>;
};
const CompleteItem = () => {
  return <CompleteItemContainer>Complete</CompleteItemContainer>;
};
const ApprovedItem = () => {
  return (
    <StatusItemContainer>
      <ApprovedItemSymbol></ApprovedItemSymbol>
      <OtherItemLabel>Approved</OtherItemLabel>
    </StatusItemContainer>
  );
};

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }
  render() {
    let { selectedIndex } = this.state;
    return (
      <OrderScreenContainer>
        <NavBackground>
          <MenuContainer>
            <MenuItem
              label={"Orders"}
              selected={selectedIndex === 0}
              onSelect={() => {
                this.setState({ selectedIndex: 0 });
              }}
              onMouseEnter={() => {
                this.setState({ selectedIndex: 0 });
              }}
              onMouseLeave={() => {
                this.setState({ selectedIndex: -1 });
              }}
            />
            <MenuItem
              label={"Packages"}
              selected={selectedIndex === 1}
              onSelect={() => {
                this.setState({ selectedIndex: 1 });
              }}
              onMouseEnter={() => {
                this.setState({ selectedIndex: 1 });
              }}
              onMouseLeave={() => {
                this.setState({ selectedIndex: -1 });
              }}
            />
            <MenuItem
              label={"Companies"}
              selected={selectedIndex === 2}
              onSelect={() => {
                this.setState({ selectedIndex: 2 });
              }}
              onMouseEnter={() => {
                this.setState({ selectedIndex: 2 });
              }}
              onMouseLeave={() => {
                this.setState({ selectedIndex: -1 });
              }}
            />
            <MenuItem
              label={"Users"}
              selected={selectedIndex === 3}
              onSelect={() => {
                this.setState({ selectedIndex: 3 });
              }}
              onMouseEnter={() => {
                this.setState({ selectedIndex: 3 });
              }}
              onMouseLeave={() => {
                this.setState({ selectedIndex: -1 });
              }}
            />
          </MenuContainer>
          <SearchPad>
            <SearchCategory>
              <SearchTitle className="search-by">Search by:</SearchTitle>
              <Category>Last name</Category>
              <CategorySymbol>
                <img src={require("../asset/arrow_down.png")} alt=""></img>
              </CategorySymbol>
            </SearchCategory>
            <Padder>
              <img
                src={require("../asset/search.png")}
                alt=""
                style={{
                  width: 17,
                  height: 17,
                  marginRight: 15,
                  marginLeft: 10
                }}
              ></img>
              Last Name......
            </Padder>
          </SearchPad>
        </NavBackground>
        <HeaderContainer>
          <TableName>Orders</TableName>
          <Padder></Padder>
          <InviteButton>
            <img src={require("../asset/add.png")} alt=""></img>
            <InviteButtonLabel>Invite Candidate(s)</InviteButtonLabel>
          </InviteButton>
        </HeaderContainer>
        <TableContainerCover style={{ overflowX: "auto" }}>
          <TableContainer style={{ minWidth: 1300 }}>
            <TableHeader>
              <KeyCellItem flexPortion={2} type={"header"} color={"#9ea1ac"}>
                ID
              </KeyCellItem>
              <CellItem flexPortion={4} type={"header"} color={"#9ea1ac"}>
                NAME
              </CellItem>
              <CellItem flexPortion={4} type={"header"} color={"#9ea1ac"}>
                PACKAGE
              </CellItem>
              <CellItem flexPortion={2} type={"header"} color={"#9ea1ac"}>
                AMOUNT
              </CellItem>
              <CellItem
                flexPortion={2}
                type={"header"}
                color={"#9ea1ac"}
                center={true}
              >
                PAID
              </CellItem>
              <CellItem
                flexPortion={3}
                type={"header"}
                color={"#9ea1ac"}
                center={true}
              >
                FLAG
              </CellItem>
              <CellItem flexPortion={4} type={"header"} color={"#9ea1ac"}>
                SCORE
              </CellItem>
              <CellItem flexPortion={2} type={"header"} color={"#9ea1ac"}>
                STATUS
              </CellItem>
            </TableHeader>
            <TableContentLine>
              <KeyCellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                50392
              </KeyCellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                fontWeight={"bold"}
                color={COLOR_LIGHT_BLACK}
              >
                Loyola, Wilson John
              </CellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                fontWeight={"bold"}
                color={COLOR_DARK_GREY}
              >
                Criminal Background
              </CellItem>
              <CellItem
                flexPortion={2}
                type={"content"}
                fontWeight={"bold"}
                color={COLOR_DARK_GREY}
              >
                $20.00
              </CellItem>
              <CellItem flexPortion={2} type={"content"} center={true}>
                <CheckItem />
              </CellItem>
              <CellItem
                flexPortion={3}
                type={"content"}
                center={true}
              ></CellItem>
              <CellItem flexPortion={4} type={"content"}>
                <NeedReviewItem />
              </CellItem>
              <CellItem flexPortion={2} type={"content"}>
                <PendingItem />
              </CellItem>
            </TableContentLine>
            <TableContentLine>
              <KeyCellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                798078
              </KeyCellItem>
              <CellItem flexPortion={4} type={"content"} color={COLOR_DAMSON}>
                Schnedier, Wilson John
              </CellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                ID Validation
              </CellItem>
              <CellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                $30.00
              </CellItem>
              <CellItem flexPortion={2} type={"content"} center={true}>
                <CheckItem />
              </CellItem>
              <CellItem
                flexPortion={3}
                type={"content"}
                center={true}
              ></CellItem>
              <CellItem flexPortion={4} type={"content"}>
                <NeedReviewItem />
              </CellItem>
              <CellItem flexPortion={2} type={"content"}>
                <PendingItem />
              </CellItem>
            </TableContentLine>
            <TableContentLine>
              <KeyCellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                297609
              </KeyCellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_GREY}
                fontStyle={"italic"}
              >
                Peters, Brooke
              </CellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                Sex Offender List
              </CellItem>
              <CellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DAMSON}
                fontStyle={"italic"}
              >
                $30.00
              </CellItem>
              <CellItem flexPortion={2} type={"content"} center={true}>
                <CloseItem />
              </CellItem>
              <CellItem flexPortion={3} type={"content"} center={true}>
                <WarnItem />
              </CellItem>
              <CellItem flexPortion={4} type={"content"}>
                <AdverseItem />
              </CellItem>
              <CellItem flexPortion={2} type={"content"}>
                <CompleteItem />
              </CellItem>
            </TableContentLine>
            <TableContentLine>
              <KeyCellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                509600
              </KeyCellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_LIGHT_BLACK}
              >
                Zimmerman, Brand off
              </CellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                Criminal Background
              </CellItem>
              <CellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                $30.00
              </CellItem>
              <CellItem flexPortion={2} type={"content"} center={true}>
                <CheckItem />
              </CellItem>
              <CellItem flexPortion={3} type={"content"} center={true}>
                <WarnItem />
              </CellItem>
              <CellItem flexPortion={4} type={"content"}>
                <PreAdverseItem />
              </CellItem>
              <CellItem flexPortion={2} type={"content"}>
                <CompleteItem />
              </CellItem>
            </TableContentLine>
            <TableContentLine>
              <KeyCellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                566922
              </KeyCellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_LIGHT_BLACK}
              >
                Hardy , Terence Michael
              </CellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                Criminal Background
              </CellItem>
              <CellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                $30.00
              </CellItem>
              <CellItem flexPortion={2} type={"content"} center={true}>
                <CheckItem />
              </CellItem>
              <CellItem flexPortion={3} type={"content"} center={true}>
                <WarnItem />
              </CellItem>
              <CellItem flexPortion={4} type={"content"}>
                <ApprovedItem />
              </CellItem>
              <CellItem flexPortion={2} type={"content"}>
                <PendingItem />
              </CellItem>
            </TableContentLine>
            <TableContentLine>
              <KeyCellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                566922
              </KeyCellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_LIGHT_BLACK}
              >
                Hardy , Terence Michael
              </CellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                Criminal Background
              </CellItem>
              <CellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                $30.00
              </CellItem>
              <CellItem flexPortion={2} type={"content"} center={true}>
                <CheckItem />
              </CellItem>
              <CellItem flexPortion={3} type={"content"} center={true}>
                <WarnItem />
              </CellItem>
              <CellItem flexPortion={4} type={"content"}>
                <ApprovedItem />
              </CellItem>
              <CellItem flexPortion={2} type={"content"}>
                <CompleteItem />
              </CellItem>
            </TableContentLine>
            <TableContentLine>
              <KeyCellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                566922
              </KeyCellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_LIGHT_BLACK}
              >
                Hardy , Terence Michael
              </CellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                Criminal Background
              </CellItem>
              <CellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                $30.00
              </CellItem>
              <CellItem flexPortion={2} type={"content"} center={true}>
                <CheckItem />
              </CellItem>
              <CellItem flexPortion={3} type={"content"} center={true}>
                <WarnItem />
              </CellItem>
              <CellItem flexPortion={4} type={"content"}>
                <ApprovedItem />
              </CellItem>
              <CellItem flexPortion={2} type={"content"}>
                <CompleteItem />
              </CellItem>
            </TableContentLine>
            <TableContentLine>
              <KeyCellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                566922
              </KeyCellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_LIGHT_BLACK}
              >
                Hardy , Terence Michael
              </CellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                Criminal Background
              </CellItem>
              <CellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                $30.00
              </CellItem>
              <CellItem flexPortion={2} type={"content"} center={true}>
                <CheckItem />
              </CellItem>
              <CellItem flexPortion={3} type={"content"} center={true}>
                <WarnItem />
              </CellItem>
              <CellItem flexPortion={4} type={"content"}>
                <ApprovedItem />
              </CellItem>
              <CellItem flexPortion={2} type={"content"}>
                <CompleteItem />
              </CellItem>
            </TableContentLine>
            <TableContentLine>
              <KeyCellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                566922
              </KeyCellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_LIGHT_BLACK}
              >
                Hardy , Terence Michael
              </CellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                Criminal Background
              </CellItem>
              <CellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                $30.00
              </CellItem>
              <CellItem flexPortion={2} type={"content"} center={true}>
                <CheckItem />
              </CellItem>
              <CellItem flexPortion={3} type={"content"} center={true}>
                <WarnItem />
              </CellItem>
              <CellItem flexPortion={4} type={"content"}>
                <ApprovedItem />
              </CellItem>
              <CellItem flexPortion={2} type={"content"}>
                <CompleteItem />
              </CellItem>
            </TableContentLine>
            <TableContentLine>
              <KeyCellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                566922
              </KeyCellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_LIGHT_BLACK}
              >
                Hardy , Terence Michael
              </CellItem>
              <CellItem
                flexPortion={4}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                Criminal Background
              </CellItem>
              <CellItem
                flexPortion={2}
                type={"content"}
                color={COLOR_DARK_GREY}
              >
                $30.00
              </CellItem>
              <CellItem flexPortion={2} type={"content"} center={true}>
                <CheckItem />
              </CellItem>
              <CellItem flexPortion={3} type={"content"} center={true}>
                <WarnItem />
              </CellItem>
              <CellItem flexPortion={4} type={"content"}>
                <ApprovedItem />
              </CellItem>
              <CellItem flexPortion={2} type={"content"}>
                <CompleteItem />
              </CellItem>
            </TableContentLine>
          </TableContainer>
        </TableContainerCover>
        <Logo src={require("../components/logo.svg")} alt="" />
      </OrderScreenContainer>
    );
  }
}
export default Order;

const OrderScreenContainer = styled.div`
    flex:1;
    padding 20px 20px 20px 20px;
    position:relative;
`;
const NavBackground = styled.div`
  width: 100%;
  height: 200px;
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
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0 100px 0 100px;
  margin-top: 35px;
  margin-bottom: 50px;
`;
const TableName = styled.div`
  font-size: 24px;
  color: #474950;
  font-weight: bold;
  font-family: "Gotham Bold";
`;
const Padder = styled.div`
  flex: 1;
  color: #74788d;
  font-family: "Gotham";
  font-size: 13px;
  font-weight: 500;
  padding: 0 8px 0 8px;
`;
const InviteButton = styled.div`
  cursor: pointer;
  color: white;
  font-weight: bold;
  background-color: #24ace2;
  padding: 5px 20px 5px 20px;
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justifycontent: center;
`;
const InviteButtonLabel = styled.div`
  margin-left: 7px;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
`;
const SearchPad = styled.div`
  margin: 30px 7px 7px 0px;
  padding-left: 10px;
  padding-right: 10px;
  width: 600px;
  height: 55px;
  background-color: white;
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const SearchCategory = styled.div`
  padding: 0 7px 0 7px;
  width: 230px;
  background-color: #dadffd;
  height: 40px;
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const SearchTitle = styled.div`
  flex: 4;
  font-family: "Gotham";
  font-weight: 500;
  color: #6d66ae;
  font-size: 13px;
`;
const Category = styled.div`
  flex: 5;
  font-weight: 500;
  font-size: 13px;
  font-family: "Gotham";
  color: #000000;
`;
const CategorySymbol = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0px;
  top: 0px;
`;

const SelectedMenu = styled.div`
  cursor: pointer;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  margin: 0 20px 0 20px;
`;
const SelectedMenuBackgroundBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${props => (props.selected ? "white" : "transparent")};
`;
const SelectedMenuBackground = styled.div`
  width: 100%;
  height: 64px;
  background-image: ${props =>
    props.selected ? 'url("/rectangle.png")' : "none"};
  background-repeat: no-repeat;
  background-size: 100% 64px;
  display: flex;
  align-items: center;
  font-family: "Raleway";
  justify-content: center;
  color: #f7f8ff;
  font-weight: bold;
  font-size: 13px;
`;
const MenuContainer = styled.div`
  width: 100%;
  height: 64px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const TableHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 5px 15px 10px 15px;
  border-bottom: solid 1px #dde2f4;
`;
const TableContentLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 7px 15px 7px 15px;
  border-bottom: solid 1px #dde2f4;
`;
const TableContainer = styled.div`
  padding: 0 100px 0 100px;
  overflow-x: auto;
  white-space: nowrap;
  min-width: 1200px;
`;
const CellItem = styled.div`
  font-weight: bold;
  flex: ${props => props.flexPortion};
  text-align: ${props => (props.center ? "center" : "left")};
  color: ${props => props.color};
  font-size: 12px;
  font-family: "Gotham";
  font-style: ${props => props.fontStyle};
`;
const KeyCellItem = styled.div`
  font-weight: 500;
  flex: ${props => props.flexPortion};
  text-align: left;
  color: ${props => props.color};
  font-size: 13px;
  font-family: "Gotham";
  font-style: ${props => props.fontStyle};
`;
const NeedReviewItemContainer = styled.div`
  height: 25px;
  width: 150px;
  border: solid 1px #24ace2;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding: 0 7px 0 7px;
`;
const PreAdverseItemSymbol = styled.div`
  width: 16px;
  height: 16px;
  background-color: #ffcc72;
  border-radius: 8px;
  margin-right: 17px;
  margin-left: 7px;
  white-space: nowrap;
`;
const ApprovedItemSymbol = styled.div`
  width: 16px;
  height: 16px;
  background-color: #58d3be;
  border-radius: 8px;
  margin-right: 17px;
  margin-left: 7px;
  white-space: nowrap;
`;
const NeedReviewItemSymbol = styled.div`
  width: 16px;
  height: 16px;
  background-color: #b8bee2;
  border-radius: 8px;
  margin-right: 14px;
  margin-left: 7px;
  white-space: nowrap;
`;
const AdverseItemSymbol = styled.div`
  width: 16px;
  height: 16px;
  background-color: #ff7572;
  border-radius: 8px;
  margin-right: 20px;
  margin-left: 7px;
  white-space: nowrap;
`;
const NeedReviewItemLabel = styled.div`
  flex: 1;
  text-align: left;
  color: ${COLOR_NEED_REVIEW};
`;
const PendingItemContainer = styled.div`
  width: 100px;
  height: 30px;
  background-color: #fff6e8;
  color: #df9c6c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;
const StatusItemContainer = styled.div`
  width: 180px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  flexdirection: row;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding: 0 7px 0 7px;
`;
const CompleteItemContainer = styled.div`
  width: 100px;
  height: 30px;
  background-color: #d4f5eb;
  color: #6ac6b6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;
const OtherItemLabel = styled.div`
  flex: 1;
  text-align: left;
  color: #7d8194;
`;
const CheckItemImg = styled.img`
  width: 10px;
  height: 10px;
`;
const WarnItemImg = styled.img`
  width: 15px;
  height: 15px;
`;
const TableContainerCover = styled.div`
  overflow-x: auto;
`;
const Logo = styled.img`
  position: absolute;
  left: 50px;
  top: 50px;
  width: 102px;
  height: 39px;
`;
