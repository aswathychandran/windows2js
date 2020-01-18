todolist=[]
tomolist=[]


function add(){
var input=document.getElementById("input").value
todolist.push(input)
console.log(todolist)
 
//for viewing this in the html pages along with the input

var view=document.createElement("div")
for(i in todolist){
view.innerHTML=todolist[i]+"<button onclick='move(i)'>move</button>"}
document.getElementById("list").appendChild(view)
console.log(i)
}

function move(i){
    tomolist.push(todolist[i])
    console.log(tomolist)
    todolist.splice(i,1)
    console.log(todolist)
    var view2=document.createElement("div")
    for(i in tomolist){
        view2.innerHTML=tomolist[i]
        document.getElementById("list2").appendChild(view2)
        console.log(i)
    }
}