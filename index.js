import { ethers } from "ethers";

document.getElementById("app").innerHTML = `
<h1>Decode Raw Tx</h1>
<div>
  Input Raw Tx
</div>
`;
const form = document.getElementById("myForm");

form.addEventListener("submit", e => {
  e.preventDefault();
  const rawTx = document.getElementById("rawTx").value;
  const parsed = decodeRawTx(rawTx);
  const test = JSON.stringify(parsed, null, 2);

  document.getElementById("tx-details").textContent = test;
});

function decodeRawTx(rawTx) {
  return ethers.utils.parseTransaction(rawTx);
}
