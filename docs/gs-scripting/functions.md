---
sidebar_position: 1
---

# Scripting: Functions

In this section, we will dive deeper into **functions** in GraalScript2.

## What is a Function?

A **function** is a block of code that contains multiple instructions. You have already seen the basic structure in the "Basics" section:

```gs2
function onCreated() {

}
```

### Function Syntax

A **function** is defined with the function keyword, followed by a name and parentheses ():

```gs2
function functionName() {
    // Your code here
}
```

-   **functionName**: The name of your function.
-   **()**: Parentheses can contain parameters (optional).
-   **\{\}**: Curly braces define the block of code that will be executed when the function is called.

### Event Functions

Some functions are automatically called by the game when certain events happen. For example:

-   `onCreated()` – Always executed when the script is created.
-   `onPlayerEnters()` – Called when a player enters in a level.
-   `onPlayerChats()` – Called when a player sends a chat message.

There are many other event functions, but we won’t go into them in detail right now.

### Creating Your First Custom Function

You can also create your own functions to organize your code. Let's create a simple function called sayHello:

```gs2
function sayHello() {
    echo("Hello World!");
}
```

-   Here, **sayHello** is the function name.
-   Inside the curly braces **\{\}**, we wrote the code that will run when the function is called.

You can call this function anywhere in your script, so let's call it in the onCreated function:

```gs2
function onCreated() {
    sayHello();
}
```

This will print "Hello World!" in the server console or to the player depending on where it is executed.

![Function Example](/img/custom_function.png)

Functions are very useful for organizing code and reusing instructions multiple times. You can define as many functions as you want and call them wherever you need.
