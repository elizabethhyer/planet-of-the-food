fetch("http://localhost:3000/oods")
.then(function(r){
    return r.json()
}).then(function(lists){
    let div = document.getElementById("div2")
    let ul = document.getElementById("ul")
    div.append(ul)
    for (let ood of oods.data) {
        let li = document.createElement("li")
        li.innerText = ood.attributes.name
        ul.append(li)
    }
})