

// Close welcome banner on click

  const bubbleParent = document.querySelector('main');
  let bannerClosed = false;

  bubbleParent.addEventListener('click', closeBanner)

  function closeBanner() {
    if (event.target.className === "banner-close-button") {
      const welcomeBanner = document.getElementById('welcome-banner');
      welcomeBanner.classList.add('fade-out');
      setTimeout(hide, 750);
      function hide() {
        welcomeBanner.classList.add('hide');
      }
      bannerClosed = true;
    }
  }

// Open transaction modal when expense is logged

  bubbleParent.addEventListener('click', logExpense)

  function logExpense() {
    if (event.target.id === "log-expense-btn") {
      const expenseForm = document.getElementById('transactions-form');
      expenseForm.insertAdjacentHTML('beforeend', `<div class="logged-transaction-modal" id="logged-transaction-modal">
                <p>Your expense of $87 has been logged.</p>
                <span class="transactions-modal-close-btn" id="transactions-modal-close-btn">&times;</span>
              </div>`);
    }
  }

// Close transaction modal when close button is clicked

bubbleParent.addEventListener('click', closeTransactionModal)

function closeTransactionModal() {
  if (event.target.id === "transactions-modal-close-btn") {
    const modal = document.getElementById('logged-transaction-modal');
    modal.remove();
  }
}

