todolist=[]
tomolist=[]
function addTodo(){
    var input = document.getElementById("txt1").value
    todolist.push(input)
    document.getElementById("txt1").value="" //for refreshing the input
    reload()
} 
function reload() //refreshing the array
{
    var tlist=document.createElement("div")
    tlist.setAttribute("id","list")
    for(i in todolist){
        tlist.innerHTML=todolist[i]+
        "<button onclick='remove("+i+")'>Move</button>" +"<br>"
    }
document.getElementById("mylist")
.appendChild(tlist)}
function remove(i){
    tomolist.push(todolist[i])
    todolist.splice(i,1)
    console.log("list", tomolist)
    var node= document.getElementById("list")

    while(last=node.lastChild){
        node.removeChild(last)
        console.log("log")
    }
    

    
}