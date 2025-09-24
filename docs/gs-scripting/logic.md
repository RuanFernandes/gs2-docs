---
sidebar_position: 4
---

# Scripting: Logic

**Logic** is what makes your scripts smart! It allows your code to make decisions and react to different situations. Think of it like teaching your script to think: "If this happens, then do that."

If you're new to programming logic, don't worry - we'll start from the very basics and build up gradually.

---

## The Problem Without Logic

Let's start with a simple example to show why we need logic:

```gs2
function onCreated() {
    temp.value = 3;
    echo("value equals 1");
    echo("value equals 2");
    echo("value equals 3");
}
```

If you run this script, it will print ALL three messages, even though our value is only 3. That's not very smart, is it?

**Output:**

```
value equals 1
value equals 2
value equals 3
```

---

## The Solution: If Statements

We can fix this using **if statements**. An if statement only runs code when a certain condition is true:

```gs2
function onCreated() {
    temp.value = 3;
    if (temp.value == 1) {
        echo("value equals 1");
    }
    if (temp.value == 2) {
        echo("value equals 2");
    }
    if (temp.value == 3) {
        echo("value equals 3");
    }
}
```

Now it will only print "value equals 3" because that's the only condition that's true!

**Output:**

```
value equals 3
```

### Basic If Statement Syntax

```gs2
if (condition) {
    // Code to run if condition is true
}
```

-   **condition**: A test that results in true or false
-   **\{\}**: Curly braces contain the code to run when the condition is true

---

## Comparison Operators

To create conditions, we use **comparison operators**. These compare two values and return true or false:

| Operator | Meaning               | Example                                    |
| -------- | --------------------- | ------------------------------------------ |
| `==`     | Equals                | `a == b` (a equals b)                      |
| `!=`     | Not equals            | `a != b` (a does not equal b)              |
| `>`      | Greater than          | `a > b` (a is greater than b)              |
| `<`      | Less than             | `a < b` (a is less than b)                 |
| `>=`     | Greater than or equal | `a >= b` (a is greater than or equal to b) |
| `<=`     | Less than or equal    | `a <= b` (a is less than or equal to b)    |

### Example: Testing All Operators

```gs2
function onCreated() {
    temp.a = 5;
    temp.b = 3;

    if (temp.a == temp.b) echo("a equals b");
    if (temp.a != temp.b) echo("a does not equal b");
    if (temp.a > temp.b)  echo("a is greater than b");
    if (temp.a < temp.b)  echo("a is less than b");
    if (temp.a >= temp.b) echo("a is greater than or equal to b");
    if (temp.a <= temp.b) echo("a is less than or equal to b");
}
```

**Output:**

```
a does not equal b
a is greater than b
a is greater than or equal to b
```

---

## Else Statements

Sometimes you want to do something when a condition is **not** true. That's where `else` comes in:

```gs2
function onCreated() {
    temp.value = 2;
    if (temp.value == 3) {
        echo("Welcome, number 3!");
    } else {
        echo("Sorry, we only accept 3s here. You are: " @ temp.value);
    }
}
```

**Output:**

```
Sorry, we only accept 3s here. You are: 2
```

### Else If: Multiple Conditions

You can chain multiple conditions using `else if`:

```gs2
function onCreated() {
    temp.score = 85;

    if (temp.score >= 90) {
        echo("Grade: A - Excellent!");
    } else if (temp.score >= 80) {
        echo("Grade: B - Good job!");
    } else if (temp.score >= 70) {
        echo("Grade: C - Not bad");
    } else {
        echo("Grade: F - Study harder!");
    }
}
```

**Output:**

```
Grade: B - Good job!
```

---

## Logical Operators

You can combine multiple conditions using **logical operators**:

| Operator | Meaning                        | Example                |
| -------- | ------------------------------ | ---------------------- |
| `&&`     | AND (both must be true)        | `(a == 1 && b == 2)`   |
| `\|\|`   | OR (at least one must be true) | `(a == 1 \|\| b == 2)` |

### Example: AND Operator

```gs2
function onCreated() {
    temp.username = "Alice";
    temp.level = 25;

    if (temp.username == "Alice" && temp.level >= 20) {
        echo("Welcome back, Alice! You're high level enough to enter.");
    } else {
        echo("Access denied.");
    }
}
```

### Example: OR Operator

```gs2
function onCreated() {
    temp.day = "Saturday";

    if (temp.day == "Saturday" || temp.day == "Sunday") {
        echo("It's the weekend! Time to relax.");
    } else {
        echo("It's a weekday. Time to work!");
    }
}
```

