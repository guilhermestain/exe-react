import React from 'react'
import ReactDOM from 'react-dom'
import Member from './member';
import Family from './family';
import ChildrenWithProps from './utils/reactutils'

ReactDOM.render(
    <Family lastName="Stain">
        <Member name="Guilherme "/>
        <Member name="Gustavo "/>
        <Member name="Sheila "/>
    </Family>
, document.getElementById('root'))