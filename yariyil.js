const basliklar = document.querySelectorAll(".baslik-1");
basliklar.forEach(function(eleman) {
    const ilkYuvarlak = eleman.querySelector(".yuvarlak");
    ilkYuvarlak.addEventListener("click", function() {
        const icerik = eleman.querySelector(".icerik");
        const ok = ilkYuvarlak.querySelector("i");
        if (icerik.style.display === "none" || icerik.style.display === "") {
            icerik.style.display = "block";
            ok.style.transform = "rotate(90deg)";
        } else {
            icerik.style.display = "none";
            ok.style.transform = "rotate(0deg)";
        }
    });
});