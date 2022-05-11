console.dir(this)
//dir stands for directory. it expresses hte browser window as an object and gives us a list of elements with inspect/console/window

//element is a generic term to catch anything
function change(element){
    //this changes the text from 'CLICK ME...' to 'FEED ME SEEMORE'
    element.innerText = 'FEED ME SEEMORE'
}
// You cna apply this to anything, and when you press on the header or a paragraph or certin word, it will change to what you set it to, it can be a photo or anything

function addBgColor(element)
{
    // these are CSS properties, use camel case to access them
    element.style.backgroundColor = 'black'
    element.style.color = 'white'
}

// Create an Object
// Using object literal notation

// Reference datatypes (arrays and objects)
// Inside of an object, we have pairs pf values (key-value pairs)

// Object myCar
var myCar = {
    // syntax "key: value" , separated by commas
    // you do not need ''s, you can also have ""s, but you need them in python so use it to build good habits
    // can use number as key
    'color': 'red', 
    'make': 'Jeep',
    'model': 'Wrangler',
    'num_wheels': 4,
    'drive': function(){
        console.log('driving...')
    },
    'show_stats': function(){
        console.log('This car is a ' + this.color + ' ' + this.make + ' ' + this.model + '.')
        // this. is used to say the most recent and applying to the current object
        // Template literal notation -- works the same as the one above.
        console.log('This car is a ${this.color} ${this.make} ${this.model}')
    }
}

// Getting and setting values in an object

// Getting values with dot notation
console.log(myCar.model)
// Setting values with dot notation
myCar.color = 'green'
console.log(myCar.color)
//console.log(myCar) outputs all keys and values top to bottom

// Getting values with bracket notation
console.log(myCar['model'])
// Setting values with dot notation
myCar['color'] = 'blue'
console.log(myCar['color'])

//to call an object function, need parenthesis
myCar.drive()
myCar.show_stats()