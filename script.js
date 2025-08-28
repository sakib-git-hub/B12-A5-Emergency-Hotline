  //nav heart 
   document.getElementById("heart-one").addEventListener("click", function(){
  let navHeart = document.getElementById("heart-nav")
  let navHeartInner = navHeart.innerText
  let increaseHeart = Number(navHeartInner) + 1 
  navHeart.innerText = increaseHeart  
   }) 
   
   document.getElementById("heart-two").addEventListener("click", function() {
 let navHeart = document.getElementById("heart-nav")
 let navHeartInner = navHeart.innerText
 let increaseHeart = Number(navHeartInner) + 1
 navHeart.innerText = increaseHeart
})

document.getElementById("heart-three").addEventListener("click", function() {
 let navHeart = document.getElementById("heart-nav")
 let navHeartInner = navHeart.innerText
 let increaseHeart = Number(navHeartInner) + 1
 navHeart.innerText = increaseHeart
})

document.getElementById("heart-four").addEventListener("click", function() {
 let navHeart = document.getElementById("heart-nav")
 let navHeartInner = navHeart.innerText
 let increaseHeart = Number(navHeartInner) + 1
 navHeart.innerText = increaseHeart
})

document.getElementById("heart-five").addEventListener("click", function() {
 let navHeart = document.getElementById("heart-nav")
 let navHeartInner = navHeart.innerText
 let increaseHeart = Number(navHeartInner) + 1
 navHeart.innerText = increaseHeart
})


document.getElementById("heart-six").addEventListener("click", function() {
 let navHeart = document.getElementById("heart-nav")
 let navHeartInner = navHeart.innerText
 let increaseHeart = Number(navHeartInner) + 1
 navHeart.innerText = increaseHeart
})


document.getElementById("heart-seven").addEventListener("click", function() {
 let navHeart = document.getElementById("heart-nav")
 let navHeartInner = navHeart.innerText
 let increaseHeart = Number(navHeartInner) + 1
 navHeart.innerText = increaseHeart
})


document.getElementById("heart-eight").addEventListener("click", function() {
 let navHeart = document.getElementById("heart-nav")
 let navHeartInner = navHeart.innerText
 let increaseHeart = Number(navHeartInner) + 1
 navHeart.innerText = increaseHeart
})

document.getElementById("heart-nine").addEventListener("click", function() {
 let navHeart = document.getElementById("heart-nav")
 let navHeartInner = navHeart.innerText
 let increaseHeart = Number(navHeartInner) + 1
 navHeart.innerText = increaseHeart
})


//copy-btn
document.getElementById("copy-one").addEventListener("click", function() {
 let navCopy = document.getElementById("nav-copy")
 let navCopyInner = navCopy.innerText
 let increaseCopy = Number(navCopyInner) + 1
 navCopy.innerText = increaseCopy
})
document.getElementById("copy-one").addEventListener("click", () =>
navigator.clipboard.writeText(document.getElementById("national-num").innerText).then(()=>alert("Number copied: 999")));


document.getElementById("copy-two").addEventListener("click", function() {
 let navCopy = document.getElementById("nav-copy")
 let navCopyInner = navCopy.innerText
 let increaseCopy = Number(navCopyInner) + 1
 navCopy.innerText = increaseCopy
})
document.getElementById("copy-two").addEventListener("click", () =>
navigator.clipboard.writeText(document.getElementById("police-num").innerText).then(()=>alert("Number copied: 999")));


document.getElementById("copy-three").addEventListener("click", function() {
 let navCopy = document.getElementById("nav-copy")
 let navCopyInner = navCopy.innerText
 let increaseCopy = Number(navCopyInner) + 1
 navCopy.innerText = increaseCopy
})
document.getElementById("copy-three").addEventListener("click", () =>
navigator.clipboard.writeText(document.getElementById("fire-num").innerText).then(()=>alert("Number copied: 999")));

document.getElementById("copy-four").addEventListener("click", function() {
 let navCopy = document.getElementById("nav-copy")
 let navCopyInner = navCopy.innerText
 let increaseCopy = Number(navCopyInner) + 1
 navCopy.innerText = increaseCopy
})
document.getElementById("copy-four").addEventListener("click", () =>
navigator.clipboard.writeText(document.getElementById("ambulance-num").innerText).then(()=>alert("Number copied: 1994-999999")));

