import React, { FC } from 'react';

import classes from './List.module.scss';

interface ListProps {
  items            : any[],
  renderItem       : Function,
  className       ?: string,
  emptyText       ?: string,
}

const List: FC<ListProps> = ({ items, renderItem, className, emptyText }) => {
  const listClasses = [classes.list];
  if(className) {
    listClasses.push(className);
  }

  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <li key={item?.id || index}>
          {renderItem(item)}
        </li>
      )
    });
  }

  const renderList = () =>  <ul className={listClasses.join(' ')}>{renderItems()}</ul>

  return items.length > 0 ? renderList() : <div>{emptyText}</div>
}

export default List;
