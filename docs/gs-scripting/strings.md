---
sidebar_position: 3
---

# Scripting: Strings

In GraalScript, **strings** are sequences of text used to store words, phrases, or any other set of characters.  
They are very important because much of the interaction between the player and the game happens through text, messages, and string variables.

We won't cover every possible method here, but let's go over some of the most basic and useful ones:

---

### SPC

The `SPC` operator **concatenates strings (joins text) with a space between them**.

```gs2
echo("Hello" SPC "World");
// Output: Hello World
```

### @

The `@` operator also concatenates strings, but without adding a space.

```gs2
echo("Hello" @ "World");
// Output: HelloWorld
```

### length()

The `.length()` method returns the **length of a string**, meaning how many characters it contains.

```gs2
echo("Hello".length());
// Output: 5
echo("GraalScript".length());
// Output: 11
```

### upper() and lower()

The `.upper()` method converts all characters in a string to uppercase, while the `.lower()` method converts them to lowercase.

```gs2
echo("hello".upper());
// Output: HELLO
echo("WORLD".lower());
// Output: world
```

### substring()

The `.substring(start, end)` method extracts a portion of a string, starting from the `start` index up to, but not including, the `end` index.

```gs2
echo("GraalScript".substring(0, 5));
// Output: Graal
echo("GraalScript".substring(5, 11));
// Output: Script
echo("GraalScript".substring(5));
// Output: Script
// If the end index is omitted, it goes to the end of the string
```

### .pos()

The `.pos(substring)` method returns the **position (index) of a substring within a string**. If the substring is not found, it returns -1.

```gs2
echo("GraalScript".pos("Script"));
// Output: 5
echo("GraalScript".pos("Java"));
// Output: -1
```

### tokenize()

The `.tokenize(delimiter)` method splits a string into an array of substrings based on a specified delimiter.

```gs2
temp.str = "apple,banana,cherry";
temp.arr = temp.str.tokenize(",");
echo(temp.arr[0]); // Output: apple
echo(temp.arr[1]); // Output: banana
echo(temp.arr[2]); // Output: cherry
```
