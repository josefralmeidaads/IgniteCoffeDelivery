import React from 'react';

import logoImg from '../../assets/logo.svg';
import { ButtonCart, CartInfo, ContainerHeader, ContenteHeader, LocationBox } from './styles';
import { MapPin, ShoppingCart } from 'phosphor-react';

const Header = () => {
  return (
   <ContainerHeader>
    <ContenteHeader>
     <img src={logoImg}/>

     <CartInfo>
      <LocationBox>
       <MapPin size={20} weight="fill" />
       Porto Alegre, RS
      </LocationBox>

      <ButtonCart>
       <ShoppingCart size={32} weight="fill" />
      </ButtonCart>
     </CartInfo>
    </ContenteHeader>
   </ContainerHeader>
  );
}

export default Header;