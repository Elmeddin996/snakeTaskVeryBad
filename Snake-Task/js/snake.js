const snake = document.querySelector("#snake");


let rightLeftPosition = 0;
let topBottomPosition = 0;


document.addEventListener("keydown", (e) => {

    const { key: eKey } = e;

    if (eKey === "ArrowDown") {
        if (topBottomPosition >= 0) {
            topBottomPosition += 3;
            snake.style.top = `${topBottomPosition}px`;
        }
    }


    else if (eKey === "ArrowRight") {

        if (rightLeftPosition <= 534) {
            rightLeftPosition += 3;
            snake.style.left = `${rightLeftPosition}px`;
        }
    }

    else if (eKey === "ArrowLeft") {
        if (rightLeftPosition >= 0) {
            rightLeftPosition -= 3;
            snake.style.left = `${rightLeftPosition}px`;
        }
    }

    else if (eKey === "ArrowUp") {
        if (topBottomPosition <= 387 && topBottomPosition > 0) {
            topBottomPosition -= 3;
            snake.style.top = `${topBottomPosition}px`;
        }
    }
})