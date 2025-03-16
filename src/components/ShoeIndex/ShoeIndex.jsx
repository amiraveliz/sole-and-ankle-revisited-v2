import React from "react";
import styled from "styled-components";

import { DEVICE, WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <>
      <Wrapper>
        <MainColumn>
          <Header>
            <Title>Running</Title>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </Header>
          <Spacer size={32} />
          <ShoeGridDesktop>
            <ShoeGrid />
          </ShoeGridDesktop>
        </MainColumn>
        <LeftColumn>
          <Breadcrumbs>
            <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
          </Breadcrumbs>
          <WrapperSpacer>
            <Spacer size={42} />
          </WrapperSpacer>

          <MobileTitle>Running</MobileTitle>
          <ShoeSidebar />
        </LeftColumn>
      </Wrapper>
      <WrapperMobile>
        <ShoeGridMobile>
          <ShoeGrid />
        </ShoeGridMobile>
      </WrapperMobile>
    </>
  );
};

const WrapperMobile = styled.div`
  display: none;
  @media ${DEVICE.sm} {
    display: flex;
  }
`;

const ShoeGridMobile = styled.div`
  display: none;
  @media ${DEVICE.sm} {
    display: block;
  }
`;

const ShoeGridDesktop = styled.div`
  @media ${DEVICE.sm} {
    display: none;
  }
`;

const WrapperSpacer = styled.div`
  @media ${DEVICE.sm} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${DEVICE.sm} {
    justify-content: flex-end;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};

  @media ${DEVICE.sm} {
    display: none;
  }
`;

const MobileTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  display: none;

  @media ${DEVICE.sm} {
    display: block;
  }
`;

export default ShoeIndex;
