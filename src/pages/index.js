import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Layout from '../components/layout'

const Index = ({ data }) => (
  <Layout>
		<Header headerText="Hi! I'm building a fake Gatsby site as part of a tutorial!" />
    <p>What do I like to do? Lots of course but definitely enjoy building websites.</p>
		<p>{data.site.siteMetadata.tagline}</p>
		<img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)

export const query = graphql`
	query {
		site {
			siteMetadata {
				tagline
			}
		}
	}
`

export default Index
