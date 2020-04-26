import React, { Component } from 'react'
import WithData from '../withData';

const UserProfile =({data,name,email})=>(
    <div className="container">
    <h1>{name}</h1>
    <h1>{email}</h1>
    Posts:
    {
     data.map(item => <div className="post" key={item.id}>{item.name}</div>)
    }
</div>
)  
    

export default  WithData(UserProfile,'https://jsonplaceholder.typicode.com/users');
