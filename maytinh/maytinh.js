var check = true;
var a;
var b;
var pheptoan;
function toanHang(number) {
    if (check) {
        a = number;
        check = false
    } else {
        b = number;
    }
}
function toanTu(o) {
    pheptoan = o;
};

function lamLai() {
    a = null;
    b = null;
    pheptoan = null;
    check = true
};
function thucHien(){
    switch (pheptoan) {
        case '+':
            document.write(a + b);
            break;
        case '-':
            document.write(a - b);
            break;
        case '/':
            document.write(a / b);
            break;
        case '*':
            document.write(a * b);
            break;
       
    }
    lamlai();
}

