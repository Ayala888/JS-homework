let sum = 0;

function akshaEsep() {
    while(true){
        let soma = prompt("Соманы енгізіңіз (немесе 'стоп' деп жазыңыз):")
        if(soma == "стоп"){
            alert("Барлық соманың евродағы қосындысы: " + "€" + sum)
            break;

        }else{
            let valuta = prompt("Валютаны енгізіңіз (USD , KZT , EUR):")
            if("USD" == valuta){
                sum = sum + soma * 0.85
            } else if("KZT" == valuta){
                sum = sum + soma * 0.002
            } else if("EUR" == valuta){
                sum = sum + soma * 1
            }
        }
    }  
}

akshaEsep();