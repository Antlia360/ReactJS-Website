import React, {Component} from 'react';
import Header from '../Common/Header';

class Home extends Component {
    render(){
        return(
            <div>
                <Header 
                    title="Welcome to Our Studio!"
                    subtitle="TT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    
                />
            </div>


        )
    }
}

export default Home;