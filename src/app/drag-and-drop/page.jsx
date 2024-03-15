// // App.js
// import React from 'react';
// import {SortableList} from "../drag-and-drop/components/SortableList"

// const App = () => {
//   return (
//     <div>
//       <h1>Sortable List Example</h1>
//       <SortableList />
//     </div>
//   );
// };

// export default App;



"use client"



import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemType = 'ITEM';

const Item = ({ id, text, index, moveItem }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity }} className="item ring-1 ring-green-400 p-2">
      {text}
    </div>
  );
};

const SortableList = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
  ]);

  const moveItem = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(dragIndex, 1);
      newItems.splice(hoverIndex, 0, dragItem);
      return newItems;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="sortable-list ">
        {items.map((item, index) => (
          <Item key={item.id} id={item.id} text={item.text} index={index} moveItem={moveItem} />
        ))}
      </div>
    </DndProvider>
  );
};

export default SortableList;
