let form = document.getElementById("addForm")
let itemlist = document.getElementById("items")
let filter = document.getElementById("filter")

function additem(e) {
    e.preventDefault()

    let newitem = document.getElementById("item").value
    if (newitem == "") {
        alert("Please add some text in textbox");
        return;
    }
    let li = document.createElement("li")
    li.className = "list-group-item"
    let node = document.createTextNode(newitem)
    li.appendChild(node)
    let list = document.getElementById("items")
    list.appendChild(li)

    //button
    let btn = document.createElement("button")
    btn.appendChild(document.createTextNode("X"))
    btn.className = "btn btn-danger  float-right delete"
    li.appendChild(btn)
    document.getElementById("item").value = ""
}

function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you sure?")) {
            itemlist.removeChild(e.target.parentElement)
        }
    }
    else {

    }
}

function filterItem(e) {
    let text = e.target.value.toLowerCase()
    let items = itemlist.getElementsByTagName("li")
    let itemArray = Array.from(items)
    itemArray.forEach(function (value) {
        let itemName = value.firstChild.textContent
        console.log(itemName.toLowerCase().indexOf(text))
        if(itemName.toLowerCase().indexOf(text)!=-1){
           value.style.display ="block"
        }
        else{
            value.style.display="none"
        }
    })

}

//Add eventListener
form.addEventListener("submit", additem)
itemlist.addEventListener("click", removeItem)
filter.addEventListener("keyup", filterItem)