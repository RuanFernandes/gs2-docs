---
sidebar_position: 1
---

# Scripting: Variables

Now that we've said **Hello World**, it's time to learn about something even more important: **Variables**! 🎉

## What is a Variable?

A **variable** is like a box where you can store information.  
This information can be **numbers, text, objects, or even lists**.

Example:

```gs2
function onCreated() {
    val = "Rawrrr!";
    echo(val);
}
```

When you run this, the console will print:

`Rawrrr!`

Here, the text `Rawrrr!` was stored in the variable `val`, and then displayed with `echo`.

## Data Types in Variables

In GraalScript2, you don’t need to declare what type a variable will be.
You can store different types of values in the same variable:

```gs2
function onCreated() {
    // Integer
    val = 1;

    // Float (decimal number)
    val = 3.14;

    // String (text)
    val = "Meow :3";

    // Object reference
    val = player;

    // Array (list of values)
    val = {1, 2, 3};
}
```

## Arrays (Lists)

**Arrays** are lists that can store multiple values in a single variable.  
In GraalScript2, arrays are super simple — just use curly braces `{}`:

```gs2
function onCreated() {
    // Array of names
    temp.names = {"Ruan", "Fireenn", "Cody"};

    // Access individual items using [index] (starts at 0)
    echo(temp.names[0]); // Prints: Ruan
    echo(temp.names[1]); // Prints: Fireenn
    echo(temp.names[2]); // Prints: Cody
}
```

### Mixed Data Types

Arrays can store **any data type** — you don't need to stick to just one:

```gs2
function onCreated() {
    // Mix numbers, text, and boolean values
    temp.someData = {100, "Ruan", true};

    echo(temp.someData[0]); // Prints: 100
    echo(temp.someData[1]); // Prints: Ruan
    echo(temp.someData[2]); // Prints: true
}
```

### Nested Arrays (Arrays Inside Arrays)

You can even put arrays inside other arrays:

```gs2
function onCreated() {
    // Array of player data: [name, health]
    temp.playersHealth = {
        {"Ruan", 100},
        {"Hailey", 150}
    };

    // Access nested data
    echo(temp.playersHealth[0][0]); // Prints: Ruan
    echo(temp.playersHealth[0][1]); // Prints: 100
    echo(temp.playersHealth[1][0]); // Prints: Hailey
}
```

**Remember:** Array indexing starts at `0`, not `1`!

## Variable Prefixes

Most of the time, you don’t just use `val` or `x` as your variables.
Instead, GraalScript2 uses prefixes to decide where the variable is stored and how long it exists.

Here are the most common ones:

> `this.` → Refers to the object the script is attached to.

```gs2
this.health = 100; // Sets the health of the object
```

> `thiso.` → Refers to the original object when called from another scope.

This one is a bit advanced — don’t worry if you don’t fully get it now.

> `temp.` → Temporary variable. Exists only while the function runs, then disappears.

```gs2
// temp.randomNumber is gone after this function ends
function onCreated() {
    temp.randomNumber = random(1, 100);
    echo(temp.randomNumber); // Prints a random number between 1 and 100
}
```

> `player.` → Refers to the player object that triggered the function.

```gs2
// Prints the player's nickname
echo(player.nick);
```

> `client.`→ Stores data saved to the player’s account (can be read/written on both client-side and server-side).

```gs2
// Saves an variable to the player's account
client.preferredColor = "blue";
```

> `clientr.` → Read-only variable stored in the player's account (can be written on server-side).

```gs2
// Saves an variable to the player's account, where the client-side can't modify it (making it more secure)
clientr.inventory_size = 20;
```

> `server.`→ Stores global data shared by the entire server (server flags).

```gs2
// Sets a global flag for an event
server.eventActive = true;
```

> `serverr.` → Another global data variable, but can be read by clients (server flags).

```gs2
// Sets a global time variable that clients can read
serverr.globalTime = 120;
```

## Quick Recap

Use `temp.` for short-term values (inside functions).

Use `this.` when storing values on the object (like an NPC or weapon).

Use `player.`, `client.`, or `server.` when storing information about players or the whole server.

With practice, prefixes will become second nature! 🚀
