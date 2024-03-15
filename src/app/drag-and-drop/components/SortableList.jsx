// // "use client"

// // // SortableList.js
// // import React, { useState } from 'react';
// // import { DndProvider } from 'react-dnd';
// // import { HTML5Backend } from 'react-dnd-html5-backend';
// // import DraggableItem from './DraggableItem';

// // const SortableList = () => {
// //   const [listOrder, setListOrder] = useState([1, 2, 3, 4, 5]);

// //   const handleDrop = (index, item) => {
// //     const updatedOrder = [...listOrder];
// //     updatedOrder.splice(index, 0, item);
// //     setListOrder(updatedOrder);
// //   };

// //   return (
// //     <DndProvider backend={HTML5Backend}>
// //       <div>
// //         {listOrder.map((item, index) => (
// //           <DraggableItem key={item} index={index} id={item} onDrop={handleDrop}>
// //             Item {item}
// //           </DraggableItem>
// //         ))}
// //       </div>
// //     </DndProvider>
// //   );
// // };

// // export default SortableList;





// "use client"


// // SortableList.js
// import React, { useState } from 'react';
// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';

// const ItemType = 'LIST_ITEM';

// const DraggableItem = ({ id, text, index, moveItem }) => {
//   const [, ref] = useDrag({
//     type: ItemType,
//     item: { id, index },
//   });

//   const [, drop] = useDrop({
//     accept: ItemType,
//     hover: (draggedItem) => {
//       if (draggedItem.index !== index) {
//         moveItem(draggedItem.index, index);
//         draggedItem.index = index;
//       }
//     },
//   });

//   return (
//     <div ref={(node) => ref(drop(node))} style={{ padding: '8px', border: '1px solid #ccc', marginBottom: '4px' }}>
//       {text}
//     </div>
//   );
// };

// const SortableList = () => {
//   const [items, setItems] = useState([
//     { id: 1, text: 'Item 1' },
//     { id: 2, text: 'Item 2' },
//     { id: 3, text: 'Item 3' },
//     // Add more items as needed
//   ]);

//   const moveItem = (fromIndex, toIndex) => {
//     const updatedItems = [...items];
//     const [movedItem] = updatedItems.splice(fromIndex, 1);
//     updatedItems.splice(toIndex, 0, movedItem);
//     setItems(updatedItems);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div>
//         {items.map((item, index) => (
//           <DraggableItem key={item.id} id={item.id} text={item.text} index={index} moveItem={moveItem} />
//         ))}
//       </div>
//     </DndProvider>
//   );
// };

// export default SortableList;

