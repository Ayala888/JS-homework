let name = prompt("Студент атын жаз:")
let language = prompt("Студент қай тілде сөйлейді? (kazakh/english/russian")


function amandasyKazakh(language) {
    return "Сәлем " + name + "! Қалың қалай?"
}

function amandasyEnglish(language) {
    return "Hello " + name + "! How are you?"
}

function amandasyRussian(language) {
    return "Привет " + name + "! Как дела?"
}


function amandasy(name, language) {
    if("kazakh" == language){
        return amandasyKazakh(language)
    }else if("english" == language){
        return amandasyEnglish(language)
    }else if("russian" == language){
        return amandasyRussian(language)
    }else{
        return "Тек kazakh, english, russian таңдаңыз!"
    } 
}

alert(amandasy(name, language));