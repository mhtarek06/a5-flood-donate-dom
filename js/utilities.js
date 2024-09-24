let amount = 0;
function getInputAmountById(id) {
  const inputFieldId = `${id}-amount`;
  amount = parseFloat(document.getElementById(inputFieldId).value);
  const userBalance = parseFloat(
    document.getElementById("my-balance").innerText
  );

  if (isNaN(amount) || userBalance < amount || amount < 0 || amount === 0) {
    showFailureModal("Error","Something Went Wrong Please Try Again!", "Failed to donate");
    return;
  } 
  showFailureModal("Congrats!", "You Have Donated For Humankind", "Successfully");
  
  updateUserBalance(amount);
  getTotalAmountById(id);
  document.getElementById(inputFieldId).value = "";
  
}
function getTotalAmountById(id) {
  const inputFieldId = `${id}-balance`;
  const element = document.getElementById(inputFieldId);
  let totalBalance = parseFloat(element.innerText);
  const newBalance = totalBalance + amount;
  element.innerText = newBalance;
  donatedFor(id);
}

function updateUserBalance(amount) {
  const myBalance = document.getElementById("my-balance");
  const myBalanceParse = parseFloat(myBalance.innerText);
  const newBalance = myBalanceParse - amount;
  myBalance.innerText = newBalance;
}

function donatedFor(name) {
  const inputFieldId = `${name}-for`;
  const STATIC_STRING = "Taka is Donated for";
  let newTitle = "Taka is Donated for";
  if (inputFieldId === "donate-qouta-for") {
    newTitle = `${amount} ${STATIC_STRING} Aid for Injured in the Quota Movement, Bangladesh`;
  } else if (inputFieldId === "donate-feni-for") {
    newTitle = `${amount} ${STATIC_STRING} Flood Relief in Feni,Bangladesh`;
  } else if (inputFieldId === "donate-noa-for") {
    newTitle = `${amount} ${STATIC_STRING} Flood at Noakhali, Bangladesh`;
  }
  const div = document.createElement("div");
  div.classList.add("bg-base-100", "border-2", "rounded-xl", "p-4");
  div.innerHTML = `
  <h3 id="donated-money-history" class="font-bold text-xl">${newTitle}</h3>
  <p id="donated-time" class="text-gray-500 text-base">Date: ${new Date()}</p>
  `;
  const parentElement = 
  document.getElementById("history-container"); 
  parentElement.insertBefore(div, parentElement.firstChild);
}

function showFailureModal(greeting, msg, status) {
  const div = document.createElement("div");
  div.innerHTML = `
    <dialog id="donation-failure-modal" class="modal flex justify-center">
      <div class="modal-box">
       <h3 class="text-center text-xl font-bold">${greeting}</h3>
        <img src="./assets/coin.png" class="mx-auto mt-4 w-8 h-8" alt="" />
        <p class="text-center py-4">${msg}</p>
         <h3 class="text-center text-lg font-bold text-black">${status}</h3>
        <div class="modal-action flex justify-center">
          <form method="dialog">
            <button class="btn">Close Confirmation</button>
          </form>
        </div>
      </div>
    </dialog>
  `;
  document.body.appendChild(div);
  const modal = document.getElementById("donation-failure-modal");
  modal.showModal();

  modal.addEventListener('close', function(){
    div.remove();
  })
}
