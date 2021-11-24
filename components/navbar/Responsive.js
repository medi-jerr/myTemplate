import React, { useState } from "react";
import {
  IconBar,
  Fabars,
  List,
  ListItem,
  LinkItemList,
  ContIcon,
} from "./style";
import { IoIosArrowForward } from "react-icons/io";

function Responsive({ titles }) {
  const [editMode, setEditMode] = useState(false);

  const showList = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      <IconBar onClick={showList}>
        <Fabars />
      </IconBar>
      <List show={editMode}>
        {titles &&
          titles.map((item) => (
            <ListItem
              onClick={() => setEditMode(false)}
              value={item}
              key={Math.random()}
            >
              <LinkItemList to={item} smooth={true} duration={1000}>
                {item}
                <ContIcon>
                  <IoIosArrowForward />
                </ContIcon>
              </LinkItemList>
            </ListItem>
          ))}
      </List>
    </>
  );
}

export default Responsive;
