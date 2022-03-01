const Starship = ({ dataShip }) => {
  return (
    <div>
      <h1>Starships</h1>
      <div>
        {dataShip.map((ships) => {
          return <h3>{ships.name}</h3>;
        })}
      </div>
    </div>
  );
};

export default Starship;
