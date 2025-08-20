// Hardcoded Admin Credentials
const ADMIN_EMAIL = "blessing75099@gmail.com";
const ADMIN_PASSWORD = "fla098765#";

// Dummy Wallets
let btcWallet = 0.00;
let solWallet = 0.00;

// Dummy NFT purchases
const nftData = [
  { title: "Bored Ape Yacht Club #9823", price: "$120,000", img: "https://i.seadn.io/gae/ape.png?auto=format&w=500" },
  { title: "CryptoPunk #4451", price: "$95,000", img: "https://i.seadn.io/gae/punk.png?auto=format&w=500" },
  { title: "Azuki #204", price: "$75,000", img: "https://i.seadn.io/gae/azuki.png?auto=format&w=500" },
];

// Login Handler
function loginAdmin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".dashboard").style.display = "block";
    loadNFTs();
    updateWallets();
  } else {
    alert("Invalid login credentials");
  }
}

// Logout
function logoutAdmin() {
  document.querySelector(".dashboard").style.display = "none";
  document.querySelector(".login-container").style.display = "flex";
}

// Load Dummy NFTs
function loadNFTs() {
  const grid = document.querySelector(".nft-grid");
  grid.innerHTML = "";
  nftData.forEach(nft => {
    const card = document.createElement("div");
    card.classList.add("nft-card");
    card.innerHTML = `
      <img src="${nft.img}" alt="${nft.title}">
      <div class="info">
        <h3>${nft.title}</h3>
        <p>Bought for ${nft.price}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Update Wallet Balances
function updateWallets() {
  document.getElementById("btc-balance").innerText = btcWallet.toFixed(3) + " BTC";
  document.getElementById("sol-balance").innerText = solWallet.toFixed(3) + " SOL";
}

// Fund Wallets with "realistic demo money"
function fundWallet(type) {
  let amount = prompt(`Enter amount to add to ${type} wallet:`);

  if (amount && !isNaN(amount)) {
    if (type === "BTC") {
      btcWallet += parseFloat(amount);
    } else if (type === "SOL") {
      solWallet += parseFloat(amount);
    }
    updateWallets();
    alert(`${amount} ${type} successfully added to wallet!`);
  } else {
    alert("Invalid amount.");
  }
}
