const allItems = document.querySelectorAll('.accordian .accordian-item .heading button');
window.onload = function(){
    allItems.forEach(function(ele){
        ele.addEventListener('click', function(){
            if(ele.parentElement.nextElementSibling.classList.contains('hide') && ele.innerText == "+"){
                ele.parentElement.nextElementSibling.classList.remove('hide');
            }else{
                ele.parentElement.nextElementSibling.classList.add('hide');
            }

        });
    });
}