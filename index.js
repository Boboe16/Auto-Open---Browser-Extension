// Is this script considered intermediate?

function setting_button() {
    document.getElementById('container').style.visibility = 'visible'
    document.getElementById('start_button').style.visibility = 'hidden'
}

function hide_setting_to_show_start_button() {
    document.getElementById('container').style.visibility = 'hidden'
    document.getElementById('start_button').style.visibility = 'visible'
}

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
    let numTabsToOpen = 10;  // number of tabs to open at a time
    let delay = 1000;  // delay in milliseconds between batches of tab openings
    let i = 0;
    let openTabs = () => {
      for (; i < localStorage.length && i < numTabsToOpen; i++) {
        let keys = localStorage.key(i);
        window.open(`${localStorage.getItem(keys)}`, '_blank');
      }
      if (i < localStorage.length) { // When the openTabs function is called, it will open a batch of tabs stored in local storage and then increment the i variable by 1 for each tab that is opened. After the openTabs function finishes executing, the if (i < localStorage.length) statement is evaluated again. If i is still less than the length of the local storage, the code inside the if statement will be executed again and the openTabs function will be called again after a delay of delay milliseconds.    
        setTimeout(openTabs, delay); //This process continues until i is equal to the length of the local storage, at which point the if statement will not be executed anymore and the open_all_URL() function will end.
      }                              // Open the next batch of tabs after a delay
    };    
    openTabs();
  }

show_saved_URL()

function show_saved_URL() { // Show's the URLS by creating a li inside ul
    try {
        let all_list = document.querySelectorAll('li')
        for (let i = 0; i < 10; i++) {
            all_list[i].remove()
        }
    }catch {
        for (let i = 0; i < localStorage.length; i++) {
            let keys = localStorage.key(i)
            let ul = document.getElementById('list')
            let create_child_elements = document.createElement('li')
            create_child_elements.innerHTML = `${localStorage.getItem(keys)}`
            ul.appendChild(create_child_elements)
        }
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

function processForm(event) {
    // if (localStorage.length == 3) {
    //     return
    // }
    let URL = document.getElementById('name').value;
    save_data(URL);
    show_saved_URL();
    document.getElementById('name').value = ''
    event.preventDefault();
}