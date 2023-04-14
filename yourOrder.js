//JS Your Order/Cart Functions

var addItemId = 0; //create addItemId var
function addToCart (item) { //DISCLAIMER: This part of the code and the JS was taken from a Youtube tutorial, Link: https://www.youtube.com/watch?v=fCMbv2ZgzTo&ab_channel=ProgrammersWebDrive
    addItemId += 1; //creates space for another menu item
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemId);
    var img = document.createElement('img'); //creates space for an image
    img.setAttribute('src',item.children[0].currentSrc); //pulls menu item image file location from html code
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var label = document.createElement('div');
    label.innerText = item.children[2].children[0].innerText;
    var select = document.createElement('span');
    select.innerText = item.children[2].children[1].value;
    label.append(select);
    var delBtn = document.createElement('button'); //creates var named delBtn, which is a button, sets inner text to 'Delete'
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('onclick','del('+addItemId+') '); //tells button to use 'del' function when clicked, gives the corresponding 'addItemId' value
    var cartItems = document.getElementById('title');
    selectedItem.append(img); //adds the menu item's corresponding image, title, label, and a 'Delete' button to the right side of the takeout page underneath the aforementioned item
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);

}

function del (item) {
    document.getElementById(item).remove(); //removes menu item when 'Delete' button is pressed
}