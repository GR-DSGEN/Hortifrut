# Token catalog

All `--ds-*` CSS custom properties exported by this design system.
Import `tokens.css` once at your app root — then reference any token as
`var(--ds-<name>)` in inline styles or CSS.

## Token families

| Family prefix | Semantic meaning |
|--------------|-----------------|
| `color.*` | — |
| `grid.*` | Breakpoints, gutters, margins and column counts. |
| `icon.*` | Fill colour for SVG glyphs and icon sprites. |
| `sizes.*` | Primitive size scale (dimensions, icon sizes). |
| `motion.*` | Duration and easing values for transitions. |
| `radius.*` | Corner radius tokens for containers and controls. |
| `shadow.*` | Box-shadow elevation levels. |
| `zIndex.*` | Stacking order levels. |
| `opacity.*` | Named opacity levels. |
| `spacing.*` | Margin, padding and gap values from the spacing scale. |
| `typography.*` | Font family, size, weight, line-height and letter-spacing. |
| `base.*` | — |
| `card.*` | — |
| `ring.*` | — |
| `chart.*` | — |
| `input.*` | — |
| `muted.*` | — |
| `accent.*` | — |
| `border.*` | Stroke / border colours and outline colours. |
| `popover.*` | — |
| `primary.*` | — |
| `secondary.*` | — |
| `destructive.*` | — |

## color


