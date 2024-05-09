import styled from "styled-components";

export const ContainerHeader = styled.header`
 height: 6.5rem;
 background-color: ${({theme}) => theme["gray-100"]};
 padding: 2rem 0;
`;

export const ContenteHeader = styled.div`
 width: 100%;
 max-width: 70rem;
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin: 0 auto;
`;

export const CartInfo = styled.div`
 display: flex;
 gap: 0.5rem;
`;

export const LocationBox = styled.span`
 background-color: ${({theme}) => theme["purple-300"]};
 padding: 1rem;
 border-radius: 8px;
 color: ${({theme}) => theme["purple-700"]};
 display: flex;
 align-items: center;
`;

export const ButtonCart = styled.button`
 padding: 0.5rem;
 border: 0;
 background-color: ${({theme}) => theme["yellow-300"]};
 border-radius: 8px;
 cursor: pointer;

 svg {
  color: ${({theme}) => theme["yellow-700"]};
 }

 &:hover {
   transition: 0.2s;
   background-color: ${({theme}) => theme["yellow-500"]};
 }
`;