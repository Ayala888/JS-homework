// Айнымалыларды жасау
let name = "Али";          
let ade = 25;               
let isStudent = true;       

// Консолға айнымалыларды және олардың типтерін шығару
console.log("Аты:" + name, "| Типі:" + typeof name);
console.log("Жасы:" + ade, "| Типі:" + typeof ade);
console.log("Студент пе?:" + isStudent, "| Типі:" + typeof isStudent);

// Типті өзгерту (Type Coercion)
ade = ade.toString();       

// Жаңа типті консолға шығару
console.log("Жасы (жол ретінде):" + ade, "| Типі:" + typeof ade);