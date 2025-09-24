---
sidebar_position: 8
---

# Scripting: Keyboard and Mouse I/O

Now that you've mastered the basics, it's time to learn how to handle **user input**! This allows your scripts to respond to keyboard presses and mouse clicks, making your games truly interactive.

We'll cover both **events** (which trigger automatically) and **functions** (which you can check manually).

---

## Keyboard Input

### Keyboard Events

These events trigger automatically when keys are pressed:

#### `onKeyPressed(keycode, key, scancode)`

Triggers every time a key is pressed:

```gs2
//#CLIENTSIDE
function onKeyPressed(keycode, key, scancode) {
    player.chat = "I just pressed " @ key @ " guys!!";
}
```

#### `onWeaponFired()`

Triggers when the weapon key is pressed (make sure you have a weapon equipped!):

```gs2
//#CLIENTSIDE
// Fireball Weapon Example
function onWeaponFired() {
    setani("grab", "");
    shootfireball(player.dir);
    freezeplayer(0.1);
    sleep(0.1);
    setani("idle", "");
}
```

### Keyboard Functions

#### `keydown(keyvalue)`

Check if a specific key is currently being held down:

```gs2
//#CLIENTSIDE
function onKeyPressed() {
    if (keydown(5)) { // S key (Attack/Sword)
        player.chat = "Shishishaww!";
    }
}
```

### Key Values Reference

| Key Value | Key Name | Description      |
| --------- | -------- | ---------------- |
| `0`       | Up       | Up arrow key     |
| `1`       | Left     | Left arrow key   |
| `2`       | Down     | Down arrow key   |
| `3`       | Right    | Right arrow key  |
| `4`       | D        | Weapon key       |
| `5`       | S        | Attack/Sword key |
| `6`       | A        | Grab key         |
| `7`       | M        | Map key          |
| `8`       | TAB      | Chat bar toggle  |
| `9`       | Q        | Inventory key    |
| `10`      | Pause    | Pause key        |

---

## Keyboard Examples

### Example 1: Simple Key Detection

```gs2
//#CLIENTSIDE
function onKeyPressed() {
    if (keydown(5)) { // S key
        player.chat = "Attack button pressed!";
    }
    if (keydown(6)) { // A key
        player.chat = "Grab button pressed!";
    }
}
```

### Example 2: Custom Movement System

```gs2
//#CLIENTSIDE
function onKeyPressed() {
    setTimer(0.05); // Start checking for held keys
}

function onTimeout() {
    temp.moved = false;

    // Loop through directional keys (0-3)
    for (temp.i = 0; temp.i < 4; temp.i++) {
        if (keydown(temp.i)) {
            // Move player in that direction
            player.x += vecx(temp.i);
            player.y += vecy(temp.i);
            temp.moved = true;
        }
    }

    // Continue looping if still moving
    if (temp.moved) {
        setTimer(0.05);
    }
}
```

---

## Mouse Input

### Mouse Events

#### `onMouseDown(mousevalue)`

Triggers when a mouse button is pressed:

```gs2
//#CLIENTSIDE
function onMouseDown(mousevalue) {
    if (mousevalue == "left") {
        player.chat = "Left click at: " @ mousex @ ", " @ mousey;
    }
    if (mousevalue == "right") {
        player.chat = "Right click detected!";
    }
}
```

#### `onMouseUp(mousevalue)`

Triggers when a mouse button is released:

```gs2
//#CLIENTSIDE
function onMouseUp(mousevalue) {
    if (mousevalue == "left") {
        player.chat = "Left mouse button released!";
    }
}
```

### Mouse Values

| Mouse Value | Description         |
| ----------- | ------------------- |
| `"left"`    | Left mouse button   |
| `"right"`   | Right mouse button  |
| `"middle"`  | Middle mouse button |
| `"double"`  | Double-left click   |

### Mouse Variables

