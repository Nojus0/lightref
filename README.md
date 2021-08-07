# lightref
[![npm version](https://badge.fury.io/js/lightref.svg)](https://badge.fury.io/js/lightref)

#### Pass primitive types to javascript functions, by reference.
### Passed by value
```
let myVal = "hello"

testFunction(myVal);

function testFunction(val: string) {
    val += " world";
}

console.log(myVal);
// Output: "hello"
```
#
### Passed by reference
```
import { Deref, Ref} from "lightref";

const myRef = Ref<string>("hello");

testFunction(myRef);

function testFunction(ref: Ref<string>) {
    ref.value += " world";
}

console.log(myRef.value);
// Output: "hello world"
```
#
