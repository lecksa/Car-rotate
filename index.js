// let items = document.querySelectorAll('.item')

// items.forEach(item => {
//     item.onmouseenter = () => {
//         items.forEach(item => item.onmouseleave = () => {
//         item.style.maxHeight = '60px'
//         item.style.height = '60px'
//         })
//         item.style.height = '100%'
//         item.style.maxHeight = '500px'
//     }
// })

let swch = document.querySelector('.swch')
let dialog = document.querySelector('.window')
let img = document.querySelector('.car_img_2')

swch.onclick = () => {
    dialog.classList.toggle('act')
}

let colors = document.querySelectorAll('.btn')

let imgs = {
    black: './img/black.png',
    white: './img/white.png',
    gray: './img/gray.png'
}

colors.forEach(btn => {
    btn.onclick = () => {
        colors.forEach(btn => btn.classList.remove('active'))
        let key = btn.getAttribute('id')
        img.style.backgroundImage = `url(${imgs[key]})`
        btn.classList.add('active')
    }
})


let length = document.querySelector('.length')
let speed = document.querySelector('.speed')
let up = document.querySelector('#up')
let down = document.querySelector('#down')




up.onclick = () => {
    let add_speed = speed.innerHTML.split(' км/ч')
    add_speed = +add_speed[add_speed.length - 2] + 5 + ' км/ч'
    speed.innerHTML = add_speed


    let add_length = length.innerHTML.split('км')
    add_length = +add_length[add_length.length - 2] - 10 + 'км'
    length.innerHTML = add_length
}



down.onclick = () => {
    let add_speed = speed.innerHTML.split(' км/ч')
    add_speed = +add_speed[add_speed.length - 2] - 5 + ' км/ч'
    speed.innerHTML = add_speed

    let add_length = length.innerHTML.split('км')
    add_length = +add_length[add_length.length - 2] + 10 + 'км'
    length.innerHTML = add_length
}


let disk = document.querySelector('.disk')
let up3 = document.querySelector('#up3')
let down3 = document.querySelector('#down3')
let wh = document.querySelectorAll('.wh')

up3.onclick = () => {
    disk.innerHTML = '20'
    wh.forEach(img => {
        img.src = `./img/wheel2.png`
    })
}

down3.onclick = () => {
    disk.innerHTML = '19'
    wh.forEach(img => {
        img.src = `./img/wheel.png`
    })
}

let deg = document.querySelector('.deg')
let up2 = document.querySelector('#up2')
let down2 = document.querySelector('#down2')
let cond = document.querySelector('.cond')
up2.onclick = () => {
    deg.innerHTML++
    if(deg.innerHTML >= 20){
        cond.innerHTML = 'Кондиционер'
    }
}

down2.onclick = () => {
    deg.innerHTML--
    if(deg.innerHTML < 20){
        cond.innerHTML = 'Обогреватель'
    }
}