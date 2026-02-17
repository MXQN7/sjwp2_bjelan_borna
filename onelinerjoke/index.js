import { getRandomJoke as _getRandomJoke, getRandomJokeWithTag as _getRandomJokeWithTag } from 'one-liner-joke';

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = _getRandomJoke();
console.log(getRandomJoke)

/*
One can add exclusion filter for the jokes tags
default is ['racist', 'dirty', 'sex']
*/
var getRandomJoke = _getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });
console.log(getRandomJoke)


/*
The variable getRandomJoke will contain a random joke with a tag and with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/

var getRandomJokeWithTag = _getRandomJokeWithTag('stupid');
console.log(getRandomJokeWithTag)

/*
One can add exclusion filter for the jokes tags
default is ['racist', 'dirty', 'sex']
*/
var getRandomJoke = _getRandomJokeWithTag('stupid', {
  'exclude_tags': ['dirty', 'racist', 'marriage']
});
console.log(getRandomJoke)