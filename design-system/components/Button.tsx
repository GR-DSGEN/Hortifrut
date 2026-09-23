// Auto-generated from the DS Foundations Engine.
// Component: Button  (category: shadcn)
// Description: shadcn/ui Button. 6 variants (default, secondary, destructive, outline, ghost, link) × sizes (xs, sm, md, lg + square icon-xs/icon-sm/icon/icon-lg) × states. Optional render-as-link (asChild). Fully bound to shadcn semantic tokens.
//
// Tokens are referenced as CSS variables — make sure to import the
// accompanying tokens.css somewhere in your app:
//   import "./tokens.css";

import React, { useCallback, useState } from "react";

export interface ButtonProps {
  /** Standard click handler. Fires AFTER any internal state updates. */
  onClick?: (e: React.MouseEvent) => void;
  /** Your own content, rendered inside the component's root container. */
  children?: React.ReactNode;
  /** Variant. Default: "default" */
  Variant?: "default";
  /** Variant. Default: "md" */
  Size?: "xs" | "sm" | "md" | "lg" | "icon-xs" | "icon-sm" | "icon" | "icon-lg";
  /** Variant. Default: "default" */
  State?: "default" | "hover" | "focus" | "disabled" | "active";
  /** Uncontrolled-mode initial value. */
  defaultState?: "default" | "hover" | "focus" | "disabled" | "active";
  /** Controlled-mode change callback. */
  onStateChange?: (value: "default" | "hover" | "focus" | "disabled" | "active") => void;
  /** Default: "Button" */
  Label?: string;
  /** Default: true */
  HasIcon?: boolean;
  /** Default: false */
  IconOnly?: boolean;
  /** Default: false */
  Loading?: boolean;
  /** Button type. Default "button" (never accidentally submits a form). */
  type?: "button" | "submit" | "reset";
  /** Disable the button (blocks clicks, dims via native :disabled). */
  disabled?: boolean;
}

/**
 * Runtime helper: merges `base` with every `variantOverrides` entry
 * whose `selector` matches the current props. Mirrors the engine's
 * `selectorMatches` semantics so the exported component behaves like
 * the editor preview.
 */
const _mergeOverrides = (
  base: Record<string, any>,
  overrides: Array<{ selector: Record<string, string | boolean>; patch: Record<string, any> }> | undefined,
  ctx: Record<string, any>,
): Record<string, any> => {
  if (!overrides || overrides.length === 0) return base;
  let out = base;
  for (const o of overrides) {
    let match = true;
    for (const k of Object.keys(o.selector)) {
      const sv = o.selector[k];
      const cv = ctx[k];
      if (typeof sv === "boolean") {
        if (cv !== sv) { match = false; break; }
      } else if (cv !== sv) {
        match = false; break;
      }
    }
    if (match) out = { ...out, ...o.patch };
  }
  return out;
};

const _clamp = (n: number, min?: number, max?: number) => {
  if (typeof min === "number" && n < min) return min;
  if (typeof max === "number" && n > max) return max;
  return n;
};

