let san1 = +prompt("Бірінші сан еңгіз")
let san2 = +prompt("Екінші сан еңгіз")
let san3 = +prompt("Үшінші сан еңгіз")

switch (true) {
    case san1>san2 && san1>san3:
        alert("Ең үлкен сан: " + san1)
        break;
    case san2>san1 && san2>san3:
        alert("Ең үлкен сан: " + san2)
        break;
    case san3>san2 && san3>san1:
        alert("Ең үлкен сан: " + san3)
        break;
    default:
        alert("Барлық сан тең немесе кейбір сандар бірдей")
        break;
}