| CSS variable | Value |
|-------------|-------|
| `--ds-color-info-50` | `#eff6ff` |
| `--ds-color-info-100` | `#dbeafe` |
| `--ds-color-info-200` | `#bfdbfe` |
| `--ds-color-info-300` | `#93c5fd` |
| `--ds-color-info-400` | `#60a5fa` |
| `--ds-color-info-500` | `#3b82f6` |
| `--ds-color-info-600` | `#2563eb` |
| `--ds-color-info-700` | `#1d4ed8` |
| `--ds-color-info-800` | `#1e40af` |
| `--ds-color-info-900` | `#1e3a8a` |
| `--ds-color-info-950` | `#172554` |
| `--ds-color-brand-50` | `#fff8fa` |
| `--ds-color-brand-100` | `#ffccdc` |
| `--ds-color-brand-200` | `#ffa7c5` |
| `--ds-color-brand-300` | `#ff8ab6` |
| `--ds-color-brand-400` | `#ff76ac` |
| `--ds-color-brand-500` | `#ff6fa9` |
| `--ds-color-brand-600` | `#f56aa2` |
| `--ds-color-brand-700` | `#d75c8d` |
| `--ds-color-brand-800` | `#a6456c` |
| `--ds-color-brand-900` | `#662741` |
| `--ds-color-brand-950` | `#1e060f` |
| `--ds-color-error-50` | `#fef2f2` |
| `--ds-color-error-100` | `#fee2e2` |
| `--ds-color-error-200` | `#fecaca` |
| `--ds-color-error-300` | `#fca5a5` |
| `--ds-color-error-400` | `#f87171` |
| `--ds-color-error-500` | `#ef4444` |
| `--ds-color-error-600` | `#dc2626` |
| `--ds-color-error-700` | `#b91c1c` |
| `--ds-color-error-800` | `#991b1b` |
| `--ds-color-error-900` | `#7f1d1d` |
| `--ds-color-error-950` | `#450a0a` |
| `--ds-color-green-50` | `#f0fdf4` |
| `--ds-color-green-100` | `#dcfce7` |
| `--ds-color-green-200` | `#bbf7d0` |
| `--ds-color-green-300` | `#86efac` |
| `--ds-color-green-400` | `#4ade80` |
| `--ds-color-green-500` | `#22c55e` |
| `--ds-color-green-600` | `#16a34a` |
| `--ds-color-green-700` | `#15803d` |
| `--ds-color-green-800` | `#166534` |
| `--ds-color-green-900` | `#14532d` |
| `--ds-color-green-950` | `#052e16` |
| `--ds-color-orange-50` | `#fff7ed` |
| `--ds-color-orange-100` | `#ffedd5` |
| `--ds-color-orange-200` | `#fed7aa` |
| `--ds-color-orange-300` | `#fdba74` |
| `--ds-color-orange-400` | `#fb923c` |
| `--ds-color-orange-500` | `#f97316` |
| `--ds-color-orange-600` | `#ea580c` |
| `--ds-color-orange-700` | `#c2410c` |
| `--ds-color-orange-800` | `#9a3412` |
| `--ds-color-orange-900` | `#7c2d12` |
| `--ds-color-orange-950` | `#431407` |
| `--ds-color-purple-50` | `#faf5ff` |
| `--ds-color-purple-100` | `#f3e8ff` |
| `--ds-color-purple-200` | `#e9d5ff` |
| `--ds-color-purple-300` | `#d8b4fe` |
| `--ds-color-purple-400` | `#c084fc` |
| `--ds-color-purple-500` | `#a855f7` |
| `--ds-color-purple-600` | `#9333ea` |
| `--ds-color-purple-700` | `#7e22ce` |
| `--ds-color-purple-800` | `#6b21a8` |
| `--ds-color-purple-900` | `#581c87` |
| `--ds-color-purple-950` | `#3b0764` |
| `--ds-color-violet-50` | `#f5f3ff` |
| `--ds-color-violet-100` | `#ede9fe` |
| `--ds-color-violet-200` | `#ddd6fe` |
| `--ds-color-violet-300` | `#c4b5fd` |
| `--ds-color-violet-400` | `#a78bfa` |
| `--ds-color-violet-500` | `#8b5cf6` |
| `--ds-color-violet-600` | `#7c3aed` |
| `--ds-color-violet-700` | `#6d28d9` |
| `--ds-color-violet-800` | `#5b21b6` |
| `--ds-color-violet-900` | `#4c1d95` |
| `--ds-color-violet-950` | `#2e1065` |
| `--ds-color-yellow-50` | `#fefce8` |
| `--ds-color-yellow-100` | `#fef9c3` |
| `--ds-color-yellow-200` | `#fef08a` |
| `--ds-color-yellow-300` | `#fde047` |
| `--ds-color-yellow-400` | `#facc15` |
| `--ds-color-yellow-500` | `#eab308` |
| `--ds-color-yellow-600` | `#ca8a04` |
| `--ds-color-yellow-700` | `#a16207` |
| `--ds-color-yellow-800` | `#854d0e` |
| `--ds-color-yellow-900` | `#713f12` |
| `--ds-color-yellow-950` | `#422006` |
| `--ds-color-neutral-50` | `#fafafa` |
| `--ds-color-neutral-100` | `#f5f5f5` |
| `--ds-color-neutral-200` | `#e5e5e5` |
| `--ds-color-neutral-300` | `#d4d4d4` |
| `--ds-color-neutral-400` | `#a3a3a3` |
| `--ds-color-neutral-500` | `#737373` |
| `--ds-color-neutral-600` | `#525252` |
| `--ds-color-neutral-700` | `#404040` |
| `--ds-color-neutral-800` | `#262626` |
| `--ds-color-neutral-900` | `#171717` |
| `--ds-color-neutral-950` | `#0a0a0a` |
| `--ds-color-primary-50` | `#fafafa` |
| `--ds-color-primary-100` | `#f5f5f5` |
| `--ds-color-primary-200` | `#e5e5e5` |
| `--ds-color-primary-300` | `#d4d4d4` |
| `--ds-color-primary-400` | `#a3a3a3` |
| `--ds-color-primary-500` | `#737373` |
| `--ds-color-primary-600` | `#525252` |
| `--ds-color-primary-700` | `#404040` |
| `--ds-color-primary-800` | `#262626` |
| `--ds-color-primary-900` | `#171717` |
| `--ds-color-primary-950` | `#0a0a0a` |
| `--ds-color-success-50` | `#f0fdf4` |
| `--ds-color-success-100` | `#dcfce7` |
| `--ds-color-success-200` | `#bbf7d0` |
| `--ds-color-success-300` | `#86efac` |
| `--ds-color-success-400` | `#4ade80` |
| `--ds-color-success-500` | `#22c55e` |
| `--ds-color-success-600` | `#16a34a` |
| `--ds-color-success-700` | `#15803d` |
| `--ds-color-success-800` | `#166534` |
| `--ds-color-success-900` | `#14532d` |
| `--ds-color-success-950` | `#052e16` |
| `--ds-color-warning-50` | `#fffbeb` |
| `--ds-color-warning-100` | `#fef3c7` |
| `--ds-color-warning-200` | `#fde68a` |
| `--ds-color-warning-300` | `#fcd34d` |
| `--ds-color-warning-400` | `#fbbf24` |
| `--ds-color-warning-500` | `#f59e0b` |
| `--ds-color-warning-600` | `#d97706` |
| `--ds-color-warning-700` | `#b45309` |
| `--ds-color-warning-800` | `#92400e` |
| `--ds-color-warning-900` | `#78350f` |
| `--ds-color-warning-950` | `#451a03` |
| `--ds-color-blueberry-50` | `#f5fbff` |
| `--ds-color-blueberry-100` | `#b2dfff` |
| `--ds-color-blueberry-200` | `#78c9fe` |
| `--ds-color-blueberry-300` | `#4fb8f8` |
| `--ds-color-blueberry-400` | `#2fadf3` |
| `--ds-color-blueberry-500` | `#1faaf2` |
| `--ds-color-blueberry-600` | `#1da3e8` |
| `--ds-color-blueberry-700` | `#188fcc` |
| `--ds-color-blueberry-800` | `#0f6e9e` |
| `--ds-color-blueberry-900` | `#054262` |
| `--ds-color-blueberry-950` | `#00111e` |
| `--ds-color-raspberry-50` | `#fff8fa` |
| `--ds-color-raspberry-100` | `#ffd1e2` |
| `--ds-color-raspberry-200` | `#ffb0d0` |
| `--ds-color-raspberry-300` | `#ff97c4` |
| `--ds-color-raspberry-400` | `#ff87bc` |
| `--ds-color-raspberry-500` | `#ff81ba` |
| `--ds-color-raspberry-600` | `#f57bb2` |
| `--ds-color-raspberry-700` | `#d66b9b` |
| `--ds-color-raspberry-800` | `#a55077` |
| `--ds-color-raspberry-900` | `#652e47` |
| `--ds-color-raspberry-950` | `#1c0711` |
| `--ds-color-blackberry-50` | `#fbf9ff` |
| `--ds-color-blackberry-100` | `#c6a4ef` |
| `--ds-color-blackberry-200` | `#9a69ce` |
| `--ds-color-blackberry-300` | `#7c3cb6` |
| `--ds-color-blackberry-400` | `#6b17a7` |
| `--ds-color-blackberry-500` | `#6500a2` |
| `--ds-color-blackberry-600` | `#61029c` |
| `--ds-color-blackberry-700` | `#57078c` |
| `--ds-color-blackberry-800` | `#460b70` |
| `--ds-color-blackberry-900` | `#2f0c4c` |
| `--ds-color-blackberry-950` | `#150822` |

