import React from 'react';
import NavigationItems from './NavigationItems';
import Backdrop from '../UI/Backdrop/Backdrop';
import Aux from '../../hoc/_Aux/_Aux';
import  './SideDrawer.css';
const SideDrawer = ( props ) => {


    // let attachedClasses = [classes.SideDrawer, classes.Close];
    // if (props.showSideDrawer) {
    //     attachedClasses = [classes.SideDrawer, classes.Open];
    // }

 
 

    return (
        <Aux>
              <Backdrop Transparent={true} show={props.show} clicked={props.closed}/>
            
            <div className={props.show?"SideDrawer Open":"SideDrawer Close"} 
            
            style={{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        WebkitAnimation:'modalFadeRightToLeft .4s',
                        animation: 'modalFadeRightToLeft .4s',
                   

                        opacity: props.show ? '1' : '0'
         
                    }}

            
            >
             
            {props.children}
            </div>
        </Aux>
    );
};

export default SideDrawer;