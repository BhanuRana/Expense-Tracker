import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        class="delete-btn"
      >
        x
      </button>
    </li>
  );
}
