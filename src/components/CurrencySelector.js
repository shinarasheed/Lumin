import React from "react";
import { useQuery } from "@apollo/client";

function CurrencySelector() {
  import { FETCH_CURENCY_QUERY } from "../queries/product";

  // const { data: currenciesData } = useQuery(FETCH_CURENCY_QUERY);

  // const handleChangeCurrency = (e) => {
  //   setCurrency(e.target.value);
  //   //run the fetch_query again
  //   console.log(e.target.value);
  // };

  return {
    /* <div>
        {currenciesData !== undefined && (
          <select onChange={(e) => handleChangeCurrency(e)}>
            {currenciesData.currency.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        )}
      </div> */
  };
}

export default CurrencySelector;
