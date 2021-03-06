import styled, { css } from 'styled-components';

import { typoSubhead, typoCaption, typoBody1 } from '../mixins';
import { getters as g } from '../util';

export const List = styled.ul`
  display: block;
  padding: $list-border 0;
  list-style: none;
  min-width: 300px;
  width: ${({ width }) => width};
`;

export const ListItemBase = styled.li`
  ${typoSubhead()}
  line-height: 1;
  display: flex;
  min-height: ${g.listMinHeight}px;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: ${g.listMinPadding}px;
  cursor: default;
  color: ${g.listMainTextTextColor};
  overflow: hidden;
  ${({ twoLine }) => twoLine && css`
    height: ${g.listTwoLineHeight}px;
  `}
  ${({ threeLine }) => threeLine && css`
    height: ${g.listThreeLineHeight}px;
  `}
`;

export const LiPrimary = styled.span`
  order: 0;
  flex-grow: 2;
  text-decoration: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .twoLine & {
    height: ${({ theme }) => theme.listTwoLineHeight - theme.listMinPadding - theme.listBottomPadding}px;
    line-height: 20px;
    display: block;
  }
  .threeLine & {
    height: ${({ theme }) => theme.listThreeLineHeight - theme.listMinPadding - theme.listBottomPadding}px;
    line-height: 20px;
    display: block;
  }
`;

export const LiSecondary = styled.span`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  margin-left: ${g.listMinPadding}px;
  .twoLine & {
    height: ${({ theme }) => theme.listTwoLineHeight - theme.listMinPadding - theme.listBottomPadding}px;
  }
  .threeLine & {
    height: ${({ theme }) => theme.listThreeLineHeight - theme.listMinPadding - theme.listBottomPadding}px;
  }
`;

export const LiAction = styled.span``;
export const LiInfo = styled.span`
  ${typoCaption()}
  color: ${g.listSupportingTextTextColor};
`;
export const LiSubTitle = styled.span`
  padding: 0 0 0 ${g.listMinPadding}px;
  .twoLine & {
    ${typoBody1()}
    line-height: 18px;
    color: ${g.listSupportingTextTextColor};
    display: block;
    padding: 0;
  }
`;

export const LiIcon = styled.i`
  height: ${g.listIconSize}px;
  width: ${g.listIconSize}px;
  font-size: ${g.listIconSize}px;
  box-sizing: border-box;
  color: ${g.listIconColor};
  margin-right: ${({ theme }) => theme.listIconTextLeftDistance - theme.listIconSize - theme.listMinPadding}px;
  .twoLine & {
    float: left;
    // Icons are aligned to center of text in a two line list.
    margin-top: ${({ theme }) => (theme.listTwoLineHeight - theme.listMinPadding - theme.listBottomPadding - theme.listIconSize) / 2}px;
  }
  .threeLine & {
    float: left;
  }
`;

export const LiAvatar = styled.span`
  height: ${g.listAvatarSize}px;
  width: ${g.listAvatarSize}px;
  box-sizing: border-box;
  border-radius: 50%;
  // Set a background colour in case the user doesn't provide an image.
  background-color: ${g.listIconColor};
  // Set a font size and color in case the user provides a Material Icon.
  font-size: ${g.listAvatarSize}px;
  ${({ src }) => src && css`
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `}
  color: ${g.listAvatarColor};
  margin-right: ${({ theme }) => theme.listIconTextLeftDistance - theme.listAvatarSize - theme.listMinPadding}px;
  .twoLine & {
    float: left;
  }
  .threeLine & {
    float: left;
  }
`;

export const LiTitle = styled.span`
  font-size: 16px;
`;

export const LiTextBody = styled.div`
  ${typoBody1()}
  line-height: 18px;
  height: ${({ theme }) => theme.listThreeLineHeight - theme.listMinPadding - theme.listBottomPadding}px;
  color: ${g.listSupportingTextTextColor};
  display: block;
  padding: 0;
`;
