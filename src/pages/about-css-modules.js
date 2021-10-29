import React from 'react'
import { user, avatar, description, username, excerpt } from './about-css-modules.module.css'
import Container from '../components/container'

const User = props => (
	<div className={user}>
		<img src={props.avatar} className={avatar} alt="" />
		<div className={description}>
			<h2 className={username}>{props.username}</h2>
			<p className={excerpt}>{props.excerpt}</p>
		</div>
	</div>
)

const AboutCSSModules = () => (
	<Container>
		<h1>About CSS Modules</h1>
		<p>CSS Modules are cool</p>
		<User
			username="Jane Doe"
			avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
			excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
		/>
		<User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
	</Container>
)

export default AboutCSSModules