let pilihan = 0;

// Iterate all radio button group
for (let a of document.querySelectorAll("#radioX")) {
    let radios = a.querySelectorAll("[type='radio']");

    // Select "Ya" if the length is 2
    if (radios.length == 2) {
        radios[0].checked = true;
    } else { // Randomly Select between "Cukup" dan "Sangat Cukup"
        pilihan = Math.floor(Math.random() * 2);
        radios[pilihan + 2].checked = true;
    }
}

// Check if the textarea element exists
let textarea = document.querySelectorAll("textarea");
if (textarea) {
    for (let a of textarea){
        a.value = "-";
    }
    
}

// Trigger the click event on the input[type="image"] element
let saveButton = document.querySelector('input[type="image"][value="simpan"]');
if (saveButton) {
    saveButton.click();
}
