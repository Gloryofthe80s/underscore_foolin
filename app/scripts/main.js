// 1) find: _.find(list, iterator, [context])
// Looks through each value in the list, returning the first one that passes a truth test (iterator), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

// var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => 2

var someBooleans = [true, true, true, false, true, false];

var firstFalseYouFind = _.find(someBooleans, function(x){ return x == false; });
// => false (stops at the first false it finds)

// ---------------------------------------------------------------

// 2) filter: _.filter(list, iterator, [context])
// Looks through each value in the list, returning an array of all the values that pass a truth test (iterator). Delegates to the native filter method, if it exists.

// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [2, 4, 6]

var someNumbers = [1, 5, 10, 20, 25, 30];

var allGreaterThan20 = _.filter(someNumbers, function(x){ return x > 20; });
// => [25, 30]

// This works on objects in arrays as well:
var objectArray = [
    {'name' : 'Jacob',
     'age' : 27,
     'type' : 'human'},

    {'name' : 'Cora',
      'age' : 26,
      'type' : 'human'},

    {'name:' : 'Walter',
     'age' : 27,
     'type' : 'human'},

    {'name' : 'Bailey',
     'age' : 5,
     'type' : 'dog'}
];

var allGreaterThan26 = _.filter(objectArray, function(x){ return x.age > 26; });
// => Jacob and Walter objects (along with their other properties) in an array
var jacobsGreaterThan26 = _.filter(objectArray, function(x){ return x.age > 26 && x.name == 'Jacob'; });
// => returns Jacob object in an array

// ---------------------------------------------------------------

// 3) where: _.where(list, properties)
// Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.

// _.where(listOfPlays, {author: "Shakespeare", year: 1611});
// => [{title: "Cymbeline", author: "Shakespeare", year: 1611},
//     {title: "The Tempest", author: "Shakespeare", year: 1611}]


var humansAge27 = _.where(objectArray, {type: "human", age: 27});
// => Jacob and Walter (along with their properties)

// ---------------------------------------------------------------

// 4) contains: _.contains(list, value)
// Returns true if the value is present in the list. Uses indexOf internally, if list is an Array.

// _.contains([1, 2, 3], 3);
// => true

var nameArray = ['Jacob', 'Cora', 'Walter', 'Bailey'];

var isBaileyHere = _.contains(nameArray, 'Bailey');
// => true

// ---------------------------------------------------------------

// 5) pluck: _.pluck(list, propertyName)
// A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// _.pluck(stooges, 'name');
// => ["moe", "larry", "curly"]

var justTypes = _.pluck(objectArray, 'type');
// => ['human', 'human', 'human', 'dog']

// ---------------------------------------------------------------

// 6) max: _.max(list, [iterator], [context])
// Returns the maximum value in list. If an iterator function is provided, it will be used on each value to generate the criterion by which the value is ranked.

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// _.max(stooges, function(stooge){ return stooge.age; });
// => {name: 'curly', age: 60};

var arrayOfGems = [{type : 'ruby', value: 100}, {type: 'sapphire', value: 200}, {type: 'diamond', value: 300}];

var mostValuable = _.max(arrayOfGems, function(x){ return x.value});
// => Object {type: "diamond", value: 300}

// ---------------------------------------------------------------

//  7) min: _.min(list, [iterator], [context])
// Returns the minimum value in list. If an iterator function is provided, it will be used on each value to generate the criterion by which the value is ranked.

// var numbers = [10, 5, 100, 2, 1000];
// _.min(numbers);
// => 2

var leastValuable = _.min(arrayOfGems, function(x){ return x.value});
// => Object {type: "ruby", value: 100}

// ---------------------------------------------------------------

// 8) shuffle: _.shuffle(list)
// Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.

// _.shuffle([1, 2, 3, 4, 5, 6]);
// => [4, 1, 6, 3, 5, 2]

var shuffled = _.shuffle(arrayOfGems);
// => [diamond, sapphire, ruby]

// ---------------------------------------------------------------

// 9) sample: _.sample(list, [n])
// Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.

// _.sample([1, 2, 3, 4, 5, 6]);
// => 4

// _.sample([1, 2, 3, 4, 5, 6], 3);
// => [1, 6, 2]

var sampleArray = _.sample(arrayOfGems);
// => a single random item from arrayOfGems

var sampleArrayMulti = _.sample(arrayOfGems, 2);
// => 2 random items from arrayOfGems

// ---------------------------------------------------------------

