var a = prompt("nhap so a");
var b = prompt("nhap so b");
var c = prompt("nhap phep tinh +,-,/,*");
switch (c) {
    case '+': alert(a+b);
        break;
    case ' -':
        alert(a - b);
        break;
    case '/':
        alert(a / b);
        break;
    case '*':
        alert(a*b);
        break;
    default:
        alert('ban nhap ko dung');
        break;
}