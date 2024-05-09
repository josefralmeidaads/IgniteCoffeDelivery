import styled from "styled-components";

export const ContainerHome = styled.div`
 width: 100%;
 display: flex;
 max-width: 70rem;
 margin: 0 auto;
 justify-content: space-between;

 & > img {
  padding-top: 5.75rem;
 }
`;

export const CoffeTextBox = styled.div`
 display: flex;
 flex-direction: column;
 padding-top: 5.75rem;

 & > span {
  font-size: 3rem;
  max-width: 36.75rem;
  margin-bottom: 1rem;
 }

 & > p {
  font-size: 1.25rem;
  max-width: 36.75rem;
 }
`;

export const DetailsBuy = styled.div`
 display: flex;
 flex-direction: column;
 width: 34rem;
 padding-top: 4.125rem;
`;

export const RowDetails = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding-bottom: 1.25rem;

  article {
   display: flex;
   align-items: center;
   gap: 0.5rem;
  }
`;

 const BaseIcon = styled.div`
 width: 2rem;
 height: 2rem;
 border-radius: 999px;
`;

interface IIconRoundedProps {
 colorIcon: 'gray' | 'purple' | 'yellow' | 'yellow-dark';
}

const colorOptions = {
 gray: 'gray-700',
 purple: 'purple-500',
 yellow: 'yellow-500',
 'yellow-dark': 'yellow-700',
} as const

export const IconRounded = styled(BaseIcon)<IIconRoundedProps>`
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: ${({ colorIcon ,theme }) => theme[colorOptions[colorIcon]]};
`;