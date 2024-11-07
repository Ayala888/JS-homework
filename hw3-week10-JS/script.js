let san = +prompt("0 ден 99-ға дейін санды еңгіз")

if(san<10){
    alert("Бірінші сан " + san)
}
else if(san>99 || san<0) {
    alert("Қате енгіздіңіз")
}
else{
    alert("Бірінші сан " + (san / 10) + '\n' + "Екінші сан " + (san % 10))
}