---

## Range Checking

When you need to check if a value falls within a specific range, GraalScript provides a cleaner syntax using the `in` operator:

### Using the `in` Operator for Ranges

```gs2
if (value in |min,max|) {
    // Code to run if value is between min and max (inclusive)
}
```

### Example: Range Checking

```gs2
function onCreated() {
    temp.playerLevel = 15;
    temp.playerX = 5;
    temp.playerY = 8;

    // Check if player level is between 10 and 20
    if (temp.playerLevel in |10,20|) {
        echo("Player is in the intermediate level range");
    }

    // Check if player is within safe zone coordinates
    if (temp.playerX in |0,10| && temp.playerY in |0,10|) {
        echo("Player is in the safe zone");
    }
}
```

### Comparing Range Checking Methods

```gs2
function onCreated() {
    temp.score = 85;

    // Traditional way (longer)
    if (temp.score >= 80 && temp.score <= 90) {
        echo("Good score! (Traditional method)");
    }

    // Using range operator (cleaner)
    if (temp.score in |80,90|) {
        echo("Good score! (Range method)");
    }
}
```

Both methods work the same way, but the `in |min,max|` syntax is more readable and less prone to errors when checking ranges.

---

## Loops: Repeating Code

Sometimes you need to repeat the same code multiple times. Instead of copying and pasting, you can use **loops**!

### While Loops

A `while` loop repeats code as long as a condition remains true:

```gs2
function onCreated() {
    temp.count = 1;

    while (temp.count <= 3) {
        echo("Count is: " @ temp.count);
        temp.count++; // Increase count by 1
    }

    echo("Loop finished!");
}
```

**Output:**

```
Count is: 1
Count is: 2
Count is: 3
Loop finished!
```

**⚠️ Warning:** Make sure your condition eventually becomes false, or you'll create an infinite loop!

### For Loops (Traditional)

For loops are perfect when you know exactly how many times you want to repeat something:

```gs2
function onCreated() {
    // Count from 0 to 2 (3 times total)
    for (temp.i = 0; temp.i < 3; temp.i++) {
        echo("Loop number: " @ temp.i);
    }
}
```

**Output:**

```
Loop number: 0
Loop number: 1
Loop number: 2
```

**For Loop Syntax:**

```gs2
for (start; condition; increment) {
    // Code to repeat
}
```

-   **start**: Initialize the counter variable
-   **condition**: Loop continues while this is true
-   **increment**: What happens after each loop (usually `++` to add 1)

### For Loops with Arrays (For-Each)

The most useful type of loop is iterating through arrays. GraalScript2 makes this super easy:

```gs2
function onCreated() {
    temp.names = {"Ruan", "Fireenn", "Cody"};

    // Loop through each name in the array
    for (temp.name : temp.names) {
        echo("Hello, " @ temp.name @ "!");
    }
}
```

**Output:**

```
Hello, Ruan!
Hello, Fireenn!
Hello, Cody!
```

**For-Each Syntax:**

```gs2
for (variable : array) {
    // Code runs for each item in the array
    // 'variable' contains the current item
}
```

### Practical Loop Examples

#### Example 1: Processing Player Inventory

```gs2
function checkInventory() {
    temp.inventory = {"Sword", "Shield", "Potion", "Key"};

    echo("Your inventory contains:");
    for (temp.item : temp.inventory) {
        echo("- " @ temp.item);
    }
}
```

#### Example 2: Counting Down

```gs2
function countdown() {
    temp.seconds = 5;

    while (temp.seconds > 0) {
        echo("Countdown: " @ temp.seconds);
        temp.seconds--;
        sleep(1); // Wait 1 second
    }

    echo("Blast off!");
}
```

### Loop Control Keywords

-   **`break`**: Exit the loop immediately
-   **`continue`**: Skip to the next iteration

```gs2
function onCreated() {
    temp.numbers = {1, 2, 3, 4, 5};

    for (temp.num : temp.numbers) {
        if (temp.num == 3) {
            continue; // Skip 3
        }
        if (temp.num == 5) {
            break; // Stop before 5
        }
        echo(temp.num);
    }
}
```

**Output:**

```
1
2
4
```

---

## Practice Time!

Try modifying these examples and experiment with different values to get comfortable with logic statements. Understanding these concepts is crucial for creating interactive and dynamic scripts!
