let $ = document.getElementById.bind(document);
var currentFormat = new Intl.NumberFormat("vn-VN");
/**
 * BT1
 * Tìm số nguyên dương nhỏ nhất sao cho:
 *     1 + 2 + ... + n > 10000
 * 
 * - Đầu vào: khởi tạo tong = 0; dem = 0
 * 
 * - Xử lý: 
 * B1: cho đk dừng tong < 10000 
 * B2: tăng biến đếm 1 đv 
 * B3: tính tích lũy tong = tong + dem
 * 
 * - Đầu ra: in ra kết quả đếm 
 * 
 */
var tong = 0;
var dem = 0;

while(tong < 10000){
    dem++;
    // console.log(dem);
    tong += dem;
    // console.log(tong);
}
document.getElementById("soNguyenDuongNhoNhat").innerHTML = "Số nguyên dương nhỏ nhất sao cho 1 + 2 + ... + n > 10000 là: " + dem;

/**
 * BT2: viết chương trình nhập vào 2 số x,n tính tổng
 *  S(n) = x + x^2 + x^3 + ... + x^n ( sử dụng vòng lặp và hàm)
 * 
 * - Đầu vào: x, n là 2 số người dùng nhập
 * 
 * - Xử lý:
 * B1: tạo hàm tính tổng 
 * B2: bắt sự kiện click -> gọi hàm tinhTongLuyThua
 * 
 * - Đầu ra: in kết quả ra màn hình
 *  */


function tinhTongLuyThua(x, n){
    //tạo s là tổng
    var s = 0;
    // biến i = 1 là số mũ đầu tiên
    var i = 1;

    //dùng do while để thực thi trước số mũ mặc định đầu tiên là 1
    // S(n) = x^1 + x^2 + ... + x^n
    do{
        s += Math.pow(x, i);
        i++;
    }while(i <= n);

    return s;
}

$("tinhTong").onclick = function(){
    var x = $("layX").value *1;
    var n = $("layN").value *1;
    var ketQua;
    
    ketQua = tinhTongLuyThua(x, n);

    $("ketQua").innerHTML = "Tổng là: " + currentFormat.format(ketQua);
};

/**
 * BT3: Nhập vào n. Tính giai thừa 1*2*...n
 * 
 * - Đầu vào: người dùng nhập n
 * 
 * - Xử lý: 
 * B1: tạo hàm tinhGiaiThua(n)
 * B2: click -> gọi hàm gán ketQua
 * 
 * - Đầu ra: in kết quả ra màn hình
 */
function tinhGiaiThua(n){
    var ketQua = 1;

    for(i = 1; i <= n; i++){
        ketQua *= i;
    };

    return ketQua;
}

$("tinhGiaiThua").onclick = function(){
    var n = $("layGiaiThua").value;
    var ketQua;

    ketQua = tinhGiaiThua(n);

    $("ketQuaGiaiThua").innerHTML = currentFormat.format(ketQua);
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