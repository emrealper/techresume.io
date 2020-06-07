import React, {Component} from 'react';
import {render} from 'react-dom';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import TechStackItem from './TechStackItem';
import arrayMove from 'array-move';



const SortableContainer = sortableContainer(({children}) => {
  return <dd className="techStackList">{children}</dd>;
});

const SortableItem = sortableElement(({value,skill,props}) => {

  
 return <TechStackItem  value={value} skill={skill} {...props} />
  
});












class SortableSkill extends Component {
 



  onSortStart = ({node, index, collectionx}) => {
    
//     node.classList.add("dragging-item");

// node.contentEditable=true;
    
  };


  onSortEnd = ({oldIndex, newIndex}) => {
    

    if(oldIndex!=newIndex)
    {
   
    var sortedTech=arrayMove(this.props.skill.Tech, oldIndex, newIndex);
    var id=this.props.skill.Id;
    var name=this.props.skill.Name;
    var order=this.props.skill.Order;
    var _sortedTech=sortedTech.map((tech,i) => {
       var _tech={Name:tech.Name,Order:i+1,Rating:tech.Rating};
 return(
  _tech
    );
 });
 var sortedTechSkill={Name:name,Order:order,Tech:_sortedTech};


    this.props.saveCollectionIntoDb(id,sortedTechSkill,"update","Skills");
}
    
  };

  render() {
  
    var singleSkillGroupTitle= <dt >{this.props.skill.Name}</dt>;
    const items= this.props.skill.Tech.sort((a, b) => (a.Order > b.Order) ? 1 : -1);

    return (
      <React.Fragment>
      {singleSkillGroupTitle}
      <SortableContainer pressDelay={200} axis="x" onSortEnd={this.onSortEnd} onSortStart={this.onSortStart}>
        {items.map((value, index) => (
          <SortableItem  disabled={false} key={`item-${index}`} index={index} value={value} props={this.props} />
        ))}
      </SortableContainer>
      </React.Fragment>
    );
  }
}
 
export default SortableSkill;