## Grid

_Breakpoints, gutters, margins and column counts._

| CSS variable | Value |
|-------------|-------|
| `--ds-grid-gutter-lg` | `var(--ds-sizes-scale-8)` |
| `--ds-grid-gutter-md` | `var(--ds-sizes-scale-6)` |
| `--ds-grid-gutter-sm` | `var(--ds-sizes-scale-4)` |
| `--ds-grid-gutter-xlg` | `var(--ds-sizes-scale-8)` |
| `--ds-grid-margin-lg` | `var(--ds-sizes-scale-8)` |
| `--ds-grid-margin-md` | `var(--ds-sizes-scale-6)` |
| `--ds-grid-margin-sm` | `var(--ds-sizes-scale-4)` |
| `--ds-grid-margin-xlg` | `var(--ds-sizes-scale-8)` |
| `--ds-grid-columns-lg` | `12` |
| `--ds-grid-columns-md` | `8` |
| `--ds-grid-columns-sm` | `4` |
| `--ds-grid-columns-max` | `12` |
| `--ds-grid-columns-xlg` | `12` |
| `--ds-grid-breakpoints-lg` | `1024px` |
| `--ds-grid-breakpoints-md` | `768px` |
| `--ds-grid-breakpoints-sm` | `640px` |
| `--ds-grid-breakpoints-max` | `1536px` |
| `--ds-grid-breakpoints-xlg` | `1280px` |

