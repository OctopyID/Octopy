---
title: Go Mail Router
description: Blazing fast postfix policy daemon and mail router written in Go.
repo: octopy-id/go-mail-router
language: Go
tags:
  - Go
  - Postfix
  - SMTP
featured: true
---

# Go Mail Router

An advanced policy delegation daemon for Postfix designed for enterprise mail environments handling millions of transactions.

## Architecture

Built entirely in Go, leveraging goroutines to handle simultaneous SMTP policy requests with sub-millisecond latency. 

- Connects directly to Redis for rate-limiting.
- PostgreSQL backend for domain/user routing rules.
- Native Prometheus metrics endpoint for monitoring.

## Why Go?

In mail routing, every millisecond counts. Moving from Python/PHP to Go reduced our memory footprint by 80% and eliminated request queuing under heavy load.