document.getElementById("copy-five").addEventListener("click", function() {
 let navCopy = document.getElementById("nav-copy")
 let navCopyInner = navCopy.innerText
 let increaseCopy = Number(navCopyInner) + 1
 navCopy.innerText = increaseCopy
})
document.getElementById("copy-five").addEventListener("click", () =>
navigator.clipboard.writeText(document.getElementById("help-num").innerText).then(()=>alert("Number copied:109")));


document.getElementById("copy-six").addEventListener("click", function() {
 let navCopy = document.getElementById("nav-copy")
 let navCopyInner = navCopy.innerText
 let increaseCopy = Number(navCopyInner) + 1
 navCopy.innerText = increaseCopy
})
document.getElementById("copy-six").addEventListener("click", () =>
navigator.clipboard.writeText(document.getElementById("anti-corrpt-num").innerText).then(()=>alert("Number copied: 106")));

document.getElementById("copy-seven").addEventListener("click", function() {
 let navCopy = document.getElementById("nav-copy")
 let navCopyInner = navCopy.innerText
 let increaseCopy = Number(navCopyInner) + 1
 navCopy.innerText = increaseCopy
})
document.getElementById("copy-seven").addEventListener("click", () =>
navigator.clipboard.writeText(document.getElementById("electricity-num").innerText).then(()=>alert("Number copied: 16216")));


document.getElementById("copy-eight").addEventListener("click", function() {
 let navCopy = document.getElementById("nav-copy")
 let navCopyInner = navCopy.innerText
 let increaseCopy = Number(navCopyInner) + 1
 navCopy.innerText = increaseCopy
})
document.getElementById("copy-eight").addEventListener("click", () =>
navigator.clipboard.writeText(document.getElementById("brac-num").innerText).then(()=>alert("Number copied: 16445")));


document.getElementById("copy-nine").addEventListener("click", function() {
 let navCopy = document.getElementById("nav-copy")
 let navCopyInner = navCopy.innerText
 let increaseCopy = Number(navCopyInner) + 1
 navCopy.innerText = increaseCopy
})
document.getElementById("copy-nine").addEventListener("click", () =>
navigator.clipboard.writeText(document.getElementById("railway-num").innerText).then(()=>alert("Number copied: 163")));


//call button
document.getElementById("call-one").addEventListener("click", function() {
 let navCoin = document.getElementById("nav-coin")
 let navCoinInner = navCoin.innerText
 let decreaseCoin = Number(navCoinInner) - 20
 navCoin.innerText = decreaseCoin
 
 if(navCoinInner >= 20) {
  alert("📞 Calling National Emergency Service 999...")
   let asideCardParent = document.getElementById("aside-items")
 let div = document.createElement("div")
 div.innerHTML=`<div class="w-[300px] mx-auto flex items-center justify-between my-3 p-3 gap-3 bg-[#FAFAFA] rounded-md">
  <div class="flex flex-col gap-1 whitespace-nowrap">
    <h3 class="text-[16px] font-semibold text-gray-800">
      National Emergency Number
    </h3>
    <p class="text-[14px] text-gray-600 text-left">
      999
    </p>
  </div>
  <div class="text-gray-500 text-[12px]">
    ${new Date().toLocaleTimeString()}
  </div>

</div>`
asideCardParent.appendChild(div)
 }
 if(navCoinInner < 20) {
  navCoin.innerText = 0
  alert("You don't have enough coins. You need at least 20 coins to make a call.")
 }
 

})


document.getElementById("call-two").addEventListener("click", function() {
 let navCoin = document.getElementById("nav-coin")
 let navCoinInner = navCoin.innerText
 let decreaseCoin = Number(navCoinInner) - 20
 navCoin.innerText = decreaseCoin
 
 if (navCoinInner >= 20) {
  alert("📞 Calling Police Helpline Number 999...")
    let asideCardParent = document.getElementById("aside-items")
 let div = document.createElement("div")
 div.innerHTML = `<div class="w-[300px] mx-auto flex items-center justify-between my-3 p-3 gap-3 bg-[#FAFAFA] rounded-md">
  <div class="flex flex-col gap-1 whitespace-nowrap">
    <h3 class="text-[16px] font-semibold text-gray-800">
      Police Helpline Number
    </h3>
    <p class="text-[14px] text-gray-600 text-left">
      999
    </p>
  </div>
  <div class="text-gray-500 text-[12px]">
    ${new Date().toLocaleTimeString()}
  </div>

</div>`
 asideCardParent.appendChild(div)
 }
 if (navCoinInner < 20) {
  navCoin.innerText = 0
  alert("You don't have enough coins. You need at least 20 coins to make a call.")
 }
 

})


