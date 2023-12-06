/*var ul = document.getElementById("unorderlist")
var input = document.getElementById("input-box")


function add()
{
    var l = document.createElement("li")
    l.innerHTML = input.value + "<button onclick='del(event)'>Delete</button>"
    ul.append(l)
}


function del(event)
{
    event.target.parentElement.remove()
} */

var ul = document.getElementById("list-items")
var input = document.getElementById("input-box")

function add()
{
    var l = document.createElement("li")
    l.innerHTML = input.value + "<button class="btn2">Completed</button>" + "<button onclick='del(event)'>Delete</button>" 
    ul.append(l)
}

function del(evnet)
{
    event.target.parentElement.remove()
}



