import React from 'react';

class UserList  extends React.Component{

    constructor(props){
        super(props);
        this.state={posts:[]}
    }
    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.setState({posts:data.slice(0,3)}));
    }

    render(){
        return (
            <div className="container user-list">
              {
                
                this.state.posts.map(item => <div className="post" key={item.id}>{item.name}</div>)
              }
            </div>
        );
    }
}
export default UserList;