## Icon (glyph colour)

_Fill colour for SVG glyphs and icon sprites._

| CSS variable | Value |
|-------------|-------|
| `--ds-icon-lg` | `24px` |
| `--ds-icon-md` | `20px` |
| `--ds-icon-sm` | `16px` |

## Sizes

_Primitive size scale (dimensions, icon sizes)._

| CSS variable | Value |
|-------------|-------|
| `--ds-sizes-scale-1` | `4px` |
| `--ds-sizes-scale-2` | `8px` |
| `--ds-sizes-scale-3` | `12px` |
| `--ds-sizes-scale-4` | `16px` |
| `--ds-sizes-scale-5` | `20px` |
| `--ds-sizes-scale-6` | `24px` |
| `--ds-sizes-scale-7` | `28px` |
| `--ds-sizes-scale-8` | `32px` |
| `--ds-sizes-scale-9` | `36px` |
| `--ds-sizes-scale-10` | `40px` |
| `--ds-sizes-scale-11` | `44px` |
| `--ds-sizes-scale-12` | `48px` |
| `--ds-sizes-scale-14` | `56px` |
| `--ds-sizes-scale-16` | `64px` |
| `--ds-sizes-scale-20` | `80px` |
| `--ds-sizes-scale-24` | `96px` |
| `--ds-sizes-scale-none` | `0px` |
| `--ds-sizes-components-lg` | `var(--ds-sizes-scale-12)` |
| `--ds-sizes-components-md` | `var(--ds-sizes-scale-9)` |
| `--ds-sizes-components-sm` | `var(--ds-sizes-scale-6)` |
| `--ds-sizes-components-xs` | `var(--ds-sizes-scale-8)` |

## Motion

_Duration and easing values for transitions._

| CSS variable | Value |
|-------------|-------|
| `--ds-motion-duration-fast` | `150ms` |
| `--ds-motion-duration-slow` | `300ms` |
| `--ds-motion-duration-normal` | `200ms` |

## Border radius

_Corner radius tokens for containers and controls._

| CSS variable | Value |
|-------------|-------|
| `--ds-radius-lg` | `10px` |
| `--ds-radius-md` | `8px` |
| `--ds-radius-sm` | `6px` |
| `--ds-radius-xl` | `14px` |
| `--ds-radius-2xl` | `18px` |
| `--ds-radius-full` | `9999px` |
| `--ds-radius-none` | `0px` |

## Shadow

_Box-shadow elevation levels._

| CSS variable | Value |
|-------------|-------|
| `--ds-shadow-color` | `#000000` |
| `--ds-shadow-levels-lg` | `0px 8px 16px 0px rgb(0 0 0 / 0.15), 0px 20px 40px 0px rgb(0 0 0 / 0.1)` |
| `--ds-shadow-levels-md` | `0px 2px 6px 0px rgb(0 0 0 / 0.15), 0px 8px 16px 0px rgb(0 0 0 / 0.1)` |
| `--ds-shadow-levels-sm` | `0px 1px 2px 0px rgb(0 0 0 / 0.1), 0px 1px 3px 0px rgb(0 0 0 / 0.1)` |
| `--ds-shadow-levels-none` | `none` |

## Z-index

_Stacking order levels._

| CSS variable | Value |
|-------------|-------|
| `--ds-zIndex-modal` | `300` |
| `--ds-zIndex-sticky` | `100` |
| `--ds-zIndex-overlay` | `200` |
| `--ds-zIndex-popover` | `400` |
| `--ds-zIndex-tooltip` | `500` |
| `--ds-zIndex-dropdown` | `50` |

