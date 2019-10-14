import React from "react";
import {Message, Dialog} from "../../components/index";

const Home = () => {
  const F = id => {
    console.log(id);
  };
  return (
    <div className="home">
      <Message date="12:02" text="Hello !👊🏻" id="1" isAuthor={true} />
      <Dialog
        Change={F}
        id="23"
        image="https://cheesecake.articleassets.meaww.com/28740/uploads/d5d3d849-c418-4cdc-bcd9-2819fa26093d_800_420.jpeg"
        lastOnline=""
        login="Alex228"
      />
    </div>
  );
};

export default Home;
