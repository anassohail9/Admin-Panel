import React from 'react'
import './style.css'


const DropdownMenu = (props) => {
    return (
      
        <div className="dropdown">
          <div className="upArrow"></div>
          {props.firstMenu}
          <ul className="headerDropdownMenu">
            {
              props.menus && props.menus.map((item, index) =>
                <li key={index}>
                    <a onClick={(e) => {
                        e.preventDefault();
                        item.onClick && item.onClick()
                    }} 
                        href={item.href}>{item.label}
                    </a>
                </li>
              )
            }
          </ul>
        </div>
    );
  }

  export default  DropdownMenu ;