import React, { Fragment } from "react";
import { PeopleContainer } from "./people.styles";
import PeopleList from "../../components/people-list/people-list.component";

const PeoplePage = () => (
  <PeopleContainer>
    <PeopleList />
  </PeopleContainer>
);

export default PeoplePage;
