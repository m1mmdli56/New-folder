const envelopeWrapper = document.querySelector(".envelope-wrapper");
const letter = document.querySelector(".letter");
const noBtn = document.getElementById("no-btn");
const noError = document.getElementById("no-error");
const buttons = document.getElementById("buttons");

document.addEventListener("click", (e) => {
    if (e.target.matches("#no-btn")) {
        return;
    }
    if (
        e.target.matches(".envelope") ||
        e.target.matches(".right-flap") ||
        e.target.matches(".left-flap") ||
        e.target.matches(".heart")
    ) {
        envelopeWrapper.classList.toggle("opened");
    } else if (e.target.matches(".envelope *")) {
        if (!letter.classList.contains("opened-letter")) {
            letter.classList.add("show-letter");
            setTimeout(() => {
                letter.classList.remove("show-letter");
                letter.classList.add("opened-letter");
            }, 500);
            envelopeWrapper.classList.add("disable-envelope");
        } else {
            letter.classList.add("closing-letter");
            envelopeWrapper.classList.remove("disable-envelope");
            setTimeout(() => {
                letter.classList.remove("closing-letter");
                letter.classList.remove("opened-letter");
            }, 500);
        }
    }
});

noBtn.addEventListener("click", function (e) {
    e.preventDefault();
    buttons.style.opacity = "0";
    setTimeout(() => {
        buttons.style.display = "none";
        noError.style.display = "block";
        noError.classList.remove("no-error");
        void noError.offsetWidth;
        noError.classList.add("no-error");
        noError.style.opacity = "1";
        setTimeout(() => {
            noError.style.opacity = "0";
            setTimeout(() => {
                noError.style.display = "none";
                buttons.style.display = "flex";
                setTimeout(() => {
                    buttons.style.opacity = "1";
                }, 10);
            }, 350);
        }, 2100);
    }, 200);
});
