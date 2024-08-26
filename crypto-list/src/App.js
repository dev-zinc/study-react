 import { useState, useEffect } from "react";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(0);
  
  function parsedValue() {
    let coin = coins[index];
    let price = coin.quotes.USD.price;
    let parsedValue = value / price;

    return parsedValue + " " + coin.symbol;
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  
  const onSelect = (event) => {
    let value = event.target.value;
    setIndex(value);
  };
  
  const onChange = (event) => {
    let value = event.target.value;
    setValue(value)
  }

  return (
    <div>
      <h1>Coins ({coins.length})</h1> 
      {
        isLoading 
          ? <strong>Loading...</strong> 
          : <select onChange={onSelect}>
              {
                coins.map((coin) => (
                  <option key={coin.id} value={coins.indexOf(coin)}>
                    {coin.name} ({coin.symbol})
                  </option>
                ))
              }
            </select>
      }
      <input type="text" onChange={onChange} placeholder="type your USD..."/>
      <hr />
      {coins.length > index ? <h3>{parsedValue()}</h3> : null}
    </div>
  );
}

export default App;
