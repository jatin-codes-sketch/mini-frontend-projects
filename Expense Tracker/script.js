const balanceEl = document.querySelector(".balance-screen .price");
const incomeEl = document.querySelector(".income .price");
const expenseEl = document.querySelector(".expense .price");
const transList = document.querySelector(".trans-list");
const descInput = document.querySelector(".trans-description input");
const amountInput = document.querySelector(".trans-amount input");
const addBtn = document.querySelector(".add_transaction button");


let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// this is rupee formator
const rupeeFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
});


// update
function updateBalance() {
  let income = 0, expense = 0;

  transactions.forEach(t => {
    if (t.amount > 0) income += t.amount;
    else expense += Math.abs(t.amount);
  });

  balanceEl.textContent = rupeeFormatter.format((income - expense).toFixed(2));
  incomeEl.textContent = rupeeFormatter.format(income.toFixed(2));
  expenseEl.textContent = rupeeFormatter.format(expense.toFixed(2));
}




// Render transactions
function renderTransactions() {
  transList.innerHTML = "";

  transactions.forEach(t => {
    const li = document.createElement("li");
    li.classList.add("trans");

    li.innerHTML = `
      <span class="object">${t.desc}</span>
      <div class="detail">
        <span class="price">${rupeeFormatter.format(t.amount.toFixed(2))}</span>
        <i class="fa-solid fa-xmark"></i>
      </div>
    `;

    li.style.borderRight = t.amount > 0 ? "5px solid green" : "5px solid red";

    li.querySelector(".fa-xmark").addEventListener("click", () => {
      transactions = transactions.filter(item => item.id !== t.id);
      saveToLocalStorage();
      renderTransactions();
      updateBalance();
    });

    transList.appendChild(li);
  });
}

// Save in localStorage
function saveToLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Add transaction
addBtn.addEventListener("click", () => {
  const desc = descInput.value.trim();
  const amount = parseFloat(amountInput.value.trim());

  if (desc === "" || isNaN(amount)) {
    alert("Please enter valid description and amount");
    return;
  }

  const newTransaction = {
    id: Date.now(),
    desc,
    amount
  };

  transactions.push(newTransaction);
  saveToLocalStorage();
  renderTransactions();
  updateBalance();

  descInput.value = "";
  amountInput.value = "";
});

// Init
renderTransactions();
updateBalance();
