import React, { Component } from 'react';


class TechStackItem extends Component {



    constructor(props) {
        super(props);
    
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
      }
    
      
      componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
      setWrapperRef(node) {
        this.wrapperRef = node;
      }

    
    
  
      handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
          this.wrapperRef.parentNode.childNodes.forEach(function (value) {
            
            value.contentEditable=false;
          });
        }
      } 

     handleClick = (e) => {
// 
        // e.currentTarget.contentEditable=true;
             e.currentTarget.contentEditable=false;


          
     }
      
      
      
 handleKeyPress = (event) => {
      
            if (event.which === 13) {
              var order=this.props.value.Order;
              var updatedText=this.props.skill.Tech.filter(p=>p.Order==order);
              
              updatedText[0].Name=event.currentTarget.innerText;
           
              var id=this.props.skill.Id;
              var updatedTechSkill={Name:this.props.skill.Name,Order:this.props.skill.Order,Tech:this.props.skill.Tech};
              this.props.saveCollectionIntoDb(id,updatedTechSkill,"update","Skills");
              event.currentTarget.contentEditable=false;
              event.preventDefault();
          }
              
              
              
              }


            
    

      





    render() {



               
    var ratingClass=this.props.value.Rating==3?'badge alert-success':'badge alert-warning';



return(

<span ref={this.setWrapperRef} onClick={this.handleClick} onKeyPress={this.handleKeyPress} class={ratingClass}>{this.props.value.Name}</span>


      
    )
      




}

}




export default TechStackItem;
