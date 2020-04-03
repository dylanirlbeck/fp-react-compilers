import React from "react";
import styled, { css } from "styled-components";

const safeGet = (obj = {}, key, defaultValue) =>
  obj[key] || defaultValue;

const alignItems = {
  center: "center",
  end: "flex-end",
  start: "flex-start",
};

const flexWrap = {
  nowrap: "nowrap",
  wrap: "wrap",
};

const justifyContent = {
  around: "space-around",
  between: "space-between",
  center: "center",
  end: "flex-end",
  start: "flex-start",
};

const flexMixin = css`
  align-items: ${({ align }) =>
    safeGet(alignItems, align, "flex-start")}
  justify-content: ${({ justify }) =>
    safeGet(justifyContent, justify, "flex-start")}
`;

const marginsAndPaddingsMixin = css`
  margin-bottom: ${({ mb }) => mb}
  margin-left: ${({ ml }) => ml}
  margin-right: ${({ mr }) => mr}
  margin-top: ${({ mt }) => mt}
  padding-bottom: ${({ pb }) => pb}
  padding-left: ${({ pl }) => pl}
  padding-right: ${({ pr }) => pr}
  padding-top: ${({ pt }) => pt}
`;

export const Column = styled.div`
  ${marginsAndPaddingsMixin}
  flex-direction: column;
  flex-grow: 1;
`;

export const Container = styled.div`
  ${marginsAndPaddingsMixin}
`;

export const Row = styled.div`
  ${flexMixin}
  ${marginsAndPaddingsMixin};
  display: flex;
  flex-direction: row;
  flex-wrap: ${({ wrap }) =>
    safeGet(flexWrap, wrap, "nowrap")};
`;

export const TouchableContainer = styled.button`
  ${flexMixin}
  ${marginsAndPaddingsMixin}
`;
