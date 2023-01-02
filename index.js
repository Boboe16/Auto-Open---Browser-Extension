function setting_button() {
    document.getElementById('container').style.visibility = 'visible'
    document.getElementById('start_button').style.visibility = 'hidden'
}

function hide_setting_to_show_start_button() {
    document.getElementById('container').style.visibility = 'hidden'
    document.getElementById('start_button').style.visibility = 'visible'
}

function reset_URLS() {
    let all_list = document.querySelectorAll('li')
    for (let i = 0; i < 3; i++) {
        all_list[i].remove()
    }
    localStorage.clear()
}

function open_all_URL() {
    for (let i = 0; i < localStorage.length; i++) {
        let keys = localStorage.key(i)
        window.open(`${localStorage.getItem(keys)}`, '_blank')
    }
}

show_saved_URL()

function show_saved_URL() { // Show's the URLS by creating a li inside ul
    for (let i = 0; i < localStorage.length; i++) {
        let keys = localStorage.key(i)
        let ul = document.getElementById('list')
        let create_child_elements = document.createElement('li')
        create_child_elements.innerHTML = `${localStorage.getItem(keys)}`
        ul.appendChild(create_child_elements)
    }
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

    if (localStorage.getItem(`URL${exist}`) != null) {
        return Promise.reject()
    }

    else if (localStorage.getItem(`URL${followed_by}`) != null) {
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
}

function processForm() {
    let URL = document.getElementById('name').value
    save_data(URL)
    show_saved_URL()
}