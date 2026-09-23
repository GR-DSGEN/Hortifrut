# Button

An interactive control that triggers an immediate action, submission, or navigation.

## When to use

- Confirming or submitting a form
- Triggering a primary action on a screen
- Launching a dialog, drawer or destructive flow
- Grouping a decision pair (Cancel / Confirm)

## When NOT to use

- For in-page navigation to another URL — use Link
- For toggling state on/off — use Switch or a selectable control
- When the visual is just decoration with no action

## Anatomy

- Container
- Label
- Leading icon (optional)
- Trailing icon (optional)

## Variants

### Variant

| Variant | Purpose |
| --- | --- |
| `default` | Standard appearance used when no special emphasis applies. |

### Sizes

| Size | Height | Padding | Typography | Use case |
| --- | --- | --- | --- | --- |
| `xs` | sizes.scale.7 (28px) | x: spacing.2 (16px) / spacing.2 (16px), y: 0px / 0px | typography.roles.body.steps.xs | Compact / dense tables and toolbars. |
| `sm` | sizes.components.sm (32px) | x: spacing.3 (16px) / spacing.3 (16px), y: 0px / 0px | — | Dense UIs and secondary contexts. |
| `md` | sizes.components.md (36px) | x: spacing.4 (16px) / spacing.4 (16px), y: 0px / 0px | typography.roles.label.steps.sm | Default for most layouts. |
| `lg` | sizes.components.lg (40px) | x: spacing.8 (16px) / spacing.8 (16px), y: 0px / 0px | — | Prominent or touch-friendly contexts. |
| `icon-xs` | sizes.scale.7 (28px) | x: 0px / 0px, y: 0px / 0px | — | — |
| `icon-sm` | sizes.components.sm (32px) | x: 0px / 0px, y: 0px / 0px | — | — |
| `icon` | sizes.components.md (36px) | x: 0px / 0px, y: 0px / 0px | — | Icon-only square. |
| `icon-lg` | sizes.components.lg (40px) | x: 0px / 0px, y: 0px / 0px | — | — |

### States

| State | Meaning |
| --- | --- |
| `default` | Resting, interactive. |
| `hover` | Pointer over the control. |
| `focus` | Keyboard focus (visible ring). |
| `disabled` | Non-interactive; reduced contrast, not announced as actionable. |
| `active` | Being pressed / activated. |

## Props

| Name | Type | Values | Default | Description |
|------|------|--------|---------|-------------|
| `Variant` | variant | default | `default` | |
| `Size` | variant | xs, sm, md, lg, icon-xs, icon-sm, icon, icon-lg | `md` | |
| `State` | variant | default, hover, focus, disabled, active | `default` | |
| `Label` | text |  | `Button` | |
| `HasIcon` | boolean |  | `true` | |
| `IconOnly` | boolean |  | `false` | |

## Usage example

```tsx
<Button
  Variant="default"
  Size="md"
  State="default"
  Label="Button"
  HasIcon
/>
```

## Do

- Lead with a verb in the label
- Use a single primary button per view
- Pair destructive actions with a confirmation
- Match icon meaning to the action

## Don't

- Don't stack multiple primary buttons next to each other
- Don't use a button for plain navigation
- Don't write essay-length labels
- Don't disable without explaining why

## Accessibility

- Reachable with Tab; activated with Enter and Space
- Visible focus ring meeting 3:1 contrast
- Label conveys the action verb ("Save", not "OK")
- Disabled state is announced; never rely on color alone
- Maintain 4.5:1 text/background contrast
