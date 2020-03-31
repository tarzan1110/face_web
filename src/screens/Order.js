import React, {Component} from 'react'
import styled from 'styled-components'

const COLOR_DAMSON = '#954f9f'
const MenuItem = ({selected,label,onSelect})=>{
    return(
        <SelectedMenu onClick={()=>{onSelect()}}>
            <SelectedMenuBackgroundBar selected={selected}/>
            <SelectedMenuBackground selected={selected} src={require("../asset/rectangle.png")}  alt="">{label}</SelectedMenuBackground>
        </SelectedMenu>
    )
}
const CheckItem = ()=>{
    return(
        <CheckItemImg src={require("../asset/check.png")}  alt=""/>
    )
}
const CloseItem = ()=>{
    return(
        <CheckItemImg src={require("../asset/cross.png")}  alt=""/>
    )
}
const WarnItem = ()=>{
    return(
        <WarnItemImg src={require("../asset/exclam.png")}  alt=""/>
    )
}
const NeedReviewItem = ()=>{
    return(
        <NeedReviewItemContainer>
            <NeedReviewItemSymbol></NeedReviewItemSymbol>
            <NeedReviewItemLabel>Needs Review</NeedReviewItemLabel>
        </NeedReviewItemContainer>
    )
}
const AdverseItem = ()=>{
    return(
        <StatusItemContainer>
            <AdverseItemSymbol></AdverseItemSymbol>
            <OtherItemLabel>Adverse</OtherItemLabel>
        </StatusItemContainer>
    )
}
const PreAdverseItem = ()=>{
    return(
        <StatusItemContainer>
            <PreAdverseItemSymbol></PreAdverseItemSymbol>
            <OtherItemLabel>Pre-Adverse</OtherItemLabel>
        </StatusItemContainer>
    )
}
const PendingItem = ()=>{
    return(
        <PendingItemContainer>Pending</PendingItemContainer>
    )
}
const CompleteItem = ()=>{
    return(
        <CompleteItemContainer>Complete</CompleteItemContainer>
    )
}
const ApprovedItem = ()=>{
    return(
        <StatusItemContainer>
            <ApprovedItemSymbol></ApprovedItemSymbol>
            <OtherItemLabel>Approved</OtherItemLabel>
        </StatusItemContainer>
    )
}


