import React from 'react';
import Welcome from './Welcome';
import Info from './Info';

class Main extends React.Component{
    render() { 
        return(
        <main id="wrapper">
            <Welcome/>
            <Info/>
        </main>
        );
    }
}
export default Main;