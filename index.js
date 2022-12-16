// explain every piece of code like your explaing into a toddler

function save_data_component_1(URL) {
    if (localStorage.getItem('URL1') == null) {
        localStorage.setItem(`URL1`, `${URL}`)
    }
    else {
        return Promise.reject()
    }
}

function save_data_component_2(past, number, URL, past2) {

    if (localStorage.getItem(`URL${past2}`) != null) {
        return Promise.reject()
    }

    if (localStorage.getItem(`URL${past}`) != null) {
        localStorage.setItem(`URL${number}`, `${URL}`)
    }
    else {
        return Promise.reject()
    }
}

async function save_data(URL) {

    try {
        return await save_data_component_1(URL);
        } catch (error) {
        console.log('URL1 is filled')
        }    

    try {
        return await save_data_component_2(1,2,URL,2)
        } catch (error) {
            console.log('URL2 is filled')
        }

    try {
        return await save_data_component_2(2,3,URL)
        } catch (error) {
            console.log('URL3 is filled')
        }
}

function processForm() {
    let URL = document.getElementById('name').value
    save_data(URL)
}