export function Button(props: ButtonProps = {}) {
  // Normalize defaults so override selectors have something to match.
  // Props listed in `interactivity` get a useState so click / hover /
  // drag handlers can mutate them. The rest stay as derived consts.
  const variant = props.Variant ?? "default";
  const size = props.Size ?? "md";
  const [state, _setState_inner] = useState<"default" | "hover" | "focus" | "disabled" | "active">(props.State ?? props.defaultState ?? "default");
  const setState = useCallback((v: "default" | "hover" | "focus" | "disabled" | "active") => { _setState_inner(v); props.onStateChange?.(v); }, [props.onStateChange]);
  const label = props.Label ?? "Button";
  const hasIcon = props.HasIcon ?? true;
  const iconOnly = props.IconOnly ?? false;
  const loading = props.Loading ?? false;

  const _ctx: Record<string, any> = { Variant: variant, Size: size, State: state, Label: label, HasIcon: hasIcon, IconOnly: iconOnly, Loading: loading };
  return (
    <React.Fragment>
      <style>{`@keyframes ds-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}`}</style>
    <button style={_mergeOverrides({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "var(--ds-spacing-4, 16px)", paddingRight: "var(--ds-spacing-4, 16px)", paddingTop: "0px", paddingBottom: "0px", width: "fit-content", height: "var(--ds-sizes-components-md, 36px)", flexShrink: 0, position: "relative", boxSizing: "border-box", background: "var(--ds-colors-brand-600, #18181b)", color: "var(--ds-primary-foreground, #fafafa)", borderRadius: "var(--ds-radius-full, 6px)" }, [{ selector: {"Variant":"default","State":"hover"}, patch: { opacity: 0.9 } }, { selector: {"Variant":"default","State":"disabled"}, patch: { opacity: 0.5 } }, { selector: {"Variant":"default","State":"focus"}, patch: { border: `2px solid ${"var(--ds-ring, #a1a1aa)"}` } }, { selector: {"Size":"xs"}, patch: { borderRadius: "var(--ds-radius-full, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-1, 8px)", paddingLeft: "var(--ds-spacing-2, 16px)", paddingRight: "var(--ds-spacing-2, 16px)", paddingTop: "0px", paddingBottom: "0px", width: "fit-content", height: "var(--ds-sizes-scale-7, 28px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"sm"}, patch: { borderRadius: "var(--ds-radius-full, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "var(--ds-spacing-3, 16px)", paddingRight: "var(--ds-spacing-3, 16px)", paddingTop: "0px", paddingBottom: "0px", width: "fit-content", height: "var(--ds-sizes-components-sm, 32px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"lg"}, patch: { borderRadius: "var(--ds-radius-full, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "var(--ds-spacing-8, 16px)", paddingRight: "var(--ds-spacing-8, 16px)", paddingTop: "0px", paddingBottom: "0px", width: "fit-content", height: "var(--ds-sizes-components-lg, 40px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"icon-xs"}, patch: { borderRadius: "var(--ds-radius-md, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "var(--ds-sizes-scale-7, 28px)", height: "var(--ds-sizes-scale-7, 28px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"icon-sm"}, patch: { borderRadius: "var(--ds-radius-md, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "var(--ds-sizes-components-sm, 32px)", height: "var(--ds-sizes-components-sm, 32px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"icon"}, patch: { borderRadius: "var(--ds-radius-md, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "var(--ds-sizes-components-md, 36px)", height: "var(--ds-sizes-components-md, 36px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }, { selector: {"Size":"icon-lg"}, patch: { borderRadius: "var(--ds-radius-md, 6px)", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "var(--ds-spacing-2, 8px)", paddingLeft: "0px", paddingRight: "0px", paddingTop: "0px", paddingBottom: "0px", width: "var(--ds-sizes-components-lg, 40px)", height: "var(--ds-sizes-components-lg, 40px)", flexShrink: 0, position: "relative", boxSizing: "border-box" } }], _ctx) as React.CSSProperties} type={props.type ?? "button"} disabled={props.disabled || undefined} onMouseEnter={() => setState("hover" as any)} onMouseLeave={() => setState("default" as any)} onClick={(e) => props.onClick?.(e)}>
      {((_ctx.Loading === true)) && (
      <span style={{ ...(({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box" }) as React.CSSProperties), animation: "ds-spin 1s linear infinite" }}>
        <span style={{ display: "inline-flex", width: "var(--ds-icon-sm, 16px)", height: "var(--ds-icon-sm, 16px)", color: "currentColor", flexShrink: 0 } as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>` }} />
      </span>
      )}
      {((_ctx.HasIcon === true)) && (
      <span style={{ display: "inline-flex", width: "var(--ds-icon-sm, 16px)", height: "var(--ds-icon-sm, 16px)", color: "currentColor", flexShrink: 0 } as React.CSSProperties} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>` }} />
      )}
      {((_ctx.IconOnly === false)) && (
      <span style={_mergeOverrides({ color: "var(--ds-primary-foreground, #fafafa)", fontFamily: `var(--ds-typography-families-sans)`, fontSize: `var(--ds-typography-scale-fontSize-200)`, fontWeight: `var(--ds-typography-weights-medium)`, lineHeight: `var(--ds-typography-scale-lineHeight-200)`, letterSpacing: `var(--ds-typography-scale-letterSpacing-200)`, textAlign: "center" }, [{ selector: {"Size":"xs"}, patch: { fontFamily: `var(--ds-typography-roles-body-steps-xs-fontFamily, ui-sans-serif)`, fontSize: `var(--ds-typography-roles-body-steps-xs-fontSize, 14px)`, fontWeight: `var(--ds-typography-roles-body-steps-xs-fontWeight, 400)`, lineHeight: `var(--ds-typography-roles-body-steps-xs-lineHeight, 1.4)` } }, { selector: {"Size":"icon-xs"}, patch: { display: "none" } }, { selector: {"Size":"icon-sm"}, patch: { display: "none" } }, { selector: {"Size":"icon"}, patch: { display: "none" } }, { selector: {"Size":"icon-lg"}, patch: { display: "none" } }], _ctx) as React.CSSProperties}>{String((props.Label) ?? "Button")}</span>
      )}
      {props.children}
    </button>
    </React.Fragment>
  );
}

export default Button;
