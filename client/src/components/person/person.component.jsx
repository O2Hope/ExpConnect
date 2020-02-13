import React from "react";
import {
  PersonContainer,
  DataContainer,
  TitleContainer,
  SkillsContainer,
  Skill,
  SkillIcon,
  SkillsHolder
} from "./person.styles";
import { Avatar, Col, Row, Icon } from "antd";

const Person = () => (
  <PersonContainer hoverable={true}>
    <DataContainer type="flex">
      <Col xs={6} xl={4}>
        <Row type="flex" justify="center">
          <Avatar size={128} type="user" />
        </Row>
      </Col>

      <Col xs={14} xl={16}>
        <Row type="flex" align="top">
          <TitleContainer level={4}>AGUSTIN RUIZ</TitleContainer>
          <div>ajahkahajk</div>
        </Row>
      </Col>
      <Col xs={4}>
        <SkillsHolder>
          <SkillsContainer>
            <SkillIcon type="check-circle" />
            <Skill>Skill</Skill>
          </SkillsContainer>
          <SkillsContainer>
            <SkillIcon type="check-circle" />
            <Skill>Skill</Skill>
          </SkillsContainer>
          <SkillsContainer>
            <SkillIcon type="check-circle" />
            <Skill>Skill454545545</Skill>
          </SkillsContainer>
        </SkillsHolder>
      </Col>
    </DataContainer>
  </PersonContainer>
);

export default Person;
