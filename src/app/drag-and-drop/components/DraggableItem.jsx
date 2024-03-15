
// // DraggableItem.js
// import React from 'react';
// import { useDrag, useDrop } from 'react-dnd';

// const DraggableItem = ({ id, index, onDrop, children }) => {
//   const [{ isDragging }, drag] = useDrag({
//     type: 'ITEM',
//     item: { id, index },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   const [, drop] = useDrop({
//     accept: 'ITEM',
//     hover: (item) => {
//       if (item.index !== index) {
//         onDrop(index, item.id);
//         item.index = index;
//       }
//     },
//   });

//   return (
//     <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
//       {children}
//     </div>
//   );
// };

// export default DraggableItem;