// Toggle views for nav
  const dashboard = document.getElementById('dashboard-view')
  const transactions = document.getElementById('transactions-view')

  transactions.addEventListener('click', displayTransactionsView)

  function displayTransactionsView() {
    const pageContent = document.getElementById('main-content')
    transactions.classList.add("active-nav");
    dashboard.classList.remove("active-nav");
    pageContent.innerHTML = '';
    pageContent.innerHTML= `<div class="transactions-header">
      <div class="transactions-header-wrapper">
        <h1 class="page-title">Transactions</h1>
        <button class="inactive-button">OUTFLOW</button>
        <button class="inactive-button">INFLOW</button>
        <button>ALL</button>
      </div>
    </div>
    <section class="primary-content column white">
      <table class="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Payee</th>
            <th>Inflow</th>
            <th>Outflow</th>
          </tr>
          <tr>
            <td>Oct 25, 2019</td>
            <td>Target</td>
            <td>-</td>
            <td>$80.00</td>
          </tr>
          <tr>
            <td>Oct 25, 2019</td>
            <td>Express</td>
            <td>-</td>
            <td>$80.00</td>
          </tr>
          <tr>
            <td>Oct 25, 2019</td>
            <td>Paycheck</td>
            <td>-</td>
            <td>$80.00</td>
          </tr>
          <tr>
            <td>Oct 25, 2019</td>
            <td>Trader Joe's</td>
            <td>-</td>
            <td>$80.00</td>
          </tr>
          <tr>
            <td>Oct 25, 2019</td>
            <td>Shell</td>
            <td>-</td>
            <td>$80.00</td>
          </tr>
          <tr>
            <td>Oct 25, 2019</td>
            <td>Rent</td>
            <td>-</td>
            <td>$80.00</td>
          </tr>
          <tr>
            <td>Oct 25, 2019</td>
            <td>Hapa Sushi</td>
            <td>-</td>
            <td>$80.00</td>
          </tr>
          <tr>
            <td>Oct 25, 2019</td>
            <td>Pig Train</td>
            <td>-</td>
            <td>$80.00</td>
          </tr>
          <tr>
            <td>Oct 25, 2019</td>
            <td>RTD</td>
            <td>-</td>
            <td>$80.00</td>
          </tr>
          <tr>
            <td>Oct 25, 2019</td>
            <td>Hapa Sushi</td>
            <td>-</td>
            <td>$80.00</td>
          </tr>
          <tr>
            <td>Oct 25, 2019</td>
            <td>Pig Train</td>
            <td>-</td>
            <td>$80.00</td>
          </tr>
          <tr>
            <td>Oct 25, 2019</td>
            <td>RTD</td>
            <td>-</td>
            <td>$80.00</td>
          </tr>
        </thead>
      </table>
    </section>
    <section class="secondary-content column white">
      <form class="transactions-form" id="transactions-form">
        <h2>New Transaction</h2>
        <label for"type">Type of Transaction</label>
        <select name="type">
          <option value="outflow">Outflow</option>
          <option value="inflow">Inflow</option>
        </select>
        <label for"category">Category</label>
        <select name="category">
          <option value="groceries">Groceries</option>
          <option value="bills">Bills</option>
          <option value="fun-money">Fun Money</option>
          <option value="paycheck">Paycheck</option>
        </select>
        <label for"account-from">Account from</label>
        <select name="account-from">
          <option value="checking">Checking</option>
          <option value="savings">Expense</option>
          <option value="amazon-credit">Amazon Credit</option>
          <option value="southwest-credit">Southwest Credit</option>
        </select>
        <label for"payee">Payee</label>
        <input type="text" name="payee">
        <label for"outflow">Outflow</label>
        <input type="text" name="outflow">
        <label for"category">Inflow</label>
        <input type="text" name="category">
        <button type="button" id="log-expense-btn">Log Expense</button>
      </form>
    </section>`;
  }

  dashboard.addEventListener('click', displayDashboardView)

  function displayDashboardView() {
    const pageContent = document.getElementById('main-content')
    dashboard.classList.add("active-nav");
    transactions.classList.remove("active-nav");
    pageContent.innerHTML = '';
    if (bannerClosed === false) {
      pageContent.innerHTML= `<h1 class="page-title">Balancing Act</h1>
      <section class="primary-content column" id="primary-content">
        <div class="welcome-banner rounded-corners" id="welcome-banner">
          <h4>Welcome, nerd!</h4>
          <span class="banner-close-button" id="banner-close-btn">&times;</span>
        </div>
          <div class="row-space-between">
            <div class="dashboard-card column white rounded-corners">
              <h5>INCOME</H5>
              <p>$5,000.12</p>
            </div>
            <div class="dashboard-card column white rounded-corners">
              <h5>EXPENSES</H5>
              <p>$4,000.12</p>
            </div>
            <div class="dashboard-card column white rounded-corners">
              <h5>CREDIT SCORE</H5>
              <p>785</p>
            </div>
          </div>
        <h2 class="secondary-title">Accounts</h2>
        <button class="float-right">MANAGE ACCOUNTS</button>
        <div class="account row white">
          <img src="./assets/images/checking.svg">
          <p class="account-name">Wells Fargo</p>
          <p class="account-type">Checking</p>
        </div>
        <div class="account row white rounded-corners">
          <img src="./assets/images/savings.svg">
          <p class="account-name">Wells Fargo</p>
          <p class="account-type">Savings</p>
        </div>
        <div class="account row white rounded-corners">
          <img src="./assets/images/credit-card.svg">
          <p class="account-name">Amazon Credit</p>
          <p class="account-type">Credit Card</p>
        </div>
        <div class="account row white rounded-corners">
          <img src="./assets/images/credit-card.svg">
          <p class="account-name">Southwest Credit</p>
          <p class="account-type">Credit Card</p>
        </div>
      </section>
      <section class="secondary-content column white rounded-corners">
        <h2 class="transactions-label secondary-title">Recent Transactions</h2>
        <button class="transactions-button">NEW TRANSACTION</button>
        <table class="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Payee</th>
              <th>Inflow</th>
              <th>Outflow</th>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Target</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Express</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Paycheck</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Trader Joe's</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Shell</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Rent</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Hapa Sushi</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Pig Train</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>RTD</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
          </thead>
        </table>
      </section>`;
    } else if (bannerClosed === true) {
      pageContent.innerHTML= `<h1 class="page-title">Balancing Act</h1>
      <section class="primary-content column" id="primary-content">
          <div class="row-space-between">
            <div class="dashboard-card column white rounded-corners">
              <h5>INCOME</H5>
              <p>$5,000.12</p>
            </div>
            <div class="dashboard-card column white rounded-corners">
              <h5>EXPENSES</H5>
              <p>$4,000.12</p>
            </div>
            <div class="dashboard-card column white rounded-corners">
              <h5>CREDIT SCORE</H5>
              <p>785</p>
            </div>
          </div>
        <h2 class="secondary-title">Accounts</h2>
        <button class="float-right">MANAGE ACCOUNTS</button>
        <div class="account row white">
          <img src="./assets/images/checking.svg">
          <p class="account-name">Wells Fargo</p>
          <p class="account-type">Checking</p>
        </div>
        <div class="account row white rounded-corners">
          <img src="./assets/images/savings.svg">
          <p class="account-name">Wells Fargo</p>
          <p class="account-type">Savings</p>
        </div>
        <div class="account row white rounded-corners">
          <img src="./assets/images/credit-card.svg">
          <p class="account-name">Amazon Credit</p>
          <p class="account-type">Credit Card</p>
        </div>
        <div class="account row white rounded-corners">
          <img src="./assets/images/credit-card.svg">
          <p class="account-name">Southwest Credit</p>
          <p class="account-type">Credit Card</p>
        </div>
      </section>
      <section class="secondary-content column white rounded-corners">
        <h2 class="transactions-label secondary-title">Recent Transactions</h2>
        <button class="transactions-button">NEW TRANSACTION</button>
        <table class="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Payee</th>
              <th>Inflow</th>
              <th>Outflow</th>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Target</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Express</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Paycheck</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Trader Joe's</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Shell</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Rent</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Hapa Sushi</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>Pig Train</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Oct 25, 2019</td>
              <td>RTD</td>
              <td>-</td>
              <td>$80.00</td>
            </tr>
          </thead>
        </table>
      </section>`;
    }
  }
