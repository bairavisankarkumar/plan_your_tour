document.getElementById("facebook").addEventListener("click",function(e){
e.preventDefault();
window.open("https://www.facebook.com","_blank");
})

document.getElementById("whatsapp").addEventListener("click",function(e){
    e.preventDefault();
    window.open("https://www.whatsapp.com","_blank");
})

document.getElementById("twitter").addEventListener("click", function (e) {
    e.preventDefault();
    window.open("https://www.twitter.com", "_blank");
});

document.getElementById("readBtn").onclick = function() {
    document.getElementById("extra").style.display = "block";
};
