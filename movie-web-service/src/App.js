import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [isChanged, setIsChanged] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState(0);
  const [amount, setAmount] = useState(0);
  const [changeToCoin, setChangeToCoin] = useState(0);
  const onChange = (e) => {
    setCoin(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('coin', coin);
    console.log('amount', amount);
    setChangeToCoin(amount / coin);
  };
  const handleInput = (e) => {
    setAmount(e.target.value);
  };
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setIsChanged(true);
      });
  }, []);
  useEffect(() => {
    setIsChanged(false);
  }, [changeToCoin]);
  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <select onChange={onChange}>
            <option>Select Coin!</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <div>
            <form onSubmit={onSubmit}>
              <label htmlFor="money">Enter Your Money : $</label>
              <input
                id="money"
                value={amount}
                type="number"
                placeholder="USD"
                onChange={handleInput}
              />
              <button>Change To Coin</button>
            </form>
          </div>
          {isChanged ? null : <h3>You can get {changeToCoin} coin</h3>}
        </>
      )}
    </div>
  );
}

export default App;
