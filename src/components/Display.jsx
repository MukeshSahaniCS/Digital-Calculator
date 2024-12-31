function Display({ calVal }) {
  return (
    <>
      <input className="display" type="text" value={calVal} readOnly />
    </>
  );
}
export default Display;
