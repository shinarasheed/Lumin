import { useQuery } from "@apollo/client";

import { FETCH_CURENCY_QUERY } from "../graphql/product";

function CurrencySelector({ setCurrency }) {
  const { data: currenciesData } = useQuery(FETCH_CURENCY_QUERY);

  const handleChangeCurrency = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="currencySelectContainer">
      {currenciesData !== undefined && (
        <select
          className="currencySelect"
          onChange={(e) => handleChangeCurrency(e)}
        >
          <option disabled>select currency</option>
          {currenciesData.currency.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
}

export default CurrencySelector;
