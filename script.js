function query(selector) {
    return document.querySelector(selector)
}

function queryAll(selector) {
    return document.querySelectorAll(selector)
}

function validateText(text) {
    console.log(text)
    if (!text) {
        return false
    }
    else {
        return true
    }
}
function main() {
    query('#parking-form').addEventListener('submit', function (event) {
        event.preventDefault()
        let nameField = query("#name")
        let name = nameField.value.trim()
        let nameBox = query("#name-field")
        let textValid = validateText(name)
        console.log(textValid)
        if (textValid === true) {
            nameField.parentNode.classList.remove('input-invalid')
            nameField.parentNode.classList.add('input-valid')
        } else {
            nameField.parentNode.classList.remove('input-valid')
            nameField.parentNode.classList.add('input-invalid')
        }



    })

}







main()
