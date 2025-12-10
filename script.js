// console.log(Math.floor(Math.random()*6));
let gernarate = document.querySelector("#gernarate-otp");
let otpbox =document.querySelector("input");
let submit =document.querySelector("#validate-otp");
let msg= document.querySelector("#msg")
let otp;
           
gernarate.addEventListener("click",function(){  
 otp=Math.floor(Math.random()*1000000);
otpbox.value=otp;
})

 submit.addEventListener("click",function(){
let userotp=otpbox.value;
if(userotp==otp){
msg.style.color = "green";
msg.textContent="✔ Valid OTP";
}else{
 msg.style.color = "red";
msg.textContent="✔ Invalid OTP";
}
 })

