let tlcothe=prompt("nhap trong lương cơ the");
let chieucao=prompt("nhap chieu cao");
let BMI=tlcothe/(chieucao*chieucao);
if(BMI<18.5){
alert("Thieu can")
}else if(18.5<BMI<24.99){
    alert("Binh thuong")
}else if(25<BMI<29.99){
 alert("thua can")
}else{
    alert("beo phi")
}
