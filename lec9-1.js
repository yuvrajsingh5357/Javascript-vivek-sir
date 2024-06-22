var allInputs = document.querySelectorAll(".container .std-check");

/* document.querySelector("#btnSubmit").addEventListener("click", checkAllInputs);
function checkAllInputs(){
    
} */
/* anonymus functions */
document.querySelector("#btnSubmit").addEventListener("click", function(){
    allInputs.forEach(function(ele){
        var required = ele.getAttribute("data-std-required");
        required = (required == "true");
        //add undefined / null check for data-std-min-length
        var minLength = parseInt(ele.getAttribute("data-std-min-length"));
        var maxLength = parseInt(ele.getAttribute("data-std-max-length"));
        var friendlyName = ele.getAttribute("data-std-friendlyName");
        friendlyName = friendlyName == null ? "Input": friendlyName;
        if(!required){
            return;
        }
        if(ele.value.trim().length <= 0){
            alert(friendlyName + ": " + "Required constraint invalidated");
            return;
        }
        if(!isNaN(minLength)){
            if(ele.value.length < minLength){
                alert(friendlyName + ": " + "Minimum length constraint invalidated");
                return;
            }
        }
        if(!isNaN(maxLength)){
            if(ele.value.length > maxLength){
                alert(friendlyName + ": " + "Maximum length constraint invalidated");
                return;
            }
        }

    });
});