// Variables

const dialogOpen_listener =  document.getElementsByClassName("dialogBox_listener"),
      dialogClose_listener = document.getElementsByClassName("dialogClose_listener")[0],
      dialog_body     = document.getElementsByClassName("dialogBox")[0];


var float_btn =             document.getElementsByClassName("floating-button")[0],
    bars_btn  =             document.getElementsByClassName("f-origin"),
    content_nav=            document.getElementsByClassName("nav_grandpa")[0],
    special_btn =           document.getElementsByClassName("special_nav_mobile"),
    nav_mobile_parent =     document.getElementById("nav_mobile");

    var BOX_ME =            [
                            document.getElementsByClassName("box-1")[0],
                            document.getElementsByClassName("box-2")[0],
                            document.getElementsByClassName("box-3")[0],
                            document.getElementsByClassName("box-4")[0],
                            document.getElementsByClassName("box-5")[0],
                            document.getElementsByClassName("box-6")[0],
                            document.getElementsByClassName("box-7")[0],
                            document.getElementsByClassName("box-8")[0]    
                            ];

var dbw_var =               document.getElementsByClassName("dialogBox_work")[0];
//  DIALOG BOX SCRIPT


for(x = 0 ; x < dialogOpen_listener.length ; x++) {
    dialogOpen_listener[x].onclick = ()=> {
        nav_mobile_parent.style.display = "none";
        console.log(nav_mobile_parent.style.display);
        dialog_body.style.margin = 0 + "vh 0";
        
    }
}

dialogClose_listener.onclick =()=> {
   // console.log("fire!");
    dialog_body.style.margin = -110 + "vh 0";
    bars_btn[0].style.transform = "none";
    bars_btn[2].style.transform = "none";
    bars_btn[1].style.display = "block";
    content_nav.style.margin = -200 + "% 0";
    state_btn = true;
    nav_mobile_parent.style.display = "grid";
}


//  GET DATA FORM JSON
var http = new XMLHttpRequest();
http.onreadystatechange = ()=> {
    if(http.status == 200 && http.readyState == 4) {
        var JSON_DAT = JSON.parse(http.responseText);
        ShopCreator(JSON_DAT.Product_Name, 
                    JSON_DAT.image,
                    JSON_DAT.Price,
                    JSON_DAT.Status,
                    JSON_DAT.sold_Count,
                    JSON_DAT.shop_link);
    }
};

var ShopCreator =(Name, image, price, status, sold_count, link)=> {
    var item_class = document.getElementsByClassName("shop_item_class")[0];

    for(x = 0 ; x < Name.length ; x++) {
        var shop_item_ = document.createElement("a"),
            shop_img_  = document.createElement("img"),
            shop_desc_ = document.createElement("p");

            with(shop_item_.classList) {
                add("col-10");
                add("col-md-3");
                add("shop_items");
                add("pt-3");
                add("m-2");
            }

            shop_item_.role = "button";
            shop_item_.target = "_blank";
            shop_item_.href = link[x];
            shop_img_.classList.add("col-11");
            shop_desc_.classList.add("py-3");

            shop_img_.src = image[x];
            shop_desc_.innerHTML = Name[x];
            shop_desc_.innerHTML += '<br><br>';

            if(status[x] != 0) shop_desc_.innerHTML += '<span class="price">' + price[x] + '</span>';
            else            shop_desc_.innerHTML += '<span class="price"><strike>' + price[x] + '</strike> <strong>Sold Out</strong></span>';

            if(parseInt(sold_count[x]) > 0) {
                shop_desc_.innerHTML += "<br>⭐⭐⭐⭐⭐ ("+sold_count[x]+ " Sold)";    
            }
            else {
                shop_desc_.innerHTML += "<br>✰ ✰ ✰ ✰ ✰  ("+sold_count[x]+ " Sold)";    
            }

            shop_item_.appendChild(shop_img_);
            shop_item_.appendChild(shop_desc_);
            item_class.appendChild(shop_item_);
    }

    
}





http.open("GET", "dat/shop.json", true);
http.send();



// NAVIGATION BAR MOBILE SCRIPT


var state_btn = true;

    float_btn.addEventListener("click", ()=> {
        if(state_btn == true) {
            
            bars_btn[0].style.transform = "rotate(45deg) translateY(7.5px)";
            bars_btn[2].style.transform = "rotate(-45deg) translateY(-7.5px)";
            bars_btn[1].style.display = "none";
            content_nav.style.margin = 0;
            state_btn = false;

        }
        else {
            bars_btn[0].style.transform = "none";
            bars_btn[2].style.transform = "none";
            bars_btn[1].style.display = "block";
            content_nav.style.margin = -200 + "% 0";
            state_btn = true;
        }
      //  console.log(state_btn);
    });


   for(x = 0 ; x < special_btn.length ; x++) {
       special_btn[x].onclick =()=> {
        bars_btn[0].style.transform = "none";
        bars_btn[2].style.transform = "none";
        bars_btn[1].style.display = "block";
        content_nav.style.margin = -200 + "% 0";
        state_btn = true;
       }
   }


var dbw_close =()=> {
    with(dbw_var.style) {
       margin = "-200% 0";
       background = "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))";
    }
}

var dbw_open =(x)=> {
    with(dbw_var.style) {
        margin = "0 0";
        background = " linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))";
     }
}



//======================================================
var nav_grandpa = document.getElementById("navigation_grandpa"),
    nav_dad     = document.getElementById("navigation_dad");

    



var section = [
    document.getElementById("s1"),
    document.getElementById("s2"),
    document.getElementById("s3"),
    document.getElementById("s4"),
    document.getElementById("s5")
];




var scrolling_anabler = (x)=> {

    section[x].onscroll =()=> {
        let scroll_dat = section[x].scrollTop;
        console.log(scroll_dat);
        if(scroll_dat >= 50 || scroll_dat != 0) {

            with(nav_grandpa.style) {
                backgroundColor = "rgba(255,255,255,0.95)";
            } 
        } else if(scroll_dat == 0) {
            with(nav_grandpa.style) {
                background = "none";
            } 
        }
    } 

    
    
}

for(let x = 0 ; x <= 5 ; x++) {
    scrolling_anabler(x);
}

//BOX FUNCTION (INDIVIDUAL CODING)

// for(x = 0 ; x <= BOX_ME.length ; x++) {
    // BOX_ME[x].addEventListener("click", function() {
    //     alert();
    // });
// }

/*
 *  TEMPORARY SCRIPTS 
 *  CAN BE FOUND UNDER THIS  
 */










/*
var nav_grandpa = document.getElementById("navigation_grandpa"),
    nav_dad     = document.getElementById("navigation_dad");

var section = [
    document.getElementById("s1"),
    document.getElementById("s2"),
    document.getElementById("s3"),
    document.getElementById("s4"),
    document.getElementById("s5")
],
scroll_state = false;

nav_grandpa.onmouseover = ()=> {
    nav_dad.style.marginTop = 0;
} 
nav_grandpa.onmouseout = ()=> {
    if(scroll_state == true) nav_dad.style.marginTop = "-200px";
}


var page_status = (x)=> {
    section[x].addEventListener('scroll', ()=> {
        var scroll_status = section[x].scrollTop;
        if(scroll_status > 50) {
            scroll_state = true;
            nav_dad.style.marginTop = "-200px";
        }
        else {
            scroll_state = false;
            nav_dad.style.marginTop = 0;
        }
    });
}

//page_status(0);

*/