class Order extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedIndex:0
        }
    }
    render(){
        let {selectedIndex}=this.state
        return(
            <OrderScreenContainer>
                <NavBackground>
                        <MenuContainer>
                            <MenuItem label={"Orders"} selected={selectedIndex===0} onSelect={()=>{this.setState({selectedIndex:0})}}/>
                            <MenuItem label={"Packages"} selected={selectedIndex===1} onSelect={()=>{this.setState({selectedIndex:1})}}/>
                            <MenuItem label={"Companies"} selected={selectedIndex===2} onSelect={()=>{this.setState({selectedIndex:2})}}/>
                            <MenuItem label={"Users"} selected={selectedIndex===3} onSelect={()=>{this.setState({selectedIndex:3})}}/>
                        </MenuContainer>
                        <SearchPad>
                             <SearchCategory >
                                <SearchTitle>Search by:</SearchTitle>
                                <Category>Last name</Category>
                                <CategorySymbol><img src={require("../asset/arrow_down.png")} alt=""></img></CategorySymbol>
                             </SearchCategory> 
                             <Padder>
                                Last Name...
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
                <div className="container-cover" style={{overflowX:'auto'}}>
                <TableContainer style={{minWidth:1400}}>
                    <TableHeader>
                        <CellItem flexPortion={1} type={"header"} color={"#9ea1ac"}>ID</CellItem>
                        <CellItem flexPortion={1} type={"header"} color={"#9ea1ac"}>NAME</CellItem>
                        <CellItem flexPortion={1} type={"header"} color={"#9ea1ac"}>PACKAGE</CellItem>
                        <CellItem flexPortion={1} type={"header"} color={"#9ea1ac"}>AMOUNT</CellItem>
                        <CellItem flexPortion={1} type={"header"} color={"#9ea1ac"}>PAID</CellItem>
                        <CellItem flexPortion={1} type={"header"} color={"#9ea1ac"}>FLAG</CellItem>
                        <CellItem flexPortion={2} type={"header"} color={"#9ea1ac"}>SCORE</CellItem>
                        <CellItem flexPortion={1} type={"header"} color={"#9ea1ac"}>STATUS</CellItem>
                    </TableHeader>
                    <TableContentLine>
                        <CellItem flexPortion={1} type={"content"} fontWeight={"bold"} color={"black"}>50392</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Loyola, Wilson John</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Criminal Background</CellItem>
                        <CellItem flexPortion={1} type={"content"}>$20.00</CellItem>
                        <CellItem flexPortion={1} type={"content"}><CheckItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}></CellItem>
                        <CellItem flexPortion={2} type={"content"}><NeedReviewItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><PendingItem/></CellItem>
                    </TableContentLine>
                    <TableContentLine>
                        <CellItem flexPortion={1} type={"content"} fontWeight={"bold"} color={"black"}>798078</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Schnedier, Wilson John</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Criminal Background</CellItem>
                        <CellItem flexPortion={1} type={"content"}>$30.00</CellItem>
                        <CellItem flexPortion={1} type={"content"}><CheckItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}></CellItem>
                        <CellItem flexPortion={2} type={"content"}><NeedReviewItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><PendingItem/></CellItem>
                    </TableContentLine>
                    <TableContentLine>
                        <CellItem flexPortion={1} type={"content"} fontWeight={"bold"} color={"black"}>297609</CellItem>
                        <CellItem flexPortion={1} type={"content"} color={COLOR_DAMSON} fontStyle={"italic"}>Peters, Brooke</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Criminal Background</CellItem>
                        <CellItem flexPortion={1} type={"content"} color={COLOR_DAMSON} fontStyle={"italic"}>$30.00</CellItem>
                        <CellItem flexPortion={1} type={"content"}><CloseItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><WarnItem/></CellItem>
                        <CellItem flexPortion={2} type={"content"}><AdverseItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><CompleteItem/></CellItem>
                    </TableContentLine>
                    <TableContentLine>
                        <CellItem flexPortion={1} type={"content"} fontWeight={"bold"} color={"black"}>509600</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Zimmerman, Brand off</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Criminal Background</CellItem>
                        <CellItem flexPortion={1} type={"content"}>$30.00</CellItem>
                        <CellItem flexPortion={1} type={"content"}><CheckItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><WarnItem/></CellItem>
                        <CellItem flexPortion={2} type={"content"}><PreAdverseItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><CompleteItem/></CellItem>
                    </TableContentLine>
                    <TableContentLine>
                        <CellItem flexPortion={1} type={"content"} fontWeight={"bold"} color={"black"}>566922</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Hardy , Terence Michael</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Criminal Background</CellItem>
                        <CellItem flexPortion={1} type={"content"}>$30.00</CellItem>
                        <CellItem flexPortion={1} type={"content"}><CheckItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><WarnItem/></CellItem>
                        <CellItem flexPortion={2} type={"content"}><ApprovedItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><PendingItem/></CellItem>
                    </TableContentLine>
                    <TableContentLine>
                        <CellItem flexPortion={1} type={"content"} fontWeight={"bold"} color={"black"}>566922</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Hardy , Terence Michael</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Criminal Background</CellItem>
                        <CellItem flexPortion={1} type={"content"}>$30.00</CellItem>
                        <CellItem flexPortion={1} type={"content"}><CheckItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><WarnItem/></CellItem>
                        <CellItem flexPortion={2} type={"content"}><ApprovedItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><CompleteItem/></CellItem>
                    </TableContentLine>
                    <TableContentLine>
                        <CellItem flexPortion={1} type={"content"} fontWeight={"bold"} color={"black"}>566922</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Hardy , Terence Michael</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Criminal Background</CellItem>
                        <CellItem flexPortion={1} type={"content"}>$30.00</CellItem>
                        <CellItem flexPortion={1} type={"content"}><CheckItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><WarnItem/></CellItem>
                        <CellItem flexPortion={2} type={"content"}><ApprovedItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><CompleteItem/></CellItem>
                    </TableContentLine>
                    <TableContentLine>
                        <CellItem flexPortion={1} type={"content"} fontWeight={"bold"} color={"black"}>566922</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Hardy , Terence Michael</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Criminal Background</CellItem>
                        <CellItem flexPortion={1} type={"content"}>$30.00</CellItem>
                        <CellItem flexPortion={1} type={"content"}><CheckItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><WarnItem/></CellItem>
                        <CellItem flexPortion={2} type={"content"}><ApprovedItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><CompleteItem/></CellItem>
                    </TableContentLine>
                    <TableContentLine>
                        <CellItem flexPortion={1} type={"content"} fontWeight={"bold"} color={"black"}>566922</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Hardy , Terence Michael</CellItem>
                        <CellItem flexPortion={1} type={"content"}>Criminal Background</CellItem>
                        <CellItem flexPortion={1} type={"content"}>$30.00</CellItem>
                        <CellItem flexPortion={1} type={"content"}><CheckItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><WarnItem/></CellItem>
                        <CellItem flexPortion={2} type={"content"}><ApprovedItem/></CellItem>
                        <CellItem flexPortion={1} type={"content"}><CompleteItem/></CellItem>
                    </TableContentLine>
                </TableContainer>
                </div>
            </OrderScreenContainer>
        )
    }
}
export default Order 

