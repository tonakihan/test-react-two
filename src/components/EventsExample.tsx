import React, {FC, useState} from "react";



const EventsExample: FC = () => {
  const [value, setVlaue] = useState<string>('');

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setVlaue(e.target.value);
  }
  function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    alert(value);
  }

  const [isDrag, setIsDrag] = useState<boolean>(false);

  function dragHandler(e: React.MouseEvent<HTMLDivElement>) {
  // Начато перетаскивание
    e.preventDefault();
    console.log('DRAG');
  }
  function dropHandler(e: React.MouseEvent<HTMLDivElement>) {
  // Что то кинули
    e.preventDefault(); 
    setIsDrag(false);
    console.log("ОООООООО!");
  }
  function leaveHandler(e: React.MouseEvent<HTMLDivElement>) {
  // Вышли за пределы
    e.preventDefault();
    setIsDrag(false);
  }
  function overHandler(e: React.MouseEvent<HTMLDivElement>) {
  // Над целью
    e.preventDefault();
    setIsDrag(true);
  }


  return(
    <div>
      <input value={value} onChange={changeHandler}></input>
      <button onClick={clickHandler}>Ok</button>
      <div 
        onDrag={dragHandler} 
        draggable 
        style={{background: "blue", width: "200px", height: "200px"}}
      ></div>
      <div 
        onDrop={dropHandler} 
        onDragLeave={leaveHandler}
        onDragOver={overHandler}
        style={{background: isDrag ? "black" : "green", width: "200px", height: "200px"}}
      ></div>
    </div>
  )
} 

export default EventsExample;