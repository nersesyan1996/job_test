// // bg img change
let images_btn = document.querySelectorAll('.parent_2_containers>img');
let imgarr = [...images_btn];
let imgUrl
imgarr.map((e) => {
    
    e.addEventListener('click', () => {
        document.querySelector('.big_img').src = (`${e.src}`)
return  imgUrl= document.querySelector('.big_img').src
        

    })
})

// -----------------------------------------------------

// // count

// let x = document.querySelector(".count_add").value = "1"
// document.addEventListener('click', function(event) {
//     if (event.target.classList.contains("increase")) {
//         ++event.target.parentElement.querySelector(".count_add").value;
//     }
//     if (event.target.classList.contains("decrease")) {
//         --event.target.parentElement.querySelector(".count_add").value;
//     }
//     x += event.target.parentElement.querySelector(".count_add").value
// })
// ----------------------------------Colak caunt/
let num=document.querySelector('.count_add')

let plus_btn=document.querySelector('.increase').addEventListener('click',()=>{
    numbers = +num.value
    num.value=''
    num.value+=numbers+1
})
let minus_btn=document.querySelector('.decrease').addEventListener('click',()=>{

    if(num.value>1){
        numbers = +num.value
        num.value=''
        num.value+=numbers-1
        console.log(num.value)

    }
})

// //count res
let cont_4= document.querySelector('.container_4')

if(document.querySelector('.container_3').value != "Выбрать размер" ){
cont_4.innerHTML=''
    let newArr=[]
    document.querySelector('.add').addEventListener('click', () => {
        class Stuff {
            constructor(id, image, size, count) {
              this.id = id;
              this.image = image;
              this.size = size;
              this.count = count;
            }
          }
    
          let size=document.querySelector('.container_3').value
          let image=document.querySelector('.big_img').src
            
    
          let id = 1
        if(document.querySelector('.big_img').src !== 'undefind' ){
            document.querySelector(".basket_count").innerHTML = num.value
            
            let numbers = new Stuff(`${id}`, image, size, num.value)
     newArr.push(numbers)
    
        }
        console.log(newArr)
    })
}
else{
   
    document.querySelector('.add').addEventListener('click', () => {
        cont_4.innerHTML=''
      let errorDiv=  document.createElement("div")
      errorDiv.classList.add('errorDiv')
      errorDiv.innerHTML='Выберите размер'
      cont_4.appendChild(errorDiv)
    })
}


// -----------------------------------------------------------
// // open_close_buttone_size

// let open_clase = document.querySelector('.open_clase');
// let cnt_3_after = document.querySelector(".cnt_3_after")
// document.querySelector(".container_3").onclick = function() {

//     if (open_clase.style.display != "block") {
//         open_clase.style.display = "block";
//         cnt_3_after.setAttribute("style", "transform: rotate(270deg);")
//     } else {
//         open_clase.style.display = "none";
//         cnt_3_after.setAttribute("style", "transform: rotate(90deg);")
//     }
// }

// //header 
window.scroll = addEventListener('scroll', () => {
    if ((scrollY < 150)) {
        document.querySelector("header").setAttribute("style", "opacity:1; top: 0;")
    } else {
        document.querySelector("header").setAttribute("style", "opacity:0; top: -45px;")
    }
})

// // open_close_basket_btn
let basket_open_close = document.querySelector(".basket_open_close")
document.querySelector(".basket_btn").onclick = function() {
    if (basket_open_close.style.top != 31 + "px") {
        basket_open_close.style.top = 31 + "px";
        basket_open_close.style.opacity = 1
        basket_open_close.style.zIndex = "100"
    } else {
        basket_open_close.style.top = 50 + "px";
        basket_open_close.style.opacity = 0
        basket_open_close.style.zIndex = "-100"
    }
}
document.querySelector("main").onclick = function() {
    basket_open_close.style.top = 50 + "px";
    basket_open_close.style.opacity = 0
    basket_open_close.style.zIndex = "-100"
}
window.scroll = addEventListener('scroll', () => {
    if ((scrollY > 10 || scrollY < 10)) {
        basket_open_close.style.top = 50 + "px";
        basket_open_close.style.opacity = 0
        basket_open_close.style.zIndex = "-100"
    }
})



// //mobile_panel_open
let m = document.querySelector(".mobile_panel_open")
document.querySelector(".mobile_btn").onclick = function() {
    m.style.display = "flex"
}
document.querySelector(".mobile_panel_close_js").onclick = function(e) {
    m.style.display = "none"
}
document.querySelector("main").onclick = function(e) {
    m.style.display = "none"
}
window.scroll = addEventListener('scroll', () => {
    if (scrollY > 10 || scrollY < 10) {
        m.style.display = "none"
    }
})

// // clear_input
document.querySelector(".clen_input_btn").onclick = function(e) {
    document.querySelector(".clen_input").value = ""
}

// // size_option
function size_option() {
    var x, i, j, l, ll, selElmnt, a, b, c;
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    document.addEventListener("click", closeAllSelect);
}
size_option()


// let uls = document.querySelectorAll('.option')
