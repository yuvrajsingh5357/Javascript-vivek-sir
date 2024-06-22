//this code will only run, when the entire page has loaded
let selectedEle;
window.onload = function () {
    selectedEle = document.querySelector('.selected');
    document.querySelector('#btnParent').addEventListener('click', function () {
        changeSelection(selectedEle, selectedEle.parentElement);
    });
    document.querySelector('#btnFirstChild').addEventListener('click', function () {
        changeSelection(selectedEle, selectedEle.firstElementChild);
    });
    document.querySelector('#btnLastChild').addEventListener('click', function () {
        changeSelection(selectedEle, selectedEle.lastElementChild);
    });
    document.querySelector('#btnPrevElemenSibling').addEventListener('click', function () {
        changeSelection(selectedEle, selectedEle.previousElementSibling);
    });
    document.querySelector('#btnNextElementSibling').addEventListener('click', function () {
        changeSelection(selectedEle, selectedEle.nextElementSibling);
    });
    function changeSelection(oldEle, newEle) {
        if (newEle === undefined || newEle === null) {
            return;
        }
        oldEle.classList.remove('selected');
        newEle.classList.add('selected');
        selectedEle = newEle;
        // console.log(selectedEle);
    }
    console.log(document.querySelector('#myList').children);
    console.log("No of child elements: ",document.querySelector('#myList').children.length);
    console.log("Does this element have any children (direct)",document.querySelector('#myList').childElementCount);
}