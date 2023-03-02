
        window.addEventListener('load', init);
        function init(){
        let burger=document.querySelector("header nav#burger");
        //burger.classList.add("display-none");
        console.log(burger)
        burger.addEventListener('click', onburgerclick);
        //let dropDown=document.querySelector("header nav#drop-down");
        let dropDown=document.querySelector("header nav#drop-down");
        dropDown.setAttribute("style", "display:none")
        function onburgerclick(){
            
             if(burger.textContent=='⛌'){
               dropDown.setAttribute("style", "display:none")
               burger.textContent='☰ ';
            }else{
                dropDown.setAttribute("style", "display:block");
                burger.textContent='⛌';
            } 
        }
    
        
                
        //dropDown.classList.add("display-none");    
    } 