import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



import Layout from '../hoc/Layout/Layout';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import Aux from '../hoc/_Aux/_Aux';
import {  history } from '../redux/store'; //new redux

import MainPage from './mainpage/MainPage';






class App extends Component {

  constructor() {
    super();

    
 
    this.state = {
   
      

    };
  }


  navigateToMainPage=()=>
  {
  //   const { locale } = this.props;
  //  this.props.hideSideDrawerHandler();
    history.push(`/`);
  }

  navigateToAccount=()=>
  {
    

  }



  navigateToFavorites=()=>
  {
    
    
  }





 


  componentDidMount(){
    // document.title = title;
  }

  componentWillMount() {
 


}



  render () {
    





    return (
      <Aux>
      <div>
   
        <Layout 

         {...this.props}>



   
          <Switch>
         
          <Route path={`/`} exact  component={MainPage} />
          
         

    <Redirect to="/" />
        </Switch>
        
          </Layout>
         
      

      
      </div>
      </Aux>
    );
  }
}


// export default App;


function mapStateToProps(state) {
	return { 


  }
  }


const mapDispatchToProps =dispatch=>
{
 
return {
   

  };
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))

