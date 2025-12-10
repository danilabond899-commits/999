let tg = window.Telegram.WebApp;
tg.expand();

document.getElementById("btn1").addEventListener("click", () => {
    tg.sendData(JSON.stringify({
        name: "Dior Sauvage",
        price: "5200 ₽"
    }));
    tg.close();
});

document.getElementById("btn2").addEventListener("click", () => {
    tg.sendData(JSON.stringify({
        name: "Chanel Bleu",
        price: "6100 ₽"
    }));
    tg.close();
});