## Opacity

_Named opacity levels._

| CSS variable | Value |
|-------------|-------|
| `--ds-opacity-0` | `0` |
| `--ds-opacity-5` | `0.05` |
| `--ds-opacity-10` | `0.1` |
| `--ds-opacity-15` | `0.15` |
| `--ds-opacity-20` | `0.2` |
| `--ds-opacity-25` | `0.25` |
| `--ds-opacity-50` | `0.5` |
| `--ds-opacity-75` | `0.75` |
| `--ds-opacity-90` | `0.9` |
| `--ds-opacity-100` | `1` |

## Spacing

_Margin, padding and gap values from the spacing scale._

| CSS variable | Value |
|-------------|-------|
| `--ds-spacing-1` | `var(--ds-sizes-scale-1)` |
| `--ds-spacing-2` | `var(--ds-sizes-scale-2)` |
| `--ds-spacing-3` | `var(--ds-sizes-scale-3)` |
| `--ds-spacing-4` | `var(--ds-sizes-scale-4)` |
| `--ds-spacing-5` | `var(--ds-sizes-scale-5)` |
| `--ds-spacing-6` | `var(--ds-sizes-scale-6)` |
| `--ds-spacing-7` | `var(--ds-sizes-scale-7)` |
| `--ds-spacing-8` | `var(--ds-sizes-scale-8)` |
| `--ds-spacing-9` | `var(--ds-sizes-scale-9)` |
| `--ds-spacing-10` | `var(--ds-sizes-scale-10)` |
| `--ds-spacing-11` | `var(--ds-sizes-scale-11)` |
| `--ds-spacing-12` | `var(--ds-sizes-scale-12)` |
| `--ds-spacing-14` | `var(--ds-sizes-scale-14)` |
| `--ds-spacing-16` | `var(--ds-sizes-scale-16)` |
| `--ds-spacing-20` | `var(--ds-sizes-scale-20)` |
| `--ds-spacing-24` | `var(--ds-sizes-scale-24)` |
| `--ds-spacing-none` | `var(--ds-sizes-scale-none)` |

## Typography

_Font family, size, weight, line-height and letter-spacing._

