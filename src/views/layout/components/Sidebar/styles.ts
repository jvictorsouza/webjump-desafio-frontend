import styled from "styled-components";

export const Styles = styled.div`
  width: calc(30% - 20px);
`;

export const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.five};
  padding: 10px;
  margin-right: 20px;

  li{
    margin: 10px;
    margin-left: 5px;
    font-weight: 400;
    font-size: 14px;
    white-space: nowrap;
    :hover{
      cursor: pointer;
      color: ${({ theme }) => theme.colors.six};
    }

    button{
      background-color: transparent;
      border: None;
      align-self: center;
      white-space: nowrap;
      color: ${({ theme }) => theme.colors.zero};
      :hover{
        text-decoration: None;
        color: ${({ theme }) => theme.colors.six};
      }
      :focus{
        outline: none;
      }
    }
  }
`;

export const ShopStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.one};
  padding: 10px;
  margin-right: 20px;

`;

export const HistoryRoutes = styled.div`
  display: flex;
  flex-direction: row;
  svg{
    color: ${({ theme }) => theme.colors.zero};
    align-self: center;
  }

  span{
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.zero};
    :hover{
      cursor: pointer;
      color: ${({ theme }) => theme.colors.six};
    }

    :last-child{
      color: ${({ theme }) => theme.colors.two};

      :hover{
        cursor: default;
      }
    }
  }
`;

export const FilterCamp = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.four};
  padding: 15px;
  margin-top: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;

  span{
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.three};
    margin: 10px 0px 5px 0px;
    :first-child{
      font-size: 16px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.two};
      margin: 0px;
    }
  }
`;

interface ButtonListInteface {
  isActive: boolean
}

export const ButtonList: any = styled.button`
  background-color: transparent;
  border: None;
  color: ${ (item:ButtonListInteface) => item.isActive ? ({ theme }) => theme.colors.six : ({ theme }) => theme.colors.zero }; 
  font-weight: 400;
  align-self: center;
  font-size: 12px;
  padding: 0px;
  white-space: nowrap;
  :focus {
    outline: none;
  }
`;

export const ColorPickerCamp = styled.div`
  display: flex;
  flex-direction: row;
`;

interface ColorPickerInteface {
  color: string
  isActive: boolean
}

export const ColorPicker:any = styled.div`
  min-height: 15px;
  min-width: 30px;
  background-color: ${ (picker:ColorPickerInteface) => picker.color };
  margin: 1px;
  border: ${ (picker:ColorPickerInteface) => picker.isActive ? '2px solid #231f20' : 'None' };
  :hover{
    cursor: pointer;
  }
`;
