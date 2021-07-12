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

        var button = document.getElementById("makePretty");

        if (button) {
            container.removeChild(button);
        }

        button = createNode('button');
        button.id = "makePretty";
        button.innerHTML = "Make pretty";
        append(container, button);

        button.addEventListener('click', ()=>{
            ul.innerHTML = "";
            let authorsData = data.results;
            authorsData.map(function(author) {
                let li = createNode('li');
                let img = createNode('img');
                let span = createNode('span');

                img.src = author.picture.medium;
                span.innerHTML = `${author.name.first} ${author.name.last}`;

                let button2 = createNode('button');
                button2.id = "expand";
                button2.innerHTML = "Expand";

                let ul2 = createNode('ul');
                button2.addEventListener('click', ()=>{
                        let title = createNode('p');
                        title.innerHTML = "Data";
                        span.innerHTML = "";
                        append(ul2, title);

                        let name = createNode('li');
                        name.innerHTML = `Name: ${author.name.first} ${author.name.last}`
                        append(ul2, name);

                        let gender = createNode('li');
                        gender.innerHTML = "Gender: " + author.gender;
                        append(ul2, gender);

                        let country = createNode('li');
                        country.innerHTML = "Country: " + author.location.country;
                        append(ul2, country);

                        let email = createNode('li');
                        email.innerHTML = "E-Mail: " + author.email;
                        append(ul2, email);

                        append(span, ul2);

                        button2.innerHTML = "Collapse";
                        flag = 1;
                })

                append(li, img);
                append(li, span);
                
                append(li, button2);
                append(ul, li);
            });
        });
    }).catch(function (error) {
        console.log(">>" + error);
    })
}