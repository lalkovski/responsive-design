import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useMenuItems } from "../../hooks/menuItems.hook";
import { useWpMetadata } from "../../hooks/wpMetadata.hook";

const createKey = ({ type, object_id }) => `${type}_${object_id}`

const MenuLink = ({ title, target, url }) => {
  const wpMetadata = useWpMetadata();

  if(url.startsWith('/') || url.startsWith(wpMetadata.url))
    return <Link to={url.replace(wpMetadata.url, '')}>{title}</Link>;

  if(url.startsWith('http'))
    return <a href={url} target={target}>{title}</a>

  return title;
}

const MenuItem = ({level = 2, ...item}) => {
  const { wordpress_children } = item;

  return (
    <>
      <MenuLink {...item} />
      {
        wordpress_children &&
        <ul className={`menu-level-${level}`}>
          {wordpress_children.map(child =>
            <li key={createKey({...child})} className="menu-item">
              <MenuItem {...child} level={3} />
            </li>
          )}
        </ul>
      }
    </>
  )
}

const Menu = ({ name }) => {
  const menus = useMenuItems();
  const menu = menus.find(m => m.name.toLowerCase() === name.toLowerCase());

  return (
    <nav id={`Menu_${name}`} className="menu-root">
      <ul className="menu-level-1">
        {
          menu &&
          menu.items.map(item =>
            <li key={createKey({...item})} className="menu-item" >
              <MenuItem {...item} />
            </li>
          )
        }
      </ul>
    </nav>
  )
}

Menu.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Menu;