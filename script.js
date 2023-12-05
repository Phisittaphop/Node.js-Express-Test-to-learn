let lotto_Number = prompt("กรอกเลขที่ต้องการซื้อ")
document.getElementById("result").innerHTML = Math.floor(Math.random()*101)
document.getElementById("UB").innerHTML = lotto_Number
let age =prompt("กรุณากรอกอายุ")
if(age>13){
    document.getElementById("content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4ArpIeCQDkE?si=h8D6HCxtoPJ1z-mU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
}
let lt_number = prompt("ซื้อหวย")
let random_number = Math.floor(Math.random() * 100)
document.getElementById("f1").innerHTML = lt_number
document.getElementById("b1").innerHTML = random_number
if(lt_number == random_number){
    document.getElementById("r1").innerHTML = "คุณถูกรางวัลยินดีด้วย"
    
} 
else{
    document.getElementById("r1").innerHTML = "เสียใจด้วย"
}
