import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Dialog} from "../../../components";

import "./sidebar.css";

// const SEARCH_PATH = "/";
// const SEARCH_PARAM = "query=";

const dialogs = [
  {
    id: 23,
    image:
      "https://cheesecake.articleassets.meaww.com/28740/uploads/d5d3d849-c418-4cdc-bcd9-2819fa26093d_800_420.jpeg",
    lastOnline: "",
    login: "Alex228"
  },
  {
    id: 3,
    image:
      "https://regnum.ru/uploads/pictures/news/2019/06/21/regnum_picture_15611274141218582_normal.jpg",
    lastOnline: "12:11",
    login: "Tom"
  },
  {
    id: 2334,
    image: "https://www.film.ru/sites/default/files/people/1455534-923219.jpg",
    lastOnline: "21:01",
    login: "Scarlet"
  }
];

class Sidebar extends Component {
  state = {
    searchQuery: "",
    result: {}
  };

  dialogActive(id) {
    console.log(id);
  }
  render() {
    return (
      <div className="sidebar">
        {dialogs.map(dialog => {
          return (
            <NavLink
              to={`/dialog/${+dialog.id}`}
              style={{textDecoration: "none"}}
            >
              <Dialog
                Change={this.dialogActive}
                id={dialog.id}
                image={dialog.image}
                lastOnline={dialog.lastOnline}
                login={dialog.login}
              />
            </NavLink>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
