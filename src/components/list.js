import React from 'react';

const List = ({title, list}) => {
  return (
    <div>
      <h1 className='new'>
        {title}
      </h1>
      <ul>
       {list.map((item) => (
         <li key={item.id}>{item.name}</li>
       ))}
      </ul>
    </div>
  )
}

export default List;