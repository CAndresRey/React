import Square from "../Square/Square";

const Board = ({squares, onClick, turn, winningSquares }) => {
  const createSquares = values => (
    values.map( value => (
        <Square
            winner={winningSquares.includes(value)}
            turn={turn}
            onClick={() => onClick(value)}
            value={squares[value]}
            key={`square_${value}`}
        />
    ))
);
  return (
    <div classname="flex flex-col">
      <div classname="flex flex-row">{createSquares([0, 1, 2])}</div>
      <div classname="flex flex-row">{createSquares([3, 4, 5])}</div>
      <div classname="flex flex-row">{createSquares([6, 7, 8])}</div>
    </div>
  );
};
export default Board;
