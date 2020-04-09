/*
This is part 1 of 'Master Javascript' series.  In this tutorial, we will learn about conditional statements.  Conditional statements allow us to run certain code based on a specific condition.  For instance, "If it is sunny today, I will go for a walk.  Otherwise, I will stay inside and binge watch Game of Throans again".  So if we were to write this out so that Javascript can understand it it would be:
*/
var sunny = false;
if(sunny == true) {
  console.log('I\'m going for a walk!');
} else {
  console.log('Where\'s the remote? Game of Throans awaits!');
}

/*
So this is a basic if...else statement.  If true then do one thing, otherwise, do something else. 
So there are some concepts here that might escape.  
1) We aren't comparing sunny to true.  In other words: "if(sunny === true)"
The reason is, an if statement checkes for true false conditions.  We initialized sunny on line 4 to be true.  By just stating "if(sunny)", JavaScript will interpret it as "if(sunny === true)".
2) Notice on line 6 and 8 we are wrapping our string in back-ticks.  We could have wrote it using single quotes as well, but then we would have had to escape our single quotes within the string.  For instance, we could have wrote this instead. 'I\'m going for a walk!'.  See the escape character ('\')? This is a valid and normal way of writing it, but less clean than just using the back-ticks to wrap the whole string. 

Now run the code. 

Now change the value on line 4 from true to false. 

Now run the code again.
*/