let amount = 0;
function getInputAmountById(id) {
  const inputFieldId = `${id}-amount`;
  amount = parseFloat(document.getElementById(inputFieldId).value);
  if(isNaN(amount)){
    alert('Failed to donate.');
    return;
}
 updateUserBalance(amount)
  // return amount;
}
function getTotalAmountById(id) {
  const inputFieldId = `${id}-balance`;
  const element = document.getElementById(inputFieldId); 
  let totalBalance = parseFloat(element.innerText);
  const newBalance = totalBalance + amount;
  element.innerText = newBalance;
  return newBalance;
}

function updateUserBalance(amount) {
  const myBalance = document.getElementById("my-balance");
  const myBalanceParse = parseFloat(myBalance.innerText);
  if(isNaN(amount)){
    alert('Failed to donate.');
    return;
}
  const newBalance = myBalanceParse - amount;
  myBalance.innerText = newBalance;
}
