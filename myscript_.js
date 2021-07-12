function loadData(){
    const url = "https://randomuser.me/api/?results=5";
    const ul = document.getElementById("authors");
    const container = document.getElementById("authorsContainer");

    ul.innerHTML = ""

    function createNode(element){ //<span>,  <div> etc.
        return document.createElement(element);
    }

    function append(parent, el){
        return parent.appendChild(el);
    }

    fetch(url).
    then(response => response.json()).
    then(data => {
        let li = createNode('li');
        let span = createNode('span');
        span.innerHTML = JSON.stringify(data, null, ' ');
        append(li, span);
        append(ul, li);
    }).catch(function (error) {
        console.log(">>"+error);
    })
}