<h1>Readme</h1?
Tired of manually opening multiple websites every day? Say goodbye to tedious browsing with Bulaloi's Automator! With just one click, open up to 5-10 websites simultaneously and save time. Bulaloi's Automator is the perfect tool for busy individuals, professionals, and companies. Get more done in less time and make browsing a breeze. Try Bulaloi's Automator today and simplify your online experience!
This is an Chrome extension that provides functionality to save, show and open multiple URLs. This extension is written in JavaScript and uses the local storage of the browser to save URLs.

<h1>How to Use</h1>
1.Download the code from the repository and unzip it.
2.Open Google Chrome and go to chrome://extensions/
3.Enable the developer mode from the top-right corner.
4.Click on "Load Unpacked" and select the unzipped folder.
5.The extension will be added to the browser, and you can access it from the browser toolbar.

<h1>Code Functions</h1>
The code is written in JavaScript and has several functions. Let's discuss each function in detail.

<h1>form.addEventListener()</h1>
This function adds a submit event listener to the form element. When the form is submitted, the processForm function is called.

<h1>reset.addEventListener()</h1>
This function adds a click event listener to the reset button. When the reset button is clicked, the reset_URLS function is called.

<h1>start.addEventListener()</h1>
This function adds a click event listener to the start button. When the start button is clicked, the open_all_URL function is called.

<h1>reset_URLS()</h1>
This function is used to clear all the saved URLs from the local storage and removes the list items from the UI.

<h1>open_all_URL()</h1>
This function is used to open all the saved URLs in new tabs. It loops through the local storage and opens each URL using the window.open function.

<h1>show_saved_URL()</h1>
This function is used to show the saved URLs in the UI. It creates a new list item for each URL and adds it to the unordered list.

<h1>save_data_component_1(URL)</h1>
This function is used to save the first URL in the local storage. It checks if the URL1 key is present in the local storage. If not, it saves the URL and returns a resolved promise. If the key is present, it returns a rejected promise.

<h1>save_data_component_2(followed_by, URL_number, URL, exist)</h1>
This function is used to save subsequent URLs in the local storage. It checks if the URL is already present in the local storage. If yes, it returns a rejected promise. If the previous URL is present in the local storage, it saves the current URL and returns a resolved promise. If the previous URL is not present, it returns a rejected promise.

<h1>save_data(URL)</h1>
This function is used to call the save_data_component_1 and save_data_component_2 functions to save the URL in the local storage. It returns a resolved promise if the URL is successfully saved, otherwise, it returns a rejected promise.

<h1>Conclusion</h1>
This is an Chrome extension that provides functionality to save, show and open multiple URLs. The code is written in JavaScript and uses local storage to store the URLs. The code functions are well explained, and you can easily understand how the extension works.
