let san = +prompt("San zhaz")

for(let i = 1; i<=san; i++){
    if(san>=5){
        var kishisan = 5;
        var ulkensan = san - (san % 5);
        alert("Ең кіші 5-ке бөлінетін сан: " + kishisan)
        alert("Ең үлкен 5-ке бөлінетін сан: " + ulkensan)
    } else{
        alert("Еңгізген сан арасында 5-ке бөлінетін сан жоқ")
    }
}