document.getElementById("call-three").addEventListener("click", function() {
 let navCoin = document.getElementById("nav-coin")
 let navCoinInner = navCoin.innerText
 let decreaseCoin = Number(navCoinInner) - 20
 navCoin.innerText = decreaseCoin
 
 if (navCoinInner >= 20) {
  alert("📞 Calling Fire Service Number 999...")
   let asideCardParent = document.getElementById("aside-items")
 let div = document.createElement("div")
 div.innerHTML = `<div class="w-[300px] mx-auto flex items-center justify-between my-3 p-3 gap-3 bg-[#FAFAFA] rounded-md">
  <div class="flex flex-col gap-1 whitespace-nowrap">
    <h3 class="text-[16px] font-semibold text-gray-800">
      Fire Service Number
    </h3>
    <p class="text-[14px] text-gray-600 text-left">
      999
    </p>
  </div>
  <div class="text-gray-500 text-[12px]">
    ${new Date().toLocaleTimeString()}
  </div>

</div>`
 asideCardParent.appendChild(div)
 }
 if (navCoinInner < 20) {
  navCoin.innerText = 0
  alert("You don't have enough coins. You need at least 20 coins to make a call.")
 }
 
})


document.getElementById("call-four").addEventListener("click", function() {
 let navCoin = document.getElementById("nav-coin")
 let navCoinInner = navCoin.innerText
 let decreaseCoin = Number(navCoinInner) - 20
 navCoin.innerText = decreaseCoin
 
 if (navCoinInner >= 20) {
  alert("📞 Calling Ambulance Service 1994-999999...")
  let asideCardParent = document.getElementById("aside-items")
 let div = document.createElement("div")
 div.innerHTML = `<div class="w-[300px] mx-auto flex items-center justify-between my-3 p-3 gap-3 bg-[#FAFAFA] rounded-md">
  <div class="flex flex-col gap-1 whitespace-nowrap">
    <h3 class="text-[16px] font-semibold text-gray-800">
     Ambulance Service
    </h3>
    <p class="text-[14px] text-gray-600 text-left">
     1994-999999
    </p>
  </div>
  <div class="text-gray-500 text-[12px]">
    ${new Date().toLocaleTimeString()}
  </div>

</div>`
 asideCardParent.appendChild(div)
 }
 if (navCoinInner < 20) {
  navCoin.innerText = 0
  alert("You don't have enough coins. You need at least 20 coins to make a call.")
 }
  
})


document.getElementById("call-five").addEventListener("click", function() {
 let navCoin = document.getElementById("nav-coin")
 let navCoinInner = navCoin.innerText
 let decreaseCoin = Number(navCoinInner) - 20
 navCoin.innerText = decreaseCoin
 
 if (navCoinInner >= 20) {
  alert("📞 Calling Women & Child Helpline 109...")
   let asideCardParent = document.getElementById("aside-items")
 let div = document.createElement("div")
 div.innerHTML = `<div class="w-[300px] mx-auto flex items-center justify-between my-3 p-3 gap-3 bg-[#FAFAFA] rounded-md">
  <div class="flex flex-col gap-1 whitespace-nowrap">
    <h3 class="text-[16px] font-semibold text-gray-800">
      Women & Child Helpline
    </h3>
    <p class="text-[14px] text-gray-600 text-left">
      109
    </p>
  </div>
  <div class="text-gray-500 text-[12px]">
    ${new Date().toLocaleTimeString()}
  </div>

</div>`
 asideCardParent.appendChild(div)
 }
 if (navCoinInner < 20) {
  navCoin.innerText = 0
  alert("You don't have enough coins. You need at least 20 coins to make a call.")
 }
 
})


document.getElementById("call-six").addEventListener("click", function() {
 let navCoin = document.getElementById("nav-coin")
 let navCoinInner = navCoin.innerText
 let decreaseCoin = Number(navCoinInner) - 20
 navCoin.innerText = decreaseCoin
 
 if (navCoinInner >= 20) {
  alert("📞 Calling Anti-Corruption Helpline 106...")
   let asideCardParent = document.getElementById("aside-items")
 let div = document.createElement("div")
 div.innerHTML = `<div class="w-[300px] mx-auto flex items-center justify-between my-3 p-3 gap-3 bg-[#fafafa] rounded-md">
  <div class="flex flex-col gap-1 whitespace-nowrap">
    <h3 class="text-[16px] font-semibold text-gray-800">
     Anti-Corruption Helpline
    </h3>
    <p class="text-[14px] text-gray-600 text-left">
      106
    </p>
  </div>
  <div class="text-gray-500 text-[12px]">
    ${new Date().toLocaleTimeString()}
  </div>

</div>`
 asideCardParent.appendChild(div)
 }
 if (navCoinInner < 20) {
  navCoin.innerText = 0
  alert("You don't have enough coins. You need at least 20 coins to make a call.")
 }
 
})


