import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../_Aux/_Aux';
import Header from '../../components/header/Header';



// firebase.initializeApp({
//     apiKey: "AIzaSyDduxLP3bGrf9sCRGgKGS6n3FHXKkcUIbY",
//     authDomain: "ratechannels.firebaseapp.com"
//   })

//   const facebookProvider = new firebase.auth.FacebookAuthProvider();
//   const googleProvider = new firebase.auth.GoogleAuthProvider();

class Layout extends Component {
    constructor(props) {
        super(props)
  
      }




 





    
    render () {

       

        return (
            <Aux>

      


              {/* <Header/> */}
            
                    {this.props.children}
            
              
                
            </Aux>
        )
    }
}



function mapStateToProps(state) {
	return { 
  

  }
  }


const mapDispatchToProps =dispatch=>
{
 
return {

    
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(Layout)

