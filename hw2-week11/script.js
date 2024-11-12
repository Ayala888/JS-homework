let san = +prompt("Сан еңгіз")

for(let i = 1; i<=san; i++){
    if( i % 3 == 0 && i % 5 == 0){
        console.log("3-ке және 5-ке қалдықсыз бөлінетін сан: " + i)
    }     
}

for(let i = 1; i<=san; i++){
    if (i % 3 == 0 && i % 5 == 0 && i % 2 ==0) {
        console.log(i + " саны 3-ке және 5-ке қалдықсыз бөлінеді және жұп сан -> BREAK!")
        break;
    }
}