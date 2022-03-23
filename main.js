let $ = document.getElementById.bind(document);
/**
 * BT1
 * Tìm số nguyên dương nhỏ nhất sao cho:
 *     1 + 2 + ... + n > 10000
 * 
 */
var tong = 0;
var n = 0;

while(tong < 10000){
    n++;
    tong += n;
}
document.getElementById("soNguyenDuongNhoNhat").innerHTML = "Số nguyên dương nhỏ nhất sao cho 1 + 2 + ... + n > 10000 là: " + n;

/**
 * BT2: viết chương trình nhập vào 2 số x,n tính tổng
 *  S(n) = x + x^2 + x^3 + ... + x^n ( sử dụng vòng lặp và hàm)
 * 
 * - Đầu vào: x, n là 2 số người dùng nhập
 * 
 * - Xử lý:
 * B1: tạo hàm tính lũy thừa
 * B2: gán s = 0 là giá trị tổng ban đầu để tính cộng dồn
 * tạo i = 1, i giá trị lũy thừa 
 * B3: dùng do while tính tổng
 * 
 * - Đầu ra: in kết quả ra màn hình
 *  */


function tinhLuyThua(x, i){
    return Math.pow(x, i);
};


$("tinhTong").onclick = function(){
    var x = $("layX").value *1;
    var n = $("layN").value *1;
    var s = 0;
    var i = 1;

    do{
        s += tinhLuyThua(x, i);
        i++;
    }while(i <= n);


    $("ketQua").innerHTML = "Tổng là: " + s;
};

/**
 * BT3: Nhập vào n. Tính giai thừa 1*2*...n
 * 
 * - Đầu vào: người dùng nhập n
 * 
 * - Xử lý: 
 * B1: tạo i là biến đếm tăng từ 1 -> n
 * B2: tính ketQua lũy tiến bằng phép nhân
 * 
 * - Đầu ra: in kết quả ra màn hình
 */

$("tinhGiaiThua").onclick = function(){
    var n = $("layGiaiThua").value;
    var ketQua = 1;

    for(i = 1; i <= n; i++){
        ketQua *= i;
    };

    $("ketQuaGiaiThua").innerHTML = ketQua;
};

/**
 * BT4: Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div
 * Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh
 * 
 * - Đầu vào: 10 thẻ div
 * 
 * - Xử lý: 
 * B1: lặp tăng i
 * B2: kiểm tra chẵn lẻ -> gán thẻ div và style cho biến tích lũy
 * 
 * - Đầu ra: in kết quả ra màn hình;
 * 
 */

$("taoDiv").onclick = function(){
    var ketQuaTao = "";
    for(i = 1; i <= 10; i++){
        if(i % 2 == 0){
            ketQuaTao += "<div style='background-color: blue; font-weight: bold'>Div chẵn số " + i + "</div>";
        }else{
            ketQuaTao += "<div style='background-color: red; font-weight: bold'>Div lẻ số " + i + "</div>";
        };
    };

    $("ketQuaTaoTheDiv").innerHTML = ketQuaTao;
};