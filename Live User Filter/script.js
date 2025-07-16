const result = document.getElementById('result')

const filter = document.getElementById('filter')

const listItems = []

//here we call function that fetches users from an API
getData()

filter.addEventListener('input', (e) => filterData(e.target.value))



async function getData() {
    
    //it fetches 50 random users from an API
    const res = await fetch('https://randomuser.me/api?results=50')
    
    //converts the response to a unsable JSON format
    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''

    results.forEach(user => {

        const li = document.createElement('li')

        listItems.push(li)
        

        li.innerHTML = 
        `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })
}


//if a users name.location matches your location ---visible
//otherwise hide
function filterData(searchTerm){
    listItems.forEach(item => {

        if(item.innerText.toLowercase().includes(searchTerm.toLowercase())){
            item.classList.remove('hide')
        }
        else{
            item.classList.add('hide')
        }
    })
}