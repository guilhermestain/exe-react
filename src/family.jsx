import React from 'react'
import{ childrenWithProps } from './utils/reactutils'

export default props=>(
    <div>
        <h1>FAMILIA</h1>
        {childrenWithProps(props.children, props)}
    </div>
)