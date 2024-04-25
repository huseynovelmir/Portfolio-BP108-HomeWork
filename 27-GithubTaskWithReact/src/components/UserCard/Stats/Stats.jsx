import React from "react";
import "./Stats.css"
function Stats() {
  return (
    <ul class="stats">
      <li>
        <h4>Repos</h4>
        <h2 class="repo">19</h2>
      </li>
      <li>
        <h4>Followers</h4>
        <h2 class="followers">24</h2>
      </li>
      <li>
        <h4>Following</h4>
        <h2 class="following">22</h2>
      </li>
    </ul>
  );
}

export default Stats;
