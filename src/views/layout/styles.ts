import styled from "styled-components";

export const Styles = styled.div`
  min-width: 768px; 
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StylesContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StylesContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 15% 20px 15%;
  height: 100%;
`;

export const Content = styled.div`
  min-height: 75%;
  max-height: 75%;
  min-width: 65%;
  max-width: 65%;
`;

export const StylesFooter = styled.div`
  background-color: ${({theme}) => theme.colors.two};
  min-height: 15%;
  margin: 5px 15% 5px 15%;
`;
