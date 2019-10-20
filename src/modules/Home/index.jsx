import React, {Component} from "react";
import {BASE_PATH} from "../../config";
import axios from "axios";

const SEARCH_PATH = "/";
const SEARCH_PARAM = "query=";

class Home extends Component {
  state = {
    searchQuery: "",
    result: {}
  };

  componentDidMount() {
    const {searchQuery} = this.state;
    axios
      .get(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)
      .then(res => res.json())
      .then(res => this.setDialog(res))
      .catch(error => console.log(error));
  }

  setDialog = result => {
    console.log(result);
    this.setState({result});
  };

  render() {
    // const {searchQuery, result} = this.state;
    // const {dialogs} = result;
    return (
      <div className="home">
        {/* <Message date="12:02" text="Hello !👊🏻" id="1" isAuthor={true} />
        <Dialog
          Change={F}
          id="23"
          image="https://cheesecake.articleassets.meaww.com/28740/uploads/d5d3d849-c418-4cdc-bcd9-2819fa26093d_800_420.jpeg"
          lastOnline=""
          login="Alex228"
        /> */}
      </div>
    );
  }
}

export default Home;
