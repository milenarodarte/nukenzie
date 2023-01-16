function ButtonFilter({ name, className, setArray, setFiltering, array }) {
  const handleButtonFilter = () => {
    if (name !== "Todos") {
      const newArray = array.filter((obj) => {
        return obj.type === name;
      });
      setFiltering(true);
      setArray(newArray);
    } else {
      setFiltering(false);
    }
  };
  return (
    <button className={className} onClick={handleButtonFilter}>
      {name}
    </button>
  );
}
export default ButtonFilter;
