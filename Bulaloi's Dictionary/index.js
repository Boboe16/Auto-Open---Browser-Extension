let form = document.querySelector('form')
form.addEventListener('submit', 
function() {
    processForm(event)
})

let reset = document.querySelector('#reset_button')
reset.addEventListener('click', 
function() {
    reset_URLS()
})

let start = document.querySelector('#start')
start.addEventListener('click', 
function() {
    open_all_URL()
})

function reset_URLS() {
    try {
        localStorage.clear()
        let all_list = document.querySelectorAll('li')
        for (let i = 0; i < 10; i++) {
            all_list[i].remove()
        }
    } catch {
        console.log('There is no URL stored in your storage.')
    }
}

function open_all_URL() {
    for (let i = 0; i < localStorage.length; i++) {
    let keys = localStorage.key(i);
    window.open(`${localStorage.getItem(keys)}`, '_blank');
    }
}

show_saved_URL()

function show_saved_URL() { // Show's the URLS by creating a li inside ol

    function show_saved_URL_component() {
        for (let i = 0; i < localStorage.length; i++) {
            let keys = localStorage.key(i)
            let ul = document.getElementById('list')
            let create_child_elements = document.createElement('li')
            create_child_elements.innerHTML = `${localStorage.getItem(keys)}`
            ul.appendChild(create_child_elements)
        }
    }
    
    let delete_all_list = new Promise((resolve, reject) => { // Deletes all li element then create it again so there will no duplicates
        let all_list = document.querySelectorAll('li')
        for (let i = 0; i < localStorage.length; i++) {
            all_list[i].remove()
            resolve(); 
        }
    });
        
    delete_all_list
        .then(success => {
        show_saved_URL_component()
        console.log('success')
        })
        .catch(error => {
        show_saved_URL_component()
        console.log('failed');
        })
}

function save_data_component_1(URL) {
    if (localStorage.getItem('URL1') == null) {
        localStorage.setItem(`URL1`, `${URL}`)
    }
    else {
        return Promise.reject()
    }
}

function save_data_component_2(followed_by, URL_number, URL, exist) {

    if (localStorage.getItem(`URL${exist}`) != null) { // If this URL already exist in local storage, it returns so it won't change the value of this URL.
        return Promise.reject()
    }

    else if (localStorage.getItem(`URL${followed_by}`) != null) { // Creates new URL if the there's a previous URL. Like if u want to create URL2 you need URL1 first, if there's no URL1 it rejects or return
        localStorage.setItem(`URL${URL_number}`, `${URL}`)
    }
    else { 
        return Promise.reject()
    }
}

async function save_data(URL) {

    try { // If 'URL1' key doesn't exist in local storage, it will create one then return
        return await save_data_component_1(URL);
        } catch (error) { // If local storage already has 'URL1' it will not return and the function continues
        console.log('URL1 is filled')
        }    

    try {
        return await save_data_component_2(1,2,URL,2)
        } catch (error) {
            console.log('URL2 is filled')
        }

    try {
        return await save_data_component_2(2,3,URL,3)
        } catch (error) {
            console.log('URL3 is filled')
        }
    try {
        return await save_data_component_2(3,4,URL,4)
        } catch (error) {
            console.log('URL4 is filled')
        }
    try {
        return await save_data_component_2(4,5,URL,5)
        } catch (error) {
            console.log('URL5 is filled')
        }
    try {
        return await save_data_component_2(5,6,URL,6)
        } catch (error) {
            console.log('URL6 is filled')
        }
    try {
        return await save_data_component_2(6,7,URL,7)
        } catch (error) {
            console.log('URL7 is filled')
        }
    try {
        return await save_data_component_2(7,8,URL,8)
        } catch (error) {
            console.log('URL8 is filled')
        }
    try {
        return await save_data_component_2(8,9,URL,9)
        } catch (error) {
            console.log('URL9 is filled')
        }
    try {
        return await save_data_component_2(8,10,URL,10)
        } catch (error) {
            console.log('URL3 is filled')
        } 
}

async function processForm(event) {
    let URL = document.getElementById('name').value;
    await save_data(URL);
    await show_saved_URL();
    document.getElementById('name').value = ''
    event.preventDefault();
}