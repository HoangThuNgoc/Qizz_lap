function getRPS(value) {
   
    var arrRPS = ['Rock', 'Paper', 'Scissors'];
    var s = arrRPS[Math.floor(Math.random() * arrRPS.length)];
    var c = arrRPS[value];
    console.log(arrRPS)
    if (c == s) {
        alert(`Máy: ${c}; Bạn: ${s};  Hòa`);
    } else if (c == 'Rock' && s == 'Scissors') {
        alert(`Máy: ${c}; Bạn: ${s};  Bạn thắng`);
    } else if (c == 'Rock' && s == 'Paper') {
        alert(`Máy: ${c}; Bạn: ${s};  Bạn thua`);
    } else if (c == 'Paper' && s == 'Rock') {
        alert(`Máy: ${c}; Bạn: ${s};  Bạn thắng`);
    } else if (c == 'Paper' && s == 'Scissors') {
        alert(`Máy: ${c}; Bạn: ${s};  Bạn thua`);
    } else if (c == 'Scissors' && s == 'Paper') {
        alert(`Máy: ${c}; Bạn: ${s};  Bạn thắng`);
    } else if (c == 'Scissors' && s == 'Rock') {
        alert(`Máy: ${c}; Bạn: ${s};  Bạn thua`);
    }
}
