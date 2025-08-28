const clickHeartBtns = document.getElementsByClassName("click-heart-btn");
const displayHeartCount = document.getElementById("display-heart-count");

const historyCard = document.getElementById("history-card");
const historyClearBtn = document.getElementById("history-clear-btn");

const clickCopyBtns = document.getElementsByClassName("click-copy-btn");
const displayCopyCount = document.getElementById("display-copy-count");

const clickCallBtns = document.getElementsByClassName("click-call-btn");
const coinForCalls = document.getElementById("coin-for-calls");
const cardCallDetails = document.getElementsByClassName("card-call-details");
const cardCallDetailsHeading = document.getElementsByClassName("card-call-details-heading");
const cardCallDetailsNumber = document.getElementsByClassName("card-call-details-number");


let heartLikeCount = 0;
for (const heartButton of clickHeartBtns) {
  heartButton.addEventListener("click", () => {
    ++heartLikeCount;
    displayHeartCount.innerText = heartLikeCount;
  })
}

for (const callBtn of clickCallBtns) {
  callBtn.addEventListener("click", () => {
    const cardDetails = callBtn.parentNode.parentNode;
    const cardCallDetailsHeading = cardDetails.querySelector(".card-call-details-heading").innerText;
    const cardCallDetailsNumber = cardDetails.querySelector(".card-call-details-number").innerText;
    let coins = parseInt(coinForCalls.innerText);

    if (coins >= 20) {
      coins = coins - 20;
      coinForCalls.innerText = coins;
      callAlertFun(cardCallDetailsHeading, cardCallDetailsNumber, coins);
      callHistoryFun(cardCallDetailsHeading, cardCallDetailsNumber);
    } else {
      alert(`❌আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ টি কয়েন প্রয়োজন!

💰আপনার বর্তমান কয়েন সংখ্যা: ${coins}`)
    }
  })
}

function callAlertFun(cardCallDetailsHeading, cardCallDetailsNumber, coins) {
  alert(`☎️ Calling ${cardCallDetailsHeading}  -  ${cardCallDetailsNumber} ...

💰আপনার বর্তমান কয়েন সংখ্যা: ${coins}`)
}


function callHistoryFun(cardCallDetailsHeading, cardCallDetailsNumber) {
  const div = document.createElement("div");
  div.innerHTML = `
            <div class="flex justify-between items-center my-4">
            <div>
              <h3 class="text-lg">${cardCallDetailsHeading}</h3>
              <p class="bg-[F2F2F2] text-lg">${cardCallDetailsNumber}</p>
            </div>
            <p class="text-lg">${new Date().toLocaleTimeString()}</p>
          </div>
  `
  historyCard.appendChild(div);

}

historyClearBtn.addEventListener("click", () => {
  historyCard.innerHTML = "";
})

let copyCount = 0;
for (const copyBtn of clickCopyBtns) {
  copyBtn.addEventListener("click", () => {
    const cardDetails = copyBtn.parentNode.parentNode;
    const cardCallDetailsHeading = cardDetails.querySelector(".card-call-details-heading").innerText;
    const cardCallDetailsNumber = cardDetails.querySelector(".card-call-details-number").innerText;

    ++copyCount;
    displayCopyCount.innerText = copyCount;

    navigator.clipboard.writeText(cardCallDetailsNumber)
      .then(() => {
        alert(`📋${cardCallDetailsHeading} এর নম্বর কপি হয়েছে: ${cardCallDetailsNumber}`);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  })

}