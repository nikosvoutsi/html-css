
        function init(){
            let burger=document.getElementById("burger")
            //burger.classList.add("display-none");

            burger.addEventListener('click',onburgerclick)
            
            let dropDown=document.querySelector("nav#drop-down")
            //dropDown.classList.add("display-none");

            function onburgerclick(){
                dropDown.classList.add("display:block")
        }
    }
