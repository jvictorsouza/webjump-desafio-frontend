import styled from "styled-components";

export const Styles = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
`;

export const InLineLinksandTexts = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 11px;
    justify-content: right;
    margin: auto;
    margin-right: 0px;
    padding: 5px 15% 5px 15%;
    color: ${({theme}) => theme.colors.one};
    span {
        align-self: center;
        margin: 3px;
    }
    button {
        background-color: transparent;
        border: None;
        font-weight: bold;
        text-decoration: underline;
        align-self: center;
        color: white;
        padding: 0px;
        :hover{
            cursor: pointer;
            color: ${({theme}) => theme.colors.six};
        }
    }
`;

export const InLineSpaceBetween = styled.div`
    display: flex;
    flex-wrap: row;
    justify-content: space-between;
    padding: 15px 15% 15px 15%;
    align-items: center;

    input{
        margin: 0px;
        border-radius: 0px 0px 0px 0px;
        height: 40px;
        width: 300px;
        @media (min-width:1130px) {
            width: 500px;
        }
       
        border: 1px solid grey;
    }

    button{
        border-radius: 0;
        margin-left: 0px;
        height: 40px;
        border: none;
        background-color: ${({theme}) => theme.colors.two};
        color: ${({theme}) => theme.colors.one};
        font-weight: bold;
        font-size: 12px;
        padding: 10px;
        width: 80px;
        :hover{
            color: ${({theme}) => theme.colors.six};
        }
    }

    span {
        font-weight: bold;
        align-self: center;
        color: white;
        font-size: 13px;
        :hover{
            cursor: pointer;
            color: ${({theme}) => theme.colors.six};
        }
    }
  
`;

export const InLineSpacedList = styled.div`
    display: flex;
    flex-wrap: row;
    align-items: center;
    padding: 15px 15% 15px 15%;
    height: 100%;
    color: ${({theme}) => theme.colors.one};
    
    button {
        background-color: transparent;
        border: None;
        color: ${({theme}) => theme.colors.one}; 
        font-weight: bold;
        align-self: center;
        font-size: 13px;
        margin-right: 9%;
        white-space: nowrap;

        :last-child{
            margin-right: 0px;
        }

        :hover{
            cursor: pointer;
            color: ${({theme}) => theme.colors.six} !important;
        }
    }
`;
