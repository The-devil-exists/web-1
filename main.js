let fname = prompt("نام خود را وارد کنید :")
let lname = prompt("نام خانوادگی خود را وارد کنید :")
document.getElementById("title").innerText = fname+" " +lname

let age = +prompt("سن خود را وارد کنید :")
if (isNaN(age)) {
    alert("سن را اشتباه وارد کردین !!!")
}
let h = prompt("جنسیت خود را وارد کنید : (مرد/زن)")
if (!(h == "مرد" || h == "زن")) {
    
    alert("جنسیت را اشتباه وارد کردی !!!")
}
let s, t
let data = document.getElementById("demo")
data.innerHTML += `<h3>نام :<span> ${fname}</span></h3>`
data.innerHTML += `<h3>نام خانوادگی :<span> ${lname}</span></h3>`
data.innerHTML += `<h3>سن :<span> ${age}</span></h3>`
data.innerHTML += `<h3>جنسیت :<span> ${h}</span></h3>`
if(age >= 18){
    if (h == "مرد") {
        s = prompt("وضعیت سربازی : (بله/خیر)")
        if (s == "بله") {
            data.innerHTML += `<h3>وضعیت سربازی :<span> ${s}</span></h3>`
            t = prompt("تحصیلات خود را بنویسید : (دیپلم/کارشناسی)")
            if (t == "دیپلم") {
                data.innerHTML += `<h3>تحصیلات :<span> ${t}</span></h3>`
                data.innerHTML += `<h3>باید برید دانشگاه</h3>`
            }
            else if (t == "کارشناسی") {
                data.innerHTML += `<h3>تحصیلات :<span> ${t}</span></h3>`
                data.innerHTML += `<span>باید برید سرکار</span>`
            }
            else{
                alert(fname + " درس نخوندی ؟؟؟")
            }
        }
        else if (s == "خیر") {
            data.innerHTML += `<h3>وضعیت سربازی :<span> ${s}</span></h3>`
            t = prompt("تحصیلات خود را بنویسید : (دیپلم/کارشناسی)")
            if (t == "دیپلم") {
                data.innerHTML += `<h3>تحصیلات :<span> ${t}</span></h3>`
                data.innerHTML += `<span>باید برید دانشگاه</span>`
            }
            else if (t == "کارشناسی") {
                data.innerHTML += `<h3>تحصیلات :<span> ${t}</span></h3>`
                data.innerHTML += `<span>باید برید سربازی و بعد سربازی سرکار</span>`
            }
            else{
                alert(fname + " درس نخوندی ؟؟؟")
            }
        }
        else{
            alert("چی کار میکنی مرد درست وارد کن:(")
        }
    }
    else if (h == "زن") {
        t = prompt("تحصیلات خود را بنویسید : (دیپلم/کارشناسی)")
        if (t == "دیپلم") {
            data.innerHTML += `<h3>تحصیلات :<span> ${t}</span></h3>`
            data.innerHTML += `<span>باید برید دانشگاه</span>`
        }
        else if (t == "کارشناسی") {
            data.innerHTML += `<h3>تحصیلات :<span> ${t}</span></h3>`
            data.innerHTML += `<span>باید برید سرکار</span>`
        }
        else{
            alert(fname + " درس نخوندی ؟؟؟")
        }
    }
}
else if(age >= 6 && age <18){
    data.innerHTML += `<h3>تحصیلات : <span>دانش آموز</span></h3>`
    data.innerHTML += `<span>دیپلم نداری برو درستو بخون</span>`

}
else if (age < 6) {
    data.innerHTML += `<span>بچه سال</span>`
}
