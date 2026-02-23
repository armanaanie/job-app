1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?



Answer: Main difference is how they select elements and return.
getElementById select one specific element by its id;
getElementsByClassName select all same class name element,element can be one or more.its select group.
querySelector select the first element that matches a css selector.it can be id,tag or class.
querySelectorAll select all elements which match will selector;
querySelector and querySelectorAll return NodeList,on the other hand getElementById and getElementsByClassName return HTML collection.Eventhough both of them are array like,but not complete array.



2. How do you create and insert a new element into the DOM?
Answer: By using createElement() i can create a new element.And using appendChild() or append() i can insert the new element.



3. What is Event Bubbling? And how does it work?



Answer: By targeting (click) any element if an event start and move upward through its parent elements is called Event bubbling.And its work like bubble.At first the event happens on the target elements then move to its parents and keep going until it reach the window itself.




4. What is Event Delegation in JavaScript? Why is it useful?


Answer: Event Delegation is a js technique to avoid adding too many event listener to multiple child element.Rather than its attach one event listener to a parent element to control child elements. 


5. What is the difference between preventDefault() and stopPropagation() methods?


Answer:This are 2 different methods of js.
preventDefault() is for stop page reload.
And stopPropagation() is for stop the event form moving to parents elements.