// 10) first: _.first(array, [n]) Alias: head, take
// Returns the first element of an array. Passing n will return the first n elements of the array.

// _.first([5, 4, 3, 2, 1]);
// => 5

var picnicArray = ['buns', 'hamburger', 'ketchup', 'mustard', 'grill'];
var firstOnly = _.first(picnicArray);
// => 'buns'

var first3Only = _.first(picnicArray, 3);
// => ['buns', 'hamburger', 'ketchup]'

// ---------------------------------------------------------------

// 11) last: _.last(array, [n])
// Returns the last element of an array. Passing n will return the last n elements of the array.

// _.last([5, 4, 3, 2, 1]);
// => 1

var lastOnly = _.last(picnicArray);
// => 'grill'

var last3Only = _.last(picnicArray, 3);
// => ['ketchup', 'mustard', 'grill]'

// ---------------------------------------------------------------

// 12) rest: _.rest(array, [index]) Alias: tail, drop
// Returns the rest of the elements in an array. Pass an index to return the values of the array from that index onward.

// _.rest([5, 4, 3, 2, 1]);
// => [4, 3, 2, 1]

var rest = _.rest(picnicArray, [3]);
// => ['mustard', 'grill']

// ---------------------------------------------------------------

// 13) compact: _.compact(array)
// Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "", undefined and NaN are all falsy.

// _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

var mySloppyArray = [0, '', 1, 'beans', '', false, false, true];

var mySloppyArray = _.compact(mySloppyArray)
// => [1, "beans", true]

// ---------------------------------------------------------------

// 14) size: _.size(list)
// Return the number of values in the list.

// _.size({one: 1, two: 2, three: 3});
// => 3

var howBigAreYou = _.size(objectArray);

// how does this differ from calling objectArray.length? It's still just couting indeces...

// ---------------------------------------------------------------

// 15) flatten: _.flatten(array, [shallow])
// Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will only be flattened a single level.

// _.flatten([1, [2], [3, [[4]]]]);
// => [1, 2, 3, 4];

// _.flatten([1, [2], [3, [[4]]]], true);
// => [1, 2, 3, [[4]]];

var multiLevelArray = ['strawberry', ['watermelon', 'cantelope'], ['grapes', ['apples']]];

var flattenMeBaby = _.flatten(multiLevelArray);
// => ["strawberry", "watermelon", "cantelope", "grapes", "apples"]

var flattenMeBabyShallow = _.flatten(multiLevelArray, true);
// => ["strawberry", "watermelon", "cantelope", "grapes", ['apples']]

// ---------------------------------------------------------------

// 16) without: _.without(array, [*values])
// Returns a copy of the array with all instances of the values removed.

// _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
// => [2, 3, 4]

var noTrues = _.without(someBooleans, true)
// => [false, false]

// ---------------------------------------------------------------

// 17) union: _.union(*arrays)
// Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.

// _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// => [1, 2, 3, 101, 10]

var stopUnionsBeforeTheyStart = _.union(['fear', 'beans', 'textiles' ], ['loathing', 'beans', 'ginger'], ['Las Vegas', 'ginger', 'textiles']);
// => ["fear", "beans", "textiles", "loathing", "ginger", "Las Vegas"]

// ---------------------------------------------------------------

// 18) keys: _.keys(object)
// Retrieve all the names of the object's properties.

// _.keys({one: 1, two: 2, three: 3});
// => ["one", "two", "three"]

var iceCream = {
    'melted' : false,
    'flavor' : 'vanilla',
    'price' : 'priceless'
};

var giveProps = _.keys(iceCream);
// => ["melted", "flavor", "price"]

// ---------------------------------------------------------------

// 19) values: _.values(object)
// Return all of the values of the object's properties.

// _.values({one: 1, two: 2, three: 3});
// => [1, 2, 3]

var giveValues = _.values(iceCream);
// => [false, "vanilla", "priceless"]

// ---------------------------------------------------------------

// 20) extend: _.extend(destination, *sources)
// Copy all of the properties in the source objects over to the destination object, and return the destination object. It's in-order, so the last source will override properties of the same name in previous arguments.

// _.extend({name: 'moe'}, {age: 50});
// => {name: 'moe', age: 50}

var otherworldly = {
    'origin' : 'otherworldly'
}
var otherworldlyIceCream = _.extend(iceCream, otherworldly);
// => Object {melted: false, flavor: "vanilla", price: "priceless", origin: "otherworldly"}




























