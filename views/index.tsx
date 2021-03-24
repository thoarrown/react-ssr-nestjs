import React from "react";
import { Head } from "@react-ssr/nestjs-express";
import styled from "styled-components";
interface IndexProps {
  message: string;
}

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  min-height: 100vh;
`;

const Index = (props: IndexProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>An example of @react-ssr/nestjs-express</title>
      </Head>
      <p>{props.message}</p>
      <Wrapper>
        <a href="/about">Go to the about page 1 fd</a>
      </Wrapper>
    </React.Fragment>
  );
};

export default Index;