| CSS variable | Value |
|-------------|-------|
| `--ds-typography-base` | `12px` |
| `--ds-typography-roles-body-steps-lg-fontSize` | `var(--ds-typography-scale-fontSize-400)` |
| `--ds-typography-roles-body-steps-lg-fontWeight` | `var(--ds-typography-weights-regular)` |
| `--ds-typography-roles-body-steps-lg-lineHeight` | `var(--ds-typography-scale-lineHeight-400)` |
| `--ds-typography-roles-body-steps-lg-letterSpacing` | `var(--ds-typography-scale-letterSpacing-400)` |
| `--ds-typography-roles-body-steps-md-fontSize` | `var(--ds-typography-scale-fontSize-300)` |
| `--ds-typography-roles-body-steps-md-fontWeight` | `var(--ds-typography-weights-light)` |
| `--ds-typography-roles-body-steps-md-lineHeight` | `var(--ds-typography-scale-lineHeight-300)` |
| `--ds-typography-roles-body-steps-md-letterSpacing` | `var(--ds-typography-scale-letterSpacing-300)` |
| `--ds-typography-roles-body-steps-sm-fontSize` | `var(--ds-typography-scale-fontSize-200)` |
| `--ds-typography-roles-body-steps-sm-fontWeight` | `var(--ds-typography-weights-extralight)` |
| `--ds-typography-roles-body-steps-sm-lineHeight` | `var(--ds-typography-scale-lineHeight-200)` |
| `--ds-typography-roles-body-steps-sm-letterSpacing` | `var(--ds-typography-scale-letterSpacing-200)` |
| `--ds-typography-roles-body-steps-xl-fontSize` | `var(--ds-typography-scale-fontSize-500)` |
| `--ds-typography-roles-body-steps-xl-fontWeight` | `var(--ds-typography-weights-medium)` |
| `--ds-typography-roles-body-steps-xl-lineHeight` | `var(--ds-typography-scale-lineHeight-500)` |
| `--ds-typography-roles-body-steps-xl-letterSpacing` | `var(--ds-typography-scale-letterSpacing-500)` |
| `--ds-typography-roles-body-steps-xs-fontSize` | `var(--ds-typography-scale-fontSize-100)` |
| `--ds-typography-roles-body-steps-xs-fontWeight` | `var(--ds-typography-weights-thin)` |
| `--ds-typography-roles-body-steps-xs-lineHeight` | `var(--ds-typography-scale-lineHeight-100)` |
| `--ds-typography-roles-body-steps-xs-letterSpacing` | `var(--ds-typography-scale-letterSpacing-100)` |
| `--ds-typography-roles-body-steps-lg-semibold-fontSize` | `var(--ds-typography-scale-fontSize-400)` |
| `--ds-typography-roles-body-steps-lg-semibold-fontWeight` | `var(--ds-typography-weights-semibold)` |
| `--ds-typography-roles-body-steps-lg-semibold-lineHeight` | `var(--ds-typography-scale-lineHeight-400)` |
| `--ds-typography-roles-body-steps-lg-semibold-letterSpacing` | `var(--ds-typography-scale-letterSpacing-400)` |
| `--ds-typography-roles-body-steps-md-semibold-fontSize` | `var(--ds-typography-scale-fontSize-300)` |
| `--ds-typography-roles-body-steps-md-semibold-fontWeight` | `var(--ds-typography-weights-semibold)` |
| `--ds-typography-roles-body-steps-md-semibold-lineHeight` | `var(--ds-typography-scale-lineHeight-300)` |
| `--ds-typography-roles-body-steps-md-semibold-letterSpacing` | `var(--ds-typography-scale-letterSpacing-300)` |
| `--ds-typography-roles-body-steps-sm-semibold-fontSize` | `var(--ds-typography-scale-fontSize-200)` |
| `--ds-typography-roles-body-steps-sm-semibold-fontWeight` | `var(--ds-typography-weights-semibold)` |
| `--ds-typography-roles-body-steps-sm-semibold-lineHeight` | `var(--ds-typography-scale-lineHeight-200)` |
| `--ds-typography-roles-body-steps-sm-semibold-letterSpacing` | `var(--ds-typography-scale-letterSpacing-200)` |
| `--ds-typography-roles-body-steps-xl-semibold-fontSize` | `var(--ds-typography-scale-fontSize-500)` |
| `--ds-typography-roles-body-steps-xl-semibold-fontWeight` | `var(--ds-typography-weights-semibold)` |
| `--ds-typography-roles-body-steps-xl-semibold-lineHeight` | `var(--ds-typography-scale-lineHeight-500)` |
| `--ds-typography-roles-body-steps-xl-semibold-letterSpacing` | `var(--ds-typography-scale-letterSpacing-500)` |
| `--ds-typography-roles-body-steps-xs-semibold-fontSize` | `var(--ds-typography-scale-fontSize-100)` |
| `--ds-typography-roles-body-steps-xs-semibold-fontWeight` | `var(--ds-typography-weights-semibold)` |
| `--ds-typography-roles-body-steps-xs-semibold-lineHeight` | `var(--ds-typography-scale-lineHeight-100)` |
| `--ds-typography-roles-body-steps-xs-semibold-letterSpacing` | `var(--ds-typography-scale-letterSpacing-100)` |
| `--ds-typography-roles-body-family` | `var(--ds-typography-families-veniceblvd-regular)` |
| `--ds-typography-roles-label-steps-sm-fontSize` | `var(--ds-typography-scale-fontSize-200)` |
| `--ds-typography-roles-label-steps-sm-fontWeight` | `var(--ds-typography-weights-medium)` |
| `--ds-typography-roles-label-steps-sm-lineHeight` | `var(--ds-typography-scale-lineHeight-200)` |
| `--ds-typography-roles-label-steps-sm-letterSpacing` | `var(--ds-typography-scale-letterSpacing-200)` |
| `--ds-typography-roles-label-steps-xs-fontSize` | `var(--ds-typography-scale-fontSize-100)` |
| `--ds-typography-roles-label-steps-xs-fontWeight` | `var(--ds-typography-weights-medium)` |
| `--ds-typography-roles-label-steps-xs-lineHeight` | `var(--ds-typography-scale-lineHeight-100)` |
| `--ds-typography-roles-label-steps-xs-letterSpacing` | `var(--ds-typography-scale-letterSpacing-100)` |
| `--ds-typography-roles-label-family` | `var(--ds-typography-families-sans)` |
| `--ds-typography-roles-caption-steps-xs-fontSize` | `var(--ds-typography-scale-fontSize-100)` |
| `--ds-typography-roles-caption-steps-xs-fontWeight` | `var(--ds-typography-weights-regular)` |
| `--ds-typography-roles-caption-steps-xs-lineHeight` | `var(--ds-typography-scale-lineHeight-100)` |
| `--ds-typography-roles-caption-steps-xs-letterSpacing` | `var(--ds-typography-scale-letterSpacing-100)` |
| `--ds-typography-roles-caption-family` | `var(--ds-typography-families-sans)` |
| `--ds-typography-roles-heading-steps-lg-fontSize` | `var(--ds-typography-scale-fontSize-400)` |
| `--ds-typography-roles-heading-steps-lg-fontWeight` | `var(--ds-typography-weights-bold)` |
| `--ds-typography-roles-heading-steps-lg-lineHeight` | `var(--ds-typography-scale-lineHeight-400)` |
| `--ds-typography-roles-heading-steps-lg-letterSpacing` | `var(--ds-typography-scale-letterSpacing-400)` |
| `--ds-typography-roles-heading-steps-md-fontSize` | `var(--ds-typography-scale-fontSize-300)` |
| `--ds-typography-roles-heading-steps-md-fontWeight` | `var(--ds-typography-weights-bold)` |
| `--ds-typography-roles-heading-steps-md-lineHeight` | `var(--ds-typography-scale-lineHeight-300)` |
| `--ds-typography-roles-heading-steps-md-letterSpacing` | `var(--ds-typography-scale-letterSpacing-300)` |
| `--ds-typography-roles-heading-steps-sm-fontSize` | `var(--ds-typography-scale-fontSize-200)` |
| `--ds-typography-roles-heading-steps-sm-fontWeight` | `var(--ds-typography-weights-bold)` |
| `--ds-typography-roles-heading-steps-sm-lineHeight` | `var(--ds-typography-scale-lineHeight-200)` |
| `--ds-typography-roles-heading-steps-sm-letterSpacing` | `var(--ds-typography-scale-letterSpacing-200)` |
| `--ds-typography-roles-heading-steps-xs-fontSize` | `var(--ds-typography-scale-fontSize-100)` |
| `--ds-typography-roles-heading-steps-xs-fontWeight` | `var(--ds-typography-weights-bold)` |
| `--ds-typography-roles-heading-steps-xs-lineHeight` | `var(--ds-typography-scale-lineHeight-100)` |
| `--ds-typography-roles-heading-steps-xs-letterSpacing` | `var(--ds-typography-scale-letterSpacing-100)` |
| `--ds-typography-roles-heading-family` | `var(--ds-typography-families-sans)` |
| `--ds-typography-scale-fontSize-100` | `12px` |
| `--ds-typography-scale-fontSize-200` | `14px` |
| `--ds-typography-scale-fontSize-300` | `16px` |
| `--ds-typography-scale-fontSize-400` | `18px` |
| `--ds-typography-scale-fontSize-500` | `32px` |
| `--ds-typography-scale-fontSize-600` | `37px` |
| `--ds-typography-scale-lineHeight-100` | `18px` |
| `--ds-typography-scale-lineHeight-200` | `20px` |
| `--ds-typography-scale-lineHeight-300` | `23px` |
| `--ds-typography-scale-lineHeight-400` | `28px` |
| `--ds-typography-scale-lineHeight-500` | `32px` |
| `--ds-typography-scale-lineHeight-600` | `41px` |
| `--ds-typography-scale-letterSpacing-100` | `0` |
| `--ds-typography-scale-letterSpacing-200` | `0` |
| `--ds-typography-scale-letterSpacing-300` | `-0.01em` |
| `--ds-typography-scale-letterSpacing-400` | `-0.01em` |
| `--ds-typography-scale-letterSpacing-500` | `-0.02em` |
| `--ds-typography-scale-letterSpacing-600` | `-0.02em` |
| `--ds-typography-weights-bold` | `700` |
| `--ds-typography-weights-thin` | `100` |
| `--ds-typography-weights-black` | `Black` |
| `--ds-typography-weights-light` | `300` |
| `--ds-typography-weights-medium` | `500` |
| `--ds-typography-weights-regular` | `400` |
| `--ds-typography-weights-semibold` | `600` |
| `--ds-typography-weights-extralight` | `200` |
| `--ds-typography-families-mono` | `JetBrains Mono, ui-monospace, monospace` |
| `--ds-typography-families-sans` | `Inter, system-ui, sans-serif` |
| `--ds-typography-families-serif` | `ui-serif, Georgia, serif` |
| `--ds-typography-families-veniceblvd-regular` | `VeniceBlvd-Regular, system-ui, sans-serif` |

