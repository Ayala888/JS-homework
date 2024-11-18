let soz1 = prompt("Birinshi soz engiz")
let soz2 = prompt("Ekinshi soz engiz")

function compareWords(soz1, soz2) {
    if(soz1.toLowerCase() == soz2.toLowerCase()){
        return "Сөздер бірдей"
    }else{
        return "Сөздер әртүрлі"
    }   
}

alert(compareWords(soz1, soz2));