import React, { Fragment } from "react";
import Person from "../person/person.component";
import { PeopleListContainer, PersonContainer } from "./people-list.styles";
import { Col } from "antd";

const PeopleList = () => (
  <PeopleListContainer type="flex" justify="center">
    <PersonContainer xs={20} md={20} lg={18} xl={16}>
      <Person />
    </PersonContainer>
  </PeopleListContainer>
);

export default PeopleList;
