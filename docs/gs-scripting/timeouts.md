---
sidebar_position: 7
---

# Scripting: Timeouts & Looping

When building systems for your server, you'll often need scripts that **run continuously**. Examples include moving objects, updating displays, or checking conditions repeatedly.

There are two main approaches to create continuous loops in GraalScript2, and it's important to understand when to use each one.

---

## Method 1: Basic Timeout Loop

The most common way to create a continuous loop is using `setTimer()` and `onTimeout()`:

```gs2
//#CLIENTSIDE

function onCreated() {
    this.ticker = 0;
    setTimer(0.05); // Start the loop with 0.05 second delay
}

function onTimeout() {
    this.ticker++;
    player.chat = "Count: " @ this.ticker;
    setTimer(1); // Continue the loop with 1 second delay
}
```

### How It Works:

1. **`setTimer(seconds)`**: Schedules the next `onTimeout()` call
2. **`onTimeout()`**: Runs when the timer expires
3. **Repeat**: Call `setTimer()` again to continue the loop

This is your **go-to method** for most repetitive tasks!

---

## Method 2: Scheduled Events

For more complex scenarios, you can use `scheduleevent()`:

```gs2
//#CLIENTSIDE

function onCreated() {
    this.scheduleevent(0.05, "Looping", 0);
}

function onLooping(ticker) {
    ticker++;
    player.chat = "Count: " @ ticker;
    this.scheduleevent(1, "Looping", ticker);
}
```

### How It Works:

1. **`scheduleevent(delay, eventName, parameter)`**: Schedules a custom event
2. **Custom Function**: The function name matches your event name (`onLooping`)
3. **Parameters**: You can pass data between calls

### When to Use Scheduled Events:

-   When you need to pass data between iterations
-   When you want multiple different loops running
-   When you need more control over timing and parameters

---

## Practical Examples

### Example 1: Moving Object in Circle

```gs2
//#CLIENTSIDE

function onCreated() {
    this.angle = 0;
    this.centerX = 30;
    this.centerY = 30;
    this.radius = 5;
    setTimer(0.05);
}

function onTimeout() {
    this.angle += 0.1; // Rotate slightly

    // Calculate circular position
    this.x = this.centerX + cos(this.angle) * this.radius;
    this.y = this.centerY - sin(this.angle) * this.radius;

    setTimer(0.05); // Continue at 20 FPS
}
```

### Example 2: Health Regeneration System

```gs2
//#SERVERSIDE

function onCreated() {
    this.scheduleevent(5, "RegenerateHealth", null);
}

function onRegenerateHealth() {
    if (this.health < this.maxhealth) {
        this.health += 10;
        echo("Regenerating health... (" @ this.health @ "/" @ this.maxhealth @ ")");
    }

    // Continue regeneration every 5 seconds
    this.scheduleevent(5, "RegenerateHealth", null);
}
```

### Example 3: Multiple Timers

```gs2
//#CLIENTSIDE

function onCreated() {
    // Fast loop for smooth movement
    this.scheduleevent(0.05, "UpdateMovement", 0);

    // Slower loop for status updates
    this.scheduleevent(1, "UpdateStatus", 0);
}

function onUpdateMovement() {
    // Smooth animation code here
    this.scheduleevent(0.05, "UpdateMovement", 0);
}

function onUpdateStatus() {
    // Update UI, check conditions, etc.
    this.scheduleevent(1, "UpdateStatus", 0);
}
```

---

## Frame Rate Limitations

### Client-Side (V6 Client)

-   **Minimum delay**: `0.05` seconds (20 FPS)
-   **Why**: Graal V6 is capped at 20 frames per second
-   **Going faster**: Values below 0.05 won't make it run faster

### Unity Client (Modern)

-   **No FPS cap**: You can go below 0.05 seconds!
-   **Higher performance**: Smoother animations and more responsive loops
-   **Future-proof**: Better for modern gameplay requirements

```gs2
//#CLIENTSIDE
// This works in Unity Client but not Classic Client
function onCreated() {
    setTimer(0.01); // 100 FPS - only works in Unity!
}
```

---

## Best Practices

### ✅ Do This:

```gs2
// Use events when possible instead of loops
function onPlayerEnters() {
    // React to events rather than checking constantly
    echo("Player entered the area!");
}

// Use appropriate timing
function onCreated() {
    setTimer(1); // 1 second for non-critical updates
}

// Stop loops when not needed
function onDestroy() {
    // Timer automatically stops when object is destroyed
}
```

### ❌ Avoid This:

```gs2
// Don't use unnecessarily fast loops
function onCreated() {
    setTimer(0.01); // Too fast for most purposes!
}

// Don't create infinite loops without purpose
function onTimeout() {
    // Missing setTimer() - loop stops here!
}

// Don't loop for things that have events
function onTimeout() {
    // Checking for player collision every frame
    // Use onPlayerTouchsMe() event instead!
    setTimer(0.05);
}
```

---

## When to Use Each Method

### Use **setTimeout/onTimeout** for:

-   Simple repeating tasks
-   Animations and movement
-   Regular status updates
-   Most common scenarios

### Use **scheduleevent** for:

-   Complex timing scenarios
-   Passing data between iterations
-   Multiple different loops
-   Delayed one-time events

### Use **Events** instead of loops for:

-   Player interactions
-   Collision detection
-   State changes
-   Most game mechanics

---

## Performance Tips

1. **Longer delays are better**: Use 1 second instead of 0.05 when possible
2. **Stop unused loops**: Don't let timers run when objects are inactive
3. **Batch operations**: Do multiple things in one timeout rather than separate loops
4. **Use events**: Always prefer events over checking conditions in loops

Remember: **You should never use a loop when you can use an event instead!** Events are more efficient and responsive than constantly checking conditions.
