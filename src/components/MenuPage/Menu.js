import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SpecialsMenu from "./SpecialsMenu";

export default function Menu() {
  return (
    <>
      <ul className="d-md-flex">
        <li>
          <HashLink smooth to={"/menu#specials"}>
            Specials
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"/menu#entrees"}>
            Entrees
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"/menu#appetizers"}>
            Appetizers
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"/menu#desserts"}>
            Desserts
          </HashLink>
        </li>
      </ul>
      <p id="special">Specials</p>
      <SpecialsMenu special="special" />
      <p id="entrees">Entrees</p>
      <SpecialsMenu category="Entrees" />
      <p id="appetizers">Appetizers</p>
      <SpecialsMenu category="Appetizers" />
      <p id="desserts">Desserts</p>
      <SpecialsMenu category="Desserts" />
    </>
  );
}
