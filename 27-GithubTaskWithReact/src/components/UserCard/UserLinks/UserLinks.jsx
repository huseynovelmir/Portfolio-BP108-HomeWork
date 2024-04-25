import React from "react";
import Location from "./Location/Location";
import Twitter from "./Twitter/Twitter";
import Website from "./Website/Website";
import Org from "./Org/Org";
function UserLinks() {
  return (
    <div class="userLinks">
      <Location />
      <Twitter />
      <Website />
      <Org />
    </div>
  );
}

export default UserLinks;
