import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'

export default () => (
  <Layout>
		<Header headerText="Hi! I'm building a fake Gatsby site as part of a tutorial!" />
    <p>What do I like to do? Lots of course but definitely enjoy building websites.</p>
		<img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)