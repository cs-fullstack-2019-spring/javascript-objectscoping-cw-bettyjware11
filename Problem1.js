//Create an array called peopleList objects using Object Literal notation.
//
// Each 'person' object in the 'people' collection should have the following information:
//
// First Name Last Name Age Zip Code
//
// Add the following 4 People to your list:
//
// Jimmy Page, 62, 00821
//
// Rick Nielsen, 57, 61016
//
// Jimi Hendrix, 58, 90001
//
// Lemmy Kilmister, 57, 21120



var peopleList = [
    {name:"Jimmy Page", age: 62, zipCode:"00821"},
    {name:"Rick Nielsen", age: 57, zipCode:"61016"},
    {name:"Jimi Hendrix", age: 58, zipCode:"90001"},
    {name:"Lemmy Kilmister", age: 57, zipCode:"21120"},
];

//Dynamically add the property famousSong to the object instance for Jimi Hendrix and assign it the value Purple Haze

console.log(peopleList[2].name);
peopleList[2].famousSong = "Purple Haze";
console.log(peopleList[2].famousSong);

//Dynamically add a function called getBandandZip() to the object instance for Jimmy Page that returns a concatenated
//string of Led Zeppelin HISZIPCODE (get zip code from the object instance). Call the function from your code and log
//the response.

peopleList[0].getBandandZip = function()
{
    alert(getBandandZip);
    return ("Led Zeppelin" + peopleList[0].zipCode)
}
peopleList[0].getBandandZip();

//Write a function that accepts a zip code parameter and prints out all the people in the array with a matching zip code,
//or print the message No match found for zip code! if there is no match