const OrderScreenContainer = styled.div`
    flex:1;
    padding 20px 20px 20px 20px;
`
const NavBackground = styled.div`
    width:100%;
    height:300px;
    background-image: url("/headerbar.png");
    background-repeat: no-repeat;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    minimum-height:350px;
    overflow:hidden;
    border-bottom-right-radius:38px;
`
const HeaderContainer = styled.div`
    width:100%;
    display:flex;
    padding:0 80px 0 80px;
    margin-top:20px;
    margin-bottom:50px;
`
const TableName = styled.div`
    font-size:18px;
    font-weight:bold;
`
const Padder = styled.div`
    flex:1;
    color:#74788d;
    font-weight:500;
    padding-left:40px;
`
const InviteButton = styled.div`
    cursor:pointer;
    color:white;
    font-weight:bold;
    background-color:#24ace2;
    padding:5px 20px 5px 20px;
    border-radius:7px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justifyContent:center;
`
const InviteButtonLabel = styled.div`
    margin-left:7px;
`
const SearchPad = styled.div`
    margin-right:7px;
    margin-left:7px;
    padding-left:10px;
    padding-right:10px;
    width:600px;
    height:50px;
    background-color:white;
    border-radius:7px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`
const SearchCategory = styled.div`
    padding:0 7px 0 7px;
    width:230px;
    background-color:#dadffd;
    height:40px;
    border-radius:7px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`
const SearchTitle = styled.div`
    flex:4;
    font-weight:500;
    color:#6d66ae;
`
const Category = styled.div`
    flex:5;
    font-weight:bold;
`
const CategorySymbol = styled.div`
    flex:1;
    flex-direction:row;
    display:flex;
    align-items:center;
    justify-content:center;
    left:0px;
    top:0px;
`

const SelectedMenu = styled.div`
    cursor:pointer;
    flex-direction:column;
    display:flex;
    align-items:center;
    justify-content:center;
    width:100px;
    margin:0 20px 0 20px;
`
const SelectedMenuBackgroundBar = styled.div`
    width:100%;
    height:5px;
    background-color: ${props=>props.selected?'white':'transparent'};

`
const SelectedMenuBackground = styled.div`
    width:100%;
    height:100px;
    background-image: ${props=>props.selected?'url("/rectangle.png")':'none'};
    background-repeat: no-repeat;
    background-size:contain;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    font-weight:bold;
    font-size:18px;
`
const MenuContainer = styled.div`
    width:100%;
    height:100px;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`
const TableHeader = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    padding:5px 0 10px 0;
    border-bottom:solid 1px #dde2f4;
`
const TableContentLine = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    padding:5px 0 10px 0;
    border-bottom:solid 1px #dde2f4;
`
const TableContainer =styled.div`
   
    padding:0 100px 0 100px;
    overflow-x: auto;
    white-space: nowrap;
    
`
const CellItem = styled.div`

    font-weight:${props=>props.fontWeight};
    flex:${props=>props.flexPortion};
    text-align:left;
    color:${props=>props.color};
    font-size:14px;
    font-weight:bold;
    font-style:${props=>props.fontStyle}

`
const NeedReviewItemContainer = styled.div`
    
    width:180px;
    height:30px;
    border:solid 1px #24ace2;
    border-radius:5px;
    display:flex;
    flexDirection:row;
    align-items:center;
    justify-content:center;
    margin-right:10px;
    padding:0 7px 0 7px;
`
const PreAdverseItemSymbol = styled.div`
    width:16px;
    height:16px;
    background-color:#ffcc72;
    border-radius:8px;
    margin-right:17px;
    margin-left:7px;
    white-space:nowrap;
`
const ApprovedItemSymbol = styled.div`
    width:16px;
    height:16px;
    background-color:#58d3be;
    border-radius:8px;
    margin-right:17px;
    margin-left:7px;
    white-space:nowrap;
`
const NeedReviewItemSymbol = styled.div`
    width:16px;
    height:16px;
    background-color:#b8bee2;
    border-radius:8px;
    margin-right:7px;
    margin-left:7px;
    white-space:nowrap;
`
const AdverseItemSymbol = styled.div`
    width:16px;
    height:16px;
    background-color:#ff7572;
    border-radius:8px;
    margin-right:17px;
    margin-left:7px;
    white-space:nowrap;
`
const NeedReviewItemLabel = styled.div`
    flex:1;
    text-align:center;
`
const PendingItemContainer = styled.div`
    width:100px;
    height:30px;
    background-color:#fff6e8;
    color:#df9c6c;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:7px;
`
const StatusItemContainer = styled.div`
    width:180px;
    height:30px;
    border-radius:5px;
    display:flex;
    flexDirection:row;
    align-items:center;
    justify-content:center;
    margin-right:10px;
    padding:0 7px 0 7px;
`
const CompleteItemContainer = styled.div`
    width:100px;
    height:30px;
    background-color:#d4f5eb;
    color:#6ac6b6;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:7px;
`
const OtherItemLabel = styled.div`
    flex:1;
    text-align:left;
    color:#7d8194;
`
const CheckItemImg = styled.img`
    width:15px;
    height:15px;
`
const WarnItemImg = styled.img`
    width:20px;
    height:20px;
`