document.getElementById("call-seven").addEventListener("click", function() {
 let navCoin = document.getElementById("nav-coin")
 let navCoinInner = navCoin.innerText
 let decreaseCoin = Number(navCoinInner) - 20
 navCoin.innerText = decreaseCoin
 
 if (navCoinInner >= 20) {
  alert("📞 Calling Electricity Helpline 16216...")
  let asideCardParent = document.getElementById("aside-items")
 let div = document.createElement("div")
 div.innerHTML = `<div class="w-[300px] mx-auto flex items-center justify-between gap-3 my-3 p-3 bg-[#fafafa] rounded-md">
  <div class="flex flex-col gap-1 whitespace-nowrap">
    <h3 class="text-[16px] font-semibold text-gray-800">
      Electricity Helpline
    </h3>
    <p class="text-[14px] text-gray-600 text-left">
    16216
    </p>
  </div>
  <div class="text-gray-500 text-[12px]">
    ${new Date().toLocaleTimeString()}
  </div>

</div>`
 asideCardParent.appendChild(div)
 }
 if (navCoinInner < 20) {
  navCoin.innerText = 0
  alert("You don't have enough coins. You need at least 20 coins to make a call.")
 }
  
})


document.getElementById("call-eight").addEventListener("click", function() {
 let navCoin = document.getElementById("nav-coin")
 let navCoinInner = navCoin.innerText
 let decreaseCoin = Number(navCoinInner) - 20
 navCoin.innerText = decreaseCoin
 
 if (navCoinInner >= 20) {
  alert("📞 Calling Brac Helpline 16445...")
  let asideCardParent = document.getElementById("aside-items")
 let div = document.createElement("div")
 div.innerHTML = `<div class="w-[300px] mx-auto flex items-center justify-between gap-3 my-3 p-3 bg-[#fafafa] rounded-md">
  <div class="flex flex-col gap-1 whitespace-nowrap flex-1">
    <h3 class="text-[16px] font-semibold text-gray-800 truncate">
      Brac Helpline
    </h3>
    <p class="text-[14px] text-gray-600 text-left">
      16445
    </p>
  </div>
 <div class="text-gray-500 text-[12px]">
    ${new Date().toLocaleTimeString()}
  </div>

</div>`
 asideCardParent.appendChild(div)
 }
 if (navCoinInner < 20) {
  navCoin.innerText = 0
  alert("You don't have enough coins. You need at least 20 coins to make a call.")
 }
  
})


document.getElementById("call-nine").addEventListener("click", function() {
 let navCoin = document.getElementById("nav-coin")
 let navCoinInner = navCoin.innerText
 let decreaseCoin = Number(navCoinInner) - 20
 navCoin.innerText = decreaseCoin
 
 if (navCoinInner >= 20) {
  alert("📞 Calling Bangladesh Railway Helpline 163...")
    let asideCardParent = document.getElementById("aside-items")
 let RailwayDiv = document.createElement("div")
 RailwayDiv.innerHTML = `<div class="w-[300px] mx-auto flex items-center justify-between my-3 p-3 gap-3 bg-[#fafafa] rounded-md">
  <div class="flex flex-col gap-1 whitespace-nowrap">
    <h3 class="text-[16px] font-semibold text-gray-800">
      Bangladesh Railway Helpline
    </h3>
    <p class="text-[14px] text-gray-600 text-left">
      163
    </p>
  </div>
  <div class="text-gray-500 text-[12px]">
    ${new Date().toLocaleTimeString()}
  </div>

</div>`
 asideCardParent.appendChild(RailwayDiv)
 } if(navCoinInner < 20) {
  navCoin.innerText = 0
  alert("You don't have enough coins. You need at least 20 coins to make a call.")
 }

})
document.getElementById("clear-btn").addEventListener("click", function(e){
   e.preventDefault()
   let asideCardParent = document.getElementById("aside-items");
   asideCardParent.innerHTML = "";
   
})