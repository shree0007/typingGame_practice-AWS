(()=>{const e=document.getElementById("quoteDisplay"),t=document.getElementById("quoteInput"),n=document.getElementById("timer");async function c(){const c=await fetch("http://api.quotable.io/random").then((e=>e.json())).then((e=>e.content));e.innerHTML="",c.split("").forEach((t=>{const n=document.createElement("span");n.innerText=t,e.appendChild(n)})),t.value=null,n.innerText=0,o=new Date,setInterval((()=>{timer.innerText=Math.floor((new Date-o)/1e3)}),1e3)}let o;t.addEventListener("input",(()=>{const n=e.querySelectorAll("span"),o=t.value.split("");let r=!0;n.forEach(((e,t)=>{const n=o[t];null==n?(e.classList.remove("correct"),e.classList.remove("incorrect"),r=!1):n===e.innerText?(e.classList.add("correct"),e.classList.remove("incorrect")):(e.classList.remove("correct"),e.classList.add("incorrect"),r=!1)})),r&&c()})),c()})();
//# sourceMappingURL=index.119e1600.js.map
