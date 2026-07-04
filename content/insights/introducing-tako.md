---
title: "Introducing Tako: A Go TUI Framework Without the Duct Tape"
description: "Tako handles DI, events, routing, and plugins so your terminal app doesn't turn into a 3000-line main.go nobody wants to touch."
date: "2026-07-05T05:00:00.000Z"
tags: [golang, tui, bubbletea, framework]
---

You handle the pixels. Tako handles DI, events, routing, and plugins — so your terminal app doesn't turn into a 3000-line `main.go` nobody wants to touch.

Website: [gettako.dev](https://gettako.dev)

Tako is a framework for building beautiful Terminal User Interfaces (TUI) and Console applications in Go. If you love the expressive, developer-first experience of frameworks like Laravel but want to build terminal apps in Go, you'll feel right at home here!

Under the hood, Tako is built entirely on top of the amazing [Bubble Tea](https://github.com/charmbracelet/bubbletea). It doesn't replace Bubble Tea; instead, it acts as an architectural layer that gives you a fluent API, a component-based workflow, and a robust structure for larger apps.

## Why did we build this?

If you've ever built a complex TUI application, you probably noticed that state management and component wiring can get messy fast. Passing dependencies down a long chain of structs and managing giant switch statements gets exhausting. Tako was created to organize that chaos and make terminal development fun again.

Here is a quick look at how Tako changes your workflow compared to vanilla Bubble Tea:

| Feature | Vanilla Bubble Tea | Tako Framework |
| :--- | :--- | :--- |
| **State Management** | Passed manually down the component tree via structs. | Managed cleanly via a central Service Container. |
| **Event Handling** | Giant `switch msg := msg.(type)` blocks in a single Update function. | DOM-like event propagation (capturing & bubbling) and a global Event Bus. |
| **Dependency Injection** | Manual wiring and pointer passing. | Automatic resolution! Just ask the container for what you need. |
| **Code Organization** | Up to you! Can get messy in large apps. | Contract-first structure inspired by Laravel's architecture. |

In short, Tako lets you focus on building awesome terminal apps without fighting the boilerplate.

## Core Principles

Tako is guided by a few simple philosophies:

- **Developer Experience (DX) First**: We want you to smile while writing code. APIs should read like natural English. We prioritize method chaining and clear, expressive naming conventions.
- **Contract-First Architecture**: All core interactions are defined by interfaces in a dedicated contracts package. This keeps your codebase modular, swappable, and free from Go's dreaded import cycles.
- **No Mutable Global State**: Global variables are a headache. In Tako, everything is neatly bound to and resolved from a thread-safe Service Container.
- **Safety and Grace**: Built-in support for graceful shutdowns (LIFO & FIFO hooks), structured error handling, and completely thread-safe internal structures.

## What's in the box?

Instead of manually instantiating structs and passing them around, you register them as **Service Providers**. When your application boots up, Tako wires everything together for you automatically.

Here is what you get out of the box:

- **Service Container**: Type-safe dependency injection powered by Go Generics.
- **CLI Engine**: Console command routing with a super easy signature parser (e.g., `make:model {name}`).
- **Logger**: A robust, multi-channel logger for different outputs (files, stdout, etc).
- **Input Manager**: Elegant helper methods to bind keyboard shortcuts and mouse events globally or per-component.
- **Event Bus**: A global event dispatcher to easily decouple your components.
- **Hot-Reloading**: A built-in filesystem watcher so you don't have to restart your app manually after every single change.

Check out the documentation and start building your next Go TUI app at [gettako.dev](https://gettako.dev)!
