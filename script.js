
const btn = document.getElementById("btn");
const h1 = document.getElementById("h1");

btn.addEventListener("click" , ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
       const lattitude = position.coords.latitude;
       const longitude = position.coords.longitude;
       h1.textContent = `lattitude = ${lattitude} longitude = ${longitude}`
    })
})
