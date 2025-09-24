---
sidebar_position: 2
---

# Scripting: Comments

You may have noticed the // in some examples.
Anything after // is a comment, and it is ignored by the script.

Comments are great for explaining what your code does, or for temporarily disabling lines of code when testing.

```gs2
function onCreated() {
    // This line will not run
    // echo("Hello!");
}
```

You can also create multi-line comments using /\* and \*/:

```gs2
function onCreated() {
    /*
    This is a multi-line comment.
    None of this will run.
    echo("Hello!");
    echo("World!");
    */
}
```
