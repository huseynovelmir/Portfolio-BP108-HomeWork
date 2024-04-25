import React from "react";
import img from "../../assets/elmir.jpeg";
import { Stats, UserLinks } from "../index";
import NameAndJoin from "./NameAndJoin/NameAndJoin";

function UserCard() {
  return (
    <div class="user">
      <img src={img} alt="huseynovelmir" class="userImg" />
      <div class="textarea">
        <NameAndJoin />
        <h3 class="username">@huseynovelmir</h3>
        <p class="userBio">
          Front-End developer 😎
          <br />
          Back-End is Loading...🫡
        </p>
        <Stats />
        <UserLinks />
      </div>
    </div>
  );
}

export default UserCard;