| Variable            | Type    | Description                           |
| ------------------- | ------- | ------------------------------------- |
| `leftmousebutton`   | boolean | True if left button is held down      |
| `rightmousebutton`  | boolean | True if right button is held down     |
| `middlemousebutton` | boolean | True if middle button is held down    |
| `mousex`            | float   | Mouse X position in world coordinates |
| `mousey`            | float   | Mouse Y position in world coordinates |
| `mousescreenx`      | integer | Mouse X position on screen            |
| `mousescreeny`      | integer | Mouse Y position on screen            |
| `mousewheeldelta`   | integer | Mouse wheel scroll amount             |

---

## Mouse Examples

### Example 1: Click to Place Blocks

```gs2
//#CLIENTSIDE
function onCreated() {
    this.counter = 0;
}

function onMouseDown(mousevalue) {
    if (mousevalue == "left") {
        // Place a block at mouse position
        showimg(200 + this.counter, "block.png", mousex - 1, mousey - 1);
        this.counter++;
        if (this.counter > 20) this.counter = 0; // Reuse image IDs
    }
}
```

### Example 2: Interactive Block with Mouse

```gs2
//#CLIENTSIDE
function onCreated() {
    // Create a block that follows the mouse
    temp.img = showimg(200, "block.png", mousescreenx - 16, mousescreeny - 16);
    temp.img.layer = 4;
    setTimer(0.05);
}

function onTimeout() {
    // Update block position to follow mouse
    with (findimg(200)) {
        x = mousescreenx;
        y = mousescreeny;
    }

    // Left click: Make block larger
    if (leftmousebutton) {
        findimg(200).zoom += 0.05;
    }

    // Right click: Make block smaller
    if (rightmousebutton) {
        findimg(200).zoom -= 0.05;
    }

    // Middle click: Rotate block
    if (middlemousebutton) {
        findimg(200).rotation += 0.05;
    }

    setTimer(0.05);
}
```

### Example 3: Drawing System

```gs2
//#CLIENTSIDE
function onCreated() {
    this.drawing = false;
    this.drawCounter = 0;
}

function onMouseDown(mousevalue) {
    if (mousevalue == "left") {
        this.drawing = true;
        setTimer(0.05);
    }
}

function onMouseUp(mousevalue) {
    if (mousevalue == "left") {
        this.drawing = false;
    }
}

function onTimeout() {
    if (this.drawing && leftmousebutton) {
        // Draw dots where the mouse is
        temp.dot = showimg(300 + this.drawCounter, "dot.png", mousex, mousey);
        temp.dot.alpha = 0.8;

        this.drawCounter++;
        if (this.drawCounter > 100) this.drawCounter = 0;

        setTimer(0.05);
    }
}
```

---

## Advanced Techniques

### Combining Keyboard and Mouse

```gs2
//#CLIENTSIDE
function onCreated() {
    this.mode = "normal";
    setTimer(0.05);
}

function onTimeout() {
    // Hold SHIFT (or any key) for different behavior
    if (keydown(5)) { // S key held
        this.mode = "attack";
    } else {
        this.mode = "normal";
    }

    // Mouse behavior changes based on mode
    if (leftmousebutton) {
        if (this.mode == "attack") {
            // Attack at mouse position
            shootfireball(player.dir);
        } else {
            // Normal interaction
            player.chat = "Clicked at: " @ mousex @ ", " @ mousey;
        }
    }

    setTimer(0.05);
}
```

### Input Validation

```gs2
//#CLIENTSIDE
function onMouseDown(mousevalue) {
    // Only allow clicks within a certain area
    if (mousex >= 10 && mousex <= 50 && mousey >= 10 && mousey <= 50) {
        player.chat = "Valid click area!";
    } else {
        player.chat = "Click inside the designated area!";
    }
}
```

---

Remember: Input handling is what makes games feel responsive and fun. Practice these examples and experiment with different combinations to create engaging interactive experiences!
