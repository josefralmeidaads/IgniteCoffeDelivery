import React from 'react';
import { CoffeTextBox, ContainerHome, DetailsBuy, IconRounded, RowDetails } from './styles';

import cafeImg from '../../assets/cafe.png';
import { Clock, Coffee, Package, ShoppingCartSimple } from 'phosphor-react';

const Home: React.FC = () => {
  return (
   <ContainerHome>
    <CoffeTextBox>
      <span>
        Encontre o café perfeito
        para qualquer hora do dia
      </span>
      <p>Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</p>

      <DetailsBuy>
        <RowDetails>
          <article>
            <span>
              <IconRounded colorIcon='yellow-dark'>
                <ShoppingCartSimple size={16} weight="fill" color='#FFF'/>
              </IconRounded>
            </span>
            Compra simples e segura
          </article>

          <article>
            <span>
              <IconRounded colorIcon='gray'>
                <Package size={16} weight="fill" color='#FFF'/>
              </IconRounded>
            </span>
            Embalagem mantém o café intacto
          </article>
        </RowDetails>

        <RowDetails>
          <article>
            <span>
              <IconRounded colorIcon='yellow'>
                <Clock size={16} weight="fill" color='#FFF'/>
              </IconRounded>
            </span>
            Entrega rápida e rastreada
          </article>

          <article>
            <span>
              <IconRounded colorIcon='purple'>
                <Coffee size={16} weight="fill" color='#FFF' />
              </IconRounded>
            </span>
            O café chega fresquinho até você
          </article>
        </RowDetails>
      </DetailsBuy>
    </CoffeTextBox>

    <img src={cafeImg} alt="copo de café" />
   </ContainerHome>
  );
}

export default Home;