var fullimgbox = document.getElementById("fullimgbox");
var fullimg = document.getElementById("fullimg");
// let images=document.querySelectorAll("img")
// console.log(images)
function openfullimg(shivani){
    fullimgbox.style.display = "flex";
    fullimg.src = shivani;
}

function closefullimg(){
    fullimgbox.style.display = "none";
}