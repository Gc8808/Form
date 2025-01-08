//Generate Prefix
function genPrefix(firstName) {
  if (firstName.length > 5) {
    return 'King'
  } else {
    return 'Prince'
  }
}
//generate first name
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase()
  if (firstLetter === 'a') {
    return 'John'
  } else if (firstLetter === 'b') {
    return 'Dan'
  } else if (firstLetter === 'G') {
    return 'Matthew'
  } else {
    return 'Julian'
  }
}

//generate middle name
function genMiddleName(roadType, favoriteColor) {
  if (roadType === 'road' && favoriteColor === 'Red') {
    return `Blackstone` //EX:  blueridge
  } else if (roadType === 'street' || favoriteColor === 'blue') {
    return `Bluestream` //EX: blueson
  } else {
    return `${favoriteColor}stone` //EX: bluestone
  }
}

//generate Last Name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1)
  if (lastLetter === 'a') {
    return 'Light'
  } else if (lastLetter === 'e') {
    return 'lightning'
  } else if (lastLetter === 'i') {
    return 'Spike'
  } else if (lastLetter === 'o') {
    return 'Ice'
  } else if (lastLetter === 'u') {
    return 'Flame'
  } else {
    return 'Sun' // Default last name for letters not matched
  }
}

function genSuffix(favoriteAnimal) {
  switch(favoriteAnimal) {
    case 'dog':
      return "Red clan";  // Removed the unnecessary break here
    case 'cat':
      return "Blue clan";
    case 'Fox':
      return "Yellow clan";
    case 'snow leapard':
      return "White clan";
    case 'Aditya':
      return "Indian clan";
    case 'federico':
      return "Italian clan";
    default:
      return "Portuguese clan";  // Fixed typo in "Portugeuse"
  }
}

//MAster Name Building FUnction
function genFullName() {
  //Get the Users Inputs from HTML Elements
  const firstName = document.getElementById('firstName').value.trim()
  const lastName = document.getElementById('lastName').value.trim()
  const roadType = document.getElementById('roadType').value
  const favoriteColor = document.getElementById('favoriteColor').value.trim()
  const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()

  //Run Name Generating Functions & store them in new variables
  const prefix = genPrefix(firstName)
  const newFirstName = genFirstName(firstName)
  const middleName = genMiddleName(roadType, favoriteColor)
  const newLastName = genLastName(lastName)
  const suffix = genSuffix(favoriteAnimal)

  //Capitalize Name Variables when needed
  const capitalizedPrefix = capitalize(prefix)
  const capitalizedFirstName = capitalize(newFirstName)
  const capitalizedMiddleName = capitalize(middleName)
  const capitalizedLastName = capitalize(newLastName)

  //Combine all of the Name variables in a new name
  const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`
  console.log(fullName)
  //Display the new name
  document.getElementById('result').textContent = fullName
}

//Capitalization Function
function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}