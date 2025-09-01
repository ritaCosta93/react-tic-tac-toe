export function Square({ value, onSquareClick }) {
  return (
    <button
      className='square border h-20 w-20 bg-neutral-100 hover:bg-pink-200 active:scale-95 focus:outline-none transition-transform'
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
