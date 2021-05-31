import React from 'react';
import Header from './Header';
import { Oportunidade } from './Oportunidade';
import { Container, Row, Button } from 'react-bootstrap';
import { RiHandHeartLine } from "react-icons/ri"
import { FaDonate } from "react-icons/fa"
import { BiCalendarHeart } from "react-icons/bi"

function App() {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row style={{ paddingTop: "85px" }}>

        <Oportunidade
          title="VAGA DE VOLUNTARIADO"
          type="Arrecadação de alimentos para moradores de rua"
          city="SP Invisível"
          variant="2-6"
          typeVariant="HORAS SEMANA"
          location="Natal, RN"
          typeParticipation="Participar"
          icon={RiHandHeartLine}
          colorIcon="orange" />

        <Oportunidade
          title="DOAÇÃO DE MATERIAIS"
          type="Arrecadação de alimentos para moradores de rua"
          city="SP Invisível"
          variant="36"
          typeVariant="ITENS DISPONÍVEIS"
          location="Natal, RN"
          typeParticipation="Doar"
          icon={BiCalendarHeart}
          colorIcon="cyan" />

        <Oportunidade
          title="DOAÇÃO DE MATERIAIS"
          type="Arrecadação de alimentos para moradores de rua"
          city="SP Invisível"
          variant="36"
          typeVariant="ITENS DISPONÍVEIS"
          location="Natal, RN"
          typeParticipation="Doar"
          icon={BiCalendarHeart}
          colorIcon="cyan" />

      </Row>

      <Row>
        <Oportunidade
          title="DOAÇÃO DE MATERIAIS"
          type="Arrecadação de alimentos para moradores de rua"
          city="SP Invisível"
          variant="2-6"
          typeVariant="HORAS SEMANA"
          location="Natal, RN"
          typeParticipation="Doar"
          icon={BiCalendarHeart}
          colorIcon="cyan" />

        <Oportunidade
          title="VAGA DE VOLUNTARIADO"
          type="Arrecadação de alimentos para moradores de rua"
          city="SP Invisível"
          variant="2-6"
          typeVariant="HORAS SEMANA"
          location="Natal, RN"
          typeParticipation="Participar"
          icon={RiHandHeartLine}
          colorIcon="orange" />

        <Oportunidade
          title="CAMPANHA DE ARRECADAÇÃO"
          type="Arrecadação de alimentos para moradores de rua"
          city="SP Invisível"
          variant="R$ 5.000"
          typeVariant="VALOR ESPERADO"
          location="Natal, RN"
          typeParticipation="Contribuir"
          icon={FaDonate}
          colorIcon="green" />
      </Row>

      <Row>
        <Oportunidade
          title="DOAÇÃO DE MATERIAIS"
          type="Arrecadação de alimentos para moradores de rua"
          city="SP Invisível"
          variant="36"
          typeVariant="ITENS DISPONÍVEIS"
          location="Natal, RN"
          typeParticipation="Doar"
          icon={BiCalendarHeart}
          colorIcon="cyan" />

        <Oportunidade
          title="VAGA DE VOLUNTARIADO"
          type="Entrega de roupas e alimentos para moradores de rua"
          city="SP Invisível"
          variant="36"
          typeVariant="ITENS DISPONÍVEIS"
          location="Natal, RN"
          typeParticipation="Participar"
          icon={RiHandHeartLine}
          colorIcon="orange" />

        <Oportunidade
          title="DOAÇÃO DE MATERIAIS"
          type="Arrecadação de alimentos para moradores de rua"
          city="SP Invisível"
          variant="36"
          typeVariant="ITENS DISPONÍVEIS"
          location="Natal, RN"
          typeParticipation="Doar"
          icon={BiCalendarHeart}
          colorIcon="cyan" />
        <Button variant="outline-success" style={{ position: "relative", top: "10px", left: "15px" }}>Todas as Oportunidades</Button>{' '}
      </Row>
    </Container>
  );
}

export default App;
