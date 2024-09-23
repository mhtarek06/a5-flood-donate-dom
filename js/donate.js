document.getElementById("donate-noa").addEventListener("click", function(){
  const inputAmount = getInputAmountById("donate-noa");
  let totalBalance = getTotalAmountById("donate-noa");
  console.log(inputAmount, ' ', totalBalance);
})
document.getElementById("donate-feni").addEventListener("click", function(){
  const inputAmount = getInputAmountById("donate-feni");
  const totalBalance = getTotalAmountById("donate-feni");
  console.log(inputAmount, ' ', totalBalance);
})
document.getElementById("donate-qouta").addEventListener("click", function(){
  const inputAmount = getInputAmountById("donate-qouta");
  const totalBalance = getTotalAmountById("donate-qouta");
  console.log(inputAmount, ' ', totalBalance);
})
