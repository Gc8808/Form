//Generate prefix
function genPrefix (firstName) {
    if(firstName.length > 4) {
        return 'The Great'
    } else {
        return 'Master'
    }
}
//Generate first name
function genFirstName(firstName) {
    const firstLeter= firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a') {
        return 'Jeff'
    } else if (firstLeter === 'b') {
        return 'Pablo'
    } else{
        return 'Julian'
    }

}


//Generate Middle name 
function genMiddleName (roadType, favoriteColor) {
    if (roadType === 'Road') {
        return `${favoriteColor} ridge` //Ex: blue ridge
    } else if (roadType === 'street') {
        return `${favoriteColor} son`
    } else {
         return `${favoriteColor} stone`
    }
}

//Generate Last name
function genLastName (lastName) {
    const lastLetter = lastName.charAt(lastName.length-1) 
        if (lastLetter === 'e') {
            return 'Storm'
        }else if (lastLetter === 'a') {
            return 'Dark'
        }
        else {
            return 'Light'
        }
    }


//Generate suffex

function genSuffix (favoriteAnimal) {
    return `of the ${favoriteAnimal} clan.`
}

function genFullName {
//Get User elements
const firstName = document.getElementByid('firstName').value.trim()
const lastName = document.getElementByid('LastName').value.trim()
const roadType = document.getElementByid('roadType').value
const favoriteColor = document.getElementByid('favoriteColor').value.trim()
const favoriteAnimal = document.getElementByid('favoriteAnimal').value.trim()
//Run name generating functions and store them in variables
const prefix = genPrefix(firstName)
const newFirstName = genFirstName(firstName)
const newLastName = genLastName(lastName)
const middleName = (roadType, favoriteColor)
const genSuffix = (favoriteAnimal)
//Capitalize name varables when needed
const capitalizedPrefix = genPrefix(firstName)
const newFirstName = genFirstName(firstName)
const CapitalizedLastName = genLastName(lastName)
const capitalizedMiddleName = (roadType, favoriteColor)

//Combine all of the name varibles into a full new name

//Display the new name

}

//Captitalize Function
function capitalize (input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}