import React, { Component, Fragment } from 'react';
import './menu.css';
import menuList  from './menuList';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    
  }
  render() { 
    return ( 
      <div className='menu-outer-container'>
        <div className='menu-slider-container'>
          {
            menuList.map((category, index)=>{
              return (
                <div key={`category-${index}`} className="menu-category-container">
                  <div className="menu-category-title">{category.categoryName}</div>
                  <div className='menu-category-plates-container'>
                    {
                      category.items.map((plate, i) => {
                        return (
                          <div key={i} className="menu-category-plate">
                            <div className="menu-category-plate-title">{plate.name}</div>
                            <div className="menu-category-plate-description">{plate.description}</div>
                            <div className="menu-category-plate-price">{plate.price}</div>
                        </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
     );
  }
}
 
export default Menu;