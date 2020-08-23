/*
Write your code for this exercise in this file beneath this long comment.
Please be certain to use only syntax and techniques covered in the
assigned freeCodeCamp courses.

1. Write a function named createPainting that expects to receive three
arguments: name, artist, and year. This function should return an object. The
object it returns should have properties that are also named name, artist, and
year. The values assigned to these properties should be the values that are
passed to the function. Additionally, the object that createPainting returns
should have two methods:

    isOlderThan - a function that accepts one painting object as an argument
        and returns true if the painting object the function belongs to is
        older than the painting that is passed as an argument.

    logArtist - a function that logs to the console a sentence that contains
        the values of the paintings's name and artist properties: "[name] was
        painted by [artist]." For example, if the painting were Girl with a
        Pearl Earring, then the sentence that logArtist logs would be "Girl
        with a Pearl Earring was painted by Vermeer."


  2. Create a variable named paintings and assign to it an array. This array
should contain seven objects that are created by calling the createPainting
function. The values you should pass to the createPainting function to create
these objects are:

name                      | artist     | year
-------------------------------------------------------------
Mona Lisa                 | Leonardo   | 1506
                          |            |
The Starry Night          | Van Gogh   | 1889
                          |            |
Girl with a Pearl Earring | Vermeer    | 1665
                          |            |
The Last Supper           | Leonardo   | 1495
                          |            |
The Birth of Venus        | Botticelli | 1486
                          |            |
Guernica                  | Picasso    | 1937
                          |            |
The Kiss                  | Klimt      | 1908

3. Write the following two functions. Both should use the paintings array to
determine what to return.

    getPaintingByName - this function expects a string as an argument and
        returns the object in the paintings array whose name property is equal
        to the string that is passed to it (if there is one).

    getPaintingNamesByArtist - this function expects a string as an argument
        and returns an array containing the names of only those paintings in
        the paintings array whose artist properties are equal to the string
        that is passed to it.

You can test your code by opening index.html in Chrome and using the console
(see http://jsforcats.com/ for instructions on using the console). After you
correct any errors you see when you open the console, you can run commands such
as those below and verify the output.

var monaLisa = getPaintingByName('Mona Lisa');
var guernica = getPaintingByName('Guernica');

monaLisa.isOlderThan(guernica);

monaLisa.logArtist();

var byLeonardo = getPaintingNamesByArtist('Leonardo');
*/


function createPainting(name,artist, year) {
  var painting = {
  name: name,
  artist: artist,
  year: year,
  isOlderThan: function (x){
    if(x < this.year){
      return true
        } else {
        return false
        }
      },
  logArtist: function(name,artist,year){
  console.log(this.name + ' was painted by ' + this.artist + '.')
      },
    }
  return painting
  }

var paintings = [
  createPainting('Mona Lisa', 'Leonardo', 1506),
  createPainting('The Stary Night', 'Van Gogh', 1889),
  createPainting('Girl With A Pearl Earring', 'Vermeer', 1665),
  createPainting('The Last Supper', 'Leonardo', 1495),
  createPainting('The Birth Of Venus', 'Botticelli', 1486),
  createPainting('Guernica', 'Picasso', 1506),
  createPainting('The kiss', 'Klimt', 1908),
]


function getPaintingByName(painting_name){  
  for (var i in paintings) {
  if (painting_name ===paintings[i].name){
  return paintings[i];
    }
  }
}

function getPaintingNamesByArtist(artist_name){
  var paintings_done_by_artist = []
  for (var i in paintings) {
  if (artist_name ===paintings[i].artist){
    paintings_done_by_artist.push(paintings[i].name)
    }
  }
  return paintings_done_by_artist
}

