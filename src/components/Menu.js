import React from "react";
import styled from "styled-components";

const MenuItem = ({
  selected,
  label,
  onSelect,
  onMouseEnter,
  onMouseLeave,
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
const Menu = ({ selectedIndex, onSelect }) => {
  return (
    <MenuContainer>
      <MenuItem
        label={"Orders"}
        selected={selectedIndex === 0}
        onSelect={() => {
          if (!onSelect) return;
          onSelect(0);
        }}
        onMouseEnter={() => {
          if (!onSelect) return;
          onSelect(0);
        }}
        onMouseLeave={() => {
          if (!onSelect) return;
          onSelect(-1);
        }}
      />
      <MenuItem
        label={"Packages"}
        selected={selectedIndex === 1}
        onSelect={() => {
          if (!onSelect) return;
          onSelect(1);
        }}
        onMouseEnter={() => {
          if (!onSelect) return;
          onSelect(1);
        }}
        onMouseLeave={() => {
          if (!onSelect) return;
          onSelect(-1);
        }}
      />
      <MenuItem
        label={"Companies"}
        selected={selectedIndex === 2}
        onSelect={() => {
          if (!onSelect) return;
          onSelect(2);
        }}
        onMouseEnter={() => {
          if (!onSelect) return;
          onSelect(2);
        }}
        onMouseLeave={() => {
          if (!onSelect) return;
          onSelect(-1);
        }}
      />
      <MenuItem
        label={"Users"}
        selected={selectedIndex === 3}
        onSelect={() => {
          onSelect(3);
        }}
        onMouseEnter={() => {
          onSelect(3);
        }}
        onMouseLeave={() => {
          onSelect(-1);
        }}
      />
    </MenuContainer>
  );
};

export default Menu;

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
  background-color: ${(props) => (props.selected ? "white" : "transparent")};
`;
const SelectedMenuBackground = styled.div`
  width: 100%;
  height: 64px;
  background-image: ${(props) =>
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