## base


| CSS variable | Value |
|-------------|-------|
| `--ds-base-background` | `#ffffff` |
| `--ds-base-foreground` | `var(--ds-color-neutral-950)` |

## card


| CSS variable | Value |
|-------------|-------|
| `--ds-card-default` | `var(--ds-color-neutral-50)` |
| `--ds-card-foreground` | `var(--ds-color-neutral-950)` |

## ring


| CSS variable | Value |
|-------------|-------|
| `--ds-ring` | `var(--ds-color-neutral-400)` |

## chart


| CSS variable | Value |
|-------------|-------|
| `--ds-chart-1` | `var(--ds-color-blueberry-500)` |
| `--ds-chart-2` | `var(--ds-color-green-500)` |
| `--ds-chart-3` | `var(--ds-color-yellow-500)` |
| `--ds-chart-4` | `var(--ds-color-orange-500)` |
| `--ds-chart-5` | `var(--ds-color-purple-500)` |

## input


| CSS variable | Value |
|-------------|-------|
| `--ds-input` | `var(--ds-color-neutral-200)` |

## muted


| CSS variable | Value |
|-------------|-------|
| `--ds-muted-default` | `var(--ds-color-neutral-100)` |
| `--ds-muted-foreground` | `var(--ds-color-neutral-500)` |

## accent


| CSS variable | Value |
|-------------|-------|
| `--ds-accent-default` | `var(--ds-color-neutral-100)` |
| `--ds-accent-foreground` | `var(--ds-color-neutral-900)` |

## Border (strokes)

_Stroke / border colours and outline colours._

| CSS variable | Value |
|-------------|-------|
| `--ds-border` | `var(--ds-color-neutral-200)` |

## popover


| CSS variable | Value |
|-------------|-------|
| `--ds-popover-default` | `#ffffff` |
| `--ds-popover-foreground` | `var(--ds-color-neutral-950)` |

## primary


| CSS variable | Value |
|-------------|-------|
| `--ds-primary-default` | `var(--ds-color-neutral-900)` |
| `--ds-primary-foreground` | `var(--ds-color-neutral-50)` |

## secondary


| CSS variable | Value |
|-------------|-------|
| `--ds-secondary-default` | `var(--ds-color-neutral-100)` |
| `--ds-secondary-foreground` | `var(--ds-color-neutral-900)` |

## destructive


| CSS variable | Value |
|-------------|-------|
| `--ds-destructive-default` | `var(--ds-color-neutral-600)` |
| `--ds-destructive-foreground` | `var(--ds-color-neutral-50)` |
