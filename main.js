const btn1 = document.getElementsByClassName('.btn1')
console.log(jadwal)
console.log(btn1.children)

btn1.addEventListener("click", function() {
    const jadwal = document.getElementById('jadwal')
    jadwal.style.display = "none"
})