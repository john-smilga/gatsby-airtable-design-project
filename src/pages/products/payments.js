import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import { Link } from "gatsby"
const Payments = props => {
  const path = props.location.pathname.slice(1)
  return (
    <Layout>
      <Wrapper>
        <div>
          <h1>{path}</h1>
          <Link to="/" className="btn">
            home
          </Link>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  margin-top: -5rem;
  background: var(--clr-primary-8);
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;

  div {
    text-align: center;
    color: var(--clr-white);
  }
  h1 {
    font-size: 2rem;
    color: var(--clr-primary-5);
    margin-bottom: 1.5rem;
  }
  @media (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }
  }
`

export default Payments
