import styled from "styled-components";
import { Card, Row, Typography, Icon } from "antd";

const { Title } = Typography;

export const PersonContainer = styled(Card)``;

export const DataContainer = styled(Row)`
  height: 130px;
`;

export const TitleContainer = styled(Title)`
  width: 100%;
`;

export const SkillsHolder = styled.div`
  display: flex;
  justify-content: center;
  color: green;
  align-items: flex-start;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  height: 100%;
`;

export const SkillsContainer = styled.div``;

export const SkillIcon = styled(Icon)`
  margin-top: 3px;
  margin-right: 5px;
`;

export const Skill = styled.span`
  text-align: center;
`;
