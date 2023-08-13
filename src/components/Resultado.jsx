import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado } = useClima();

  const { name, main } = resultado;

  //Transformar a grados centigrados los grados Kelvin
  const KELVIN = 273.15;

  return (
    <div className="contenedor clima">
      <h2>El clima de {name} es:</h2>
      <p>
        Temp: {parseInt(main.temp - KELVIN)}
        <span>&#x2103;</span>
      </p>
      <div className="temp_min_max">
        <p>
          Mín: {parseInt(main.temp_min - KELVIN)}
          <span>&#x2103;</span>
        </p>
        <p>
          Máx: {parseInt(main.temp_max - KELVIN)}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Resultado;
