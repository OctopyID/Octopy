# Commit Rules — Tako Framework

> Commits must follow rules. Applies to human & AI.

---

## Format: Conventional Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short description>

[optional body]
```

### Types

| Type | When to use |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `refactor` | Restructure, no behavior change |
| `test` | Tests |
| `docs` | Documentation |
| `chore` | Build, config, tools |
| `perf` | Performance |
| `ci` | CI/CD |
| `revert` | Revert |

### Scope (Optional)

Affected subsystem. **One lowercase word**:

```
feat(router): add PopTo() navigation method
fix(container): resolve circular dependency panic
refactor(eventbus): simplify subscriber cleanup
```

Scopes: `container`, `router`, `middleware`, `eventbus`, `state`, `config`, `kernel`, `km`, `profiler`

---

## Rule 1: Keep Short

Subject **≤ 50 chars** (hard max 72). Explain *what*, not *how/why*.

```
# ✅ CORRECT
feat(router): add keep-alive screen preservation

# ❌ WRONG
feat(router): add the ability for screens to be kept alive in memory
```

---

## Rule 2: No File/Folder Names

Describe **conceptual change**, not files.

```
# ✅ CORRECT
feat(container): add Alias() binding support

# ❌ WRONG
chore: update main.go
fix: fix bug in stack_router.go
```

---

## Rule 3: Imperative Mood

Command form: "This commit will..."

```
# ✅ CORRECT
add screen state machine diagram
fix circular dependency detection

# ❌ WRONG
added screen state machine diagram
fixing circular dependency detection
```

---

## Rule 4: Body Only if "Why" Unclear

Skip body if self-explanatory. Use for architectural decisions.

```
# ✅ Needs body
refactor(router): switch from slice to linked list

Slice caused off-by-one issues during rapid push/pop.
Linked list makes O(1) pop and preserves reference stability.

# ✅ No body needed
feat(km): add Matches() helper to Binding
```

---

## Rule 5: One Logical Change

**One complete, atomic change** per commit. Do not mix.

```
# ❌ WRONG
feat: add router PopTo() and fix logger nil panic

# ✅ CORRECT
feat(router): add PopTo() navigation method
fix(logger): prevent nil handler panic on startup
```

---

## Quick Reference

```
feat(scope): add X
fix(scope): prevent Y under Z
refactor(scope): simplify X
test(scope): add compliance test for X
docs: document X
chore: bump Go version to 1.23
```

**Checklist:**
- [ ] Type correct
- [ ] Subject ≤ 50 chars
- [ ] No file/folder names
- [ ] Imperative mood
- [ ] One logical change

---

## Enforcement

### Git Hook

`.git/hooks/commit-msg`:

```bash
#!/bin/sh
MSG=$(cat "$1")
SUBJECT=$(echo "$MSG" | head -1)

if ! echo "$SUBJECT" | grep -qE '^(feat|fix|refactor|test|docs|chore|perf|ci|revert)(\([a-z]+\))?: .+'  ; then
  echo "ERROR: Invalid format. Use type(scope): description"
  exit 1
fi

LENGTH=$(echo "$SUBJECT" | wc -c)
if [ "$LENGTH" -gt 73 ]; then
  echo "ERROR: Subject too long. Max: 72."
  exit 1
fi

if echo "$SUBJECT" | grep -qE '\.(go|md|yml|yaml|json|toml)' ; then
  echo "WARNING: Don't use file extensions in subject."
fi
exit 0
```

### GitHub Actions

`.github/workflows/commit-check.yml`:

```yaml
name: Commit Check
on:
  pull_request:
    types: [opened, synchronize, reopened]
jobs:
  commitlint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - run: |
          git log --format='%s' origin/${{ github.base_ref }}..HEAD | while read line; do
            if ! echo "$line" | grep -qE '^(feat|fix|refactor|test|docs|chore|perf|ci|revert)(\([a-z]+\))?: .+'; then exit 1; fi
            if [ "$(echo "$line" | wc -c)" -gt 73 ]; then exit 1; fi
          done
```
