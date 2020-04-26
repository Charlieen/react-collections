import React from 'react';

const WithData = (WrappedComponent,dataSource) => {
    
    class DataComponent extends React.Component{
        constructor(props) {
            super(props);
            this.state={data:[]}
        }
        componentDidMount(){            
            setTimeout(() => {
                fetch(dataSource)
                .then(response => response.json())
                .then(data => this.setState({data:data.slice(0,5)}));  
            }, 1500);
        }
    
        render() {
            return this.state.data.length<1 ? (<h1>Loading...</h1>)
            :(<WrappedComponent data={this.state.data} {...this.props}/>)
          
        }
    }

    return DataComponent;

}

export default WithData;