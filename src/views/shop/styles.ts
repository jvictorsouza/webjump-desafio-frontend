import styled from "styled-components";

export const Styles: any = styled.div`
    height: fit-content;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;

    #box-products{
        justify-self: center;
    }

    nav{
        margin: auto;
        position: relative;
        bottom: 25px;
        left: -50px;
        height: fit-content;
        ul{
            li{
                button{
                    background-color: transparent !important;
                }
                .Mui-selected{
                    color: ${({theme}) => theme.colors.two} !important;
                    font-weight: 600;
                }
            }
        }
    }
`;