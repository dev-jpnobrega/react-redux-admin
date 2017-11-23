import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';

import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';

import styles from './style';

const LeftDrawer = (props) => {
  let { navDrawerOpen } = props;

  return (
    <Drawer
      docked={true}
      open={navDrawerOpen}  style={{backgroundColor: 'white'}}>
        <div style={styles.logo}>
       
        
        </div>
        <div style={styles.avatar.div}>
          <Avatar src={props.photo}
                  size={50}
                  style={styles.avatar.icon}/>
          <span style={styles.avatar.span}>{props.username}</span>
        </div>
        <div style={{backgroundColor: 'white'}}>
            <List >
                { props.menus.map((menu, index) =>
                    <ListItem            
                      key={index}
                      style={styles.menuItem}
                      primaryText={menu.text}
                      leftIcon={menu.icon}
                      initiallyOpen={true}
                      primaryTogglesNestedList={true}
                      containerElement={ !menu.subMenu ? <Link to={menu.link}/> : <div/> }
                      nestedItems={ menu.subMenu && menu.subMenu.map( (item, idx) => (
                        <ListItem            
                          key={idx}    
                          style={styles.menuItem}                   
                          primaryText={item.text}
                          leftIcon={item.icon}
                          containerElement={ <Link to={item.link}/> }
                        />
                      ))
                      }
                    />
                  )
                }
            </List>
        </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
  photo: PropTypes.string
};

export default LeftDrawer;
