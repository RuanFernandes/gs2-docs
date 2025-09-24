---
sidebar_position: 5
---

# Scripting: Math

Math in programming is actually much simpler than what you learned in school! You'll mostly be doing basic calculations like addition, subtraction, and maybe some multiplication. Don't worry - no complex formulas here!

Let's start with the basics and work our way up.

---

## Basic Math Operations

### Setting Up Variables

First, let's create some variables to work with:

```gs2
function onCreated() {
    temp.a = 2;
    temp.b = 4;
    temp.result = 0;
    echo("Result: " @ temp.result);
}
```

This will show `Result: 0` because we haven't done any math yet.

### Addition

Let's add our two numbers together:

```gs2
function onCreated() {
    temp.a = 2;
    temp.b = 4;
    temp.result = temp.a + temp.b;
    echo("Result: " @ temp.result);
}
```

**Output:** `Result: 6`

Congratulations! You just performed your first mathematical operation in GraalScript.

---

## Math Operators

Here are all the basic math operators you can use:

| Operator | Operation          | Example | Result |
| -------- | ------------------ | ------- | ------ |
| `+`      | Addition           | `5 + 3` | `8`    |
| `-`      | Subtraction        | `5 - 3` | `2`    |
| `*`      | Multiplication     | `5 * 3` | `15`   |
| `/`      | Division           | `6 / 3` | `2`    |
| `^`      | Exponents (Power)  | `2 ^ 3` | `8`    |
| `%`      | Modulo (Remainder) | `5 % 2` | `1`    |

### Examples of Each Operator

```gs2
function onCreated() {
    temp.a = 10;
    temp.b = 3;

    echo("Addition: " @ temp.a @ " + " @ temp.b @ " = " @ (temp.a + temp.b));
    echo("Subtraction: " @ temp.a @ " - " @ temp.b @ " = " @ (temp.a - temp.b));
    echo("Multiplication: " @ temp.a @ " * " @ temp.b @ " = " @ (temp.a * temp.b));
    echo("Division: " @ temp.a @ " / " @ temp.b @ " = " @ (temp.a / temp.b));
    echo("Exponent: " @ temp.a @ " ^ " @ temp.b @ " = " @ (temp.a ^ temp.b));
    echo("Modulo: " @ temp.a @ " % " @ temp.b @ " = " @ (temp.a % temp.b));
}
```

**Output:**

```
Addition: 10 + 3 = 13
Subtraction: 10 - 3 = 7
Multiplication: 10 * 3 = 30
Division: 10 / 3 = 3.33333
Exponent: 10 ^ 3 = 1000
Modulo: 10 % 3 = 1
```

### Understanding Modulo (%)

The modulo operator `%` gives you the **remainder** after division:

-   `5 % 2 = 1` (because 5 ÷ 2 = 2 remainder 1)
-   `8 % 3 = 2` (because 8 ÷ 3 = 2 remainder 2)
-   `10 % 5 = 0` (because 10 ÷ 5 = 2 remainder 0)

This is useful for things like checking if a number is even or odd!

---

## Assignment Operators (Shortcuts)

Instead of writing `temp.a = temp.a + 5`, you can use shortcuts:

| Operator | Long Form   | Short Form | Description         |
| -------- | ----------- | ---------- | ------------------- |
| `+=`     | `a = a + b` | `a += b`   | Add and assign      |
| `-=`     | `a = a - b` | `a -= b`   | Subtract and assign |
| `*=`     | `a = a * b` | `a *= b`   | Multiply and assign |
| `/=`     | `a = a / b` | `a /= b`   | Divide and assign   |

### Example: Using Assignment Operators

```gs2
function onCreated() {
    temp.score = 100;
    echo("Starting score: " @ temp.score);

    temp.score += 50;  // Same as: temp.score = temp.score + 50
    echo("After bonus: " @ temp.score);

    temp.score -= 25;  // Same as: temp.score = temp.score - 25
    echo("After penalty: " @ temp.score);

    temp.score *= 2;   // Same as: temp.score = temp.score * 2
    echo("After doubling: " @ temp.score);
}
```

**Output:**

```
Starting score: 100
After bonus: 150
After penalty: 125
After doubling: 250
```

---

## Practical Examples

### Example 1: Health and Damage System

```gs2
function onCreated() {
    temp.maxHealth = 100;
    temp.currentHealth = temp.maxHealth;
    temp.damage = 25;

    echo("Player starts with " @ temp.currentHealth @ " health");

    temp.currentHealth -= temp.damage;
    echo("Player takes " @ temp.damage @ " damage");
    echo("Player now has " @ temp.currentHealth @ " health");

    if (temp.currentHealth <= 0) {
        echo("Player is dead!");
    } else {
        echo("Player is still alive");
    }
}
```

### Example 2: Experience and Level System

```gs2
function onCreated() {
    temp.currentExp = 250;
    temp.expPerLevel = 100;

    temp.playerLevel = temp.currentExp / temp.expPerLevel;
    temp.leftoverExp = temp.currentExp % temp.expPerLevel;

    echo("Player Level: " @ temp.playerLevel);
    echo("Experience towards next level: " @ temp.leftoverExp @ "/" @ temp.expPerLevel);
}
```

---

## Order of Operations

Just like in regular math, operations happen in a specific order:

1. **Parentheses** `()`
2. **Exponents** `^`
3. **Multiplication and Division** `*` `/` (left to right)
4. **Addition and Subtraction** `+` `-` (left to right)

### Example: Using Parentheses

```gs2
function onCreated() {
    temp.a = 2;
    temp.b = 3;
    temp.c = 4;

    // Without parentheses: 2 + 3 * 4 = 2 + 12 = 14
    temp.result1 = temp.a + temp.b * temp.c;
    echo("Without parentheses: " @ temp.result1);

    // With parentheses: (2 + 3) * 4 = 5 * 4 = 20
    temp.result2 = (temp.a + temp.b) * temp.c;
    echo("With parentheses: " @ temp.result2);
}
```

**Output:**

```
Without parentheses: 14
With parentheses: 20
```

---

## Practice Challenge

Try to figure out what values of `temp.a` and `temp.b` will make this script congratulate you:

```gs2
function onCreated() {
    temp.a = 1;  // Change this value
    temp.b = 2;  // Change this value

    temp.a = temp.a - temp.b;
    temp.a = temp.a + 4;
    temp.b += temp.a;

    if (temp.a == 7 && temp.b == 10) {
        echo("You're awesome at math!");
    } else {
        echo("Not quite right. Try again!");
        echo("Current values - a: " @ temp.a @ ", b: " @ temp.b);
    }
}
```

**Hint:** Work through the math step by step:

1. What happens to `temp.a` after the subtraction?
2. What happens to `temp.a` after adding 4?
3. What happens to `temp.b` after adding `temp.a` to it?
4. What starting values would give you `temp.a = 7` and `temp.b = 10`?

---

## Tips for Using Math in Scripts

1. **Use meaningful variable names**: `temp.playerHealth` is better than `temp.h`
2. **Use parentheses** when you're unsure about order of operations
3. **Test your math** with simple values first
4. **Comment complex calculations** to explain what they do

Math in GraalScript is a powerful tool for creating dynamic gameplay mechanics. Practice with these examples and you'll be calculating like a pro!
