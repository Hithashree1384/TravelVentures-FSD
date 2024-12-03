
function toggleReadMore() {
    const moreText = document.getElementById("moreText");
    const btn = document.getElementById("readMoreBtn");
    
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btn.innerHTML = "Read Less"; 
    } else {
        moreText.style.display = "none";
        btn.innerHTML = "Read More";
    }
}
function tour(){
    alert("Please visit www.tourism.com");

}