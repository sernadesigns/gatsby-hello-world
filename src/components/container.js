import React from 'react'
import { container } from './container.module.css'

const Container = ({ children }) => (
	<div className={container}>{children}</div>
)

export default Container