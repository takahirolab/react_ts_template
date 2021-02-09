import React from "react";
import Button from"@Components/Button"


export enum PositionX {
  left,
  mid,
  right = "right",
}

type Props ={
  position?: PositionX;
}

export const Home: React.FC = () => {
  return <PileList />;
};

const PileList = ( { position }: Props):JSX.Element => {
position = PositionX.right
console.log(position)

  return (
    <>
      <h2>fdfafsfsfds</h2>
      <h2>fdfafsfsfds</h2>
      <h2>fdfafsfsfds</h2>
      <h2>fdfafsfsfds</h2>
      <h2>fdfafsfsfds</h2>
      <Button



       type="red"
       text="未完了に戻す"
       style={{ width: "124px", height: "38px", marginRight: "5px" }}
       />
    </>
  );
};

