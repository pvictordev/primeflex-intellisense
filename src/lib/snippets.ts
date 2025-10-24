import { colorPalette, hexToRgba } from "../helpers/colorHelper";

export enum SnippetKind {
  DynamicColor,
  FixedColor,
  Utility,
}

export type Snippet =
  | {
      kind: SnippetKind.DynamicColor | SnippetKind.FixedColor;
      class: string;
      style: string;
      defaultStyle?: string; // default style
      colorVariableName: string;
      responsive?: boolean;
      pseudoState?: boolean;
    }
  | {
      kind: SnippetKind.Utility;
      class: string;
      style: string;
      responsive?: boolean;
      pseudoState?: boolean;
    };

export const primeflexSnippets: Snippet[] = [
  // RESPONSIVE
  {
    class: "sm:",
    style: "@media screen and (min-width: 576px) {\n...\n}",
    kind: SnippetKind.Utility,
  },
  {
    class: "md:",
    style: "@media screen and (min-width: 768px) {\n...\n}",
    kind: SnippetKind.Utility,
  },
  {
    class: "lg:",
    style: "@media screen and (min-width: 992px) {\n...\n}",
    kind: SnippetKind.Utility,
  },
  {
    class: "xl:",
    style: "@media screen and (min-width: 1200px) {\n...\n}",
    kind: SnippetKind.Utility,
  },

  // STATES
  { class: "hover:", style: "&:hover {\n...\n}", kind: SnippetKind.Utility },
  { class: "focus:", style: "&:focus {\n...\n}", kind: SnippetKind.Utility },
  { class: "active:", style: "&:active {\n...\n}", kind: SnippetKind.Utility },

  // DISPLAY
  {
    class: "hidden",
    style: "display: none;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "block",
    style: "display: block;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "inline",
    style: "display: inline;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "inline-block",
    style: "display: inline-block;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex",
    style: "display: flex;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "inline-flex",
    style: "display: inline-flex;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "overflow-auto",
    style: "overflow: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // OVERFLOW
  {
    class: "overflow-hidden",
    style: "overflow: hidden;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "overflow-visible",
    style: "overflow: visible;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "overflow-scroll",
    style: "overflow: scroll;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "overflow-x-auto",
    style: "overflow-x: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "overflow-x-hidden",
    style: "overflow-x: hidden;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "overflow-x-visible",
    style: "overflow-x: visible;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "overflow-x-scroll",
    style: "overflow-x: scroll;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "overflow-y-auto",
    style: "overflow-y: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "overflow-y-hidden",
    style: "overflow-y: hidden;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "overflow-y-visible",
    style: "overflow-y: visible;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "overflow-y-scroll",
    style: "overflow-y: scroll;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // POSITION
  {
    class: "static",
    style: "position: static;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "fixed",
    style: "position: fixed;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "relative",
    style: "position: relative;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "absolute",
    style: "position: absolute;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "sticky",
    style: "position: sticky;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // PLACEMENT
  {
    class: "top-auto",
    style: "top: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "top-0",
    style: "top: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "top-50",
    style: "top: 50%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "top-100",
    style: "top: 100%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "right-auto",
    style: "right: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "right-0",
    style: "right: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "right-50",
    style: "right: 50%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "right-100",
    style: "right: 100%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bottom-auto",
    style: "bottom: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bottom-0",
    style: "bottom: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bottom-50",
    style: "bottom: 50%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bottom-100",
    style: "bottom: 100%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "left-auto",
    style: "left: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "left-0",
    style: "left: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "left-50",
    style: "left: 50%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "left-100",
    style: "left: 100%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // Z-INDEX
  {
    class: "z-0",
    style: "z-index: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "z-1",
    style: "z-index: 1;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "z-2",
    style: "z-index: 2;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "z-3",
    style: "z-index: 3;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "z-4",
    style: "z-index: 4;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "z-5",
    style: "z-index: 5;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // FLEX DIRECTION
  {
    class: "flex-row",
    style: "flex-direction: row;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-row-reverse",
    style: "flex-direction: row-reverse;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-column",
    style: "flex-direction: column;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-column-reverse",
    style: "flex-direction: column-reverse;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // FLEX WRAP
  {
    class: "flex-wrap",
    style: "flex-wrap: wrap;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-wrap-reverse",
    style: "flex-wrap: wrap-reverse;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-nowrap",
    style: "flex-wrap: nowrap;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // FLEX
  {
    class: "flex-1",
    style: "flex: 1 1 0%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-auto",
    style: "flex: 1 1 auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-initial",
    style: "flex: 0 1 auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-none",
    style: "flex: none;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // FLEX GROW
  {
    class: "flex-grow-0",
    style: "flex-grow: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-grow-1",
    style: "flex-grow: 1;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // FLEX SHRINK
  {
    class: "flex-shrink-0",
    style: "flex-shrink: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-shrink-1",
    style: "flex-shrink: 1;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // GAP
  {
    class: "gap-0",
    style: "gap: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "gap-1",
    style: "gap: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "gap-2",
    style: "gap: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "gap-3",
    style: "gap: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "gap-4",
    style: "gap: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "gap-5",
    style: "gap: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "gap-6",
    style: "gap: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "gap-7",
    style: "gap: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "gap-8",
    style: "gap: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "row-gap-0",
    style: "row-gap: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "row-gap-1",
    style: "row-gap: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "row-gap-2",
    style: "row-gap: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "row-gap-3",
    style: "row-gap: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "row-gap-4",
    style: "row-gap: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "row-gap-5",
    style: "row-gap: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "row-gap-6",
    style: "row-gap: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "row-gap-7",
    style: "row-gap: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "row-gap-8",
    style: "row-gap: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "column-gap-0",
    style: "column-gap: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "column-gap-1",
    style: "column-gap: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "column-gap-2",
    style: "column-gap: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "column-gap-3",
    style: "column-gap: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "column-gap-4",
    style: "column-gap: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "column-gap-5",
    style: "column-gap: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "column-gap-6",
    style: "column-gap: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "column-gap-7",
    style: "column-gap: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "column-gap-8",
    style: "column-gap: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // ORDER
  {
    class: "flex-order-0",
    style: "order: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-order-1",
    style: "order: 1;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-order-2",
    style: "order: 2;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-order-3",
    style: "order: 3;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-order-4",
    style: "order: 4;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-order-5",
    style: "order: 5;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "flex-order-6",
    style: "order: 6;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // JUSTIFY CONTENT
  {
    class: "justify-content-start",
    style: "justify-content: flex-start;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "justify-content-end",
    style: "justify-content: flex-end;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "justify-content-center",
    style: "justify-content: center;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "justify-content-between",
    style: "justify-content: space-between;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "justify-content-around",
    style: "justify-content: space-around;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "justify-content-evenly",
    style: "justify-content: space-evenly;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // ALIGN CONTENT
  {
    class: "align-content-start",
    style: "align-content: flex-start;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "align-content-end",
    style: "align-content: flex-end;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "align-content-center",
    style: "align-content: center;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "align-content-between",
    style: "align-content: space-between;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "align-content-around",
    style: "align-content: space-around;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "align-content-evenly",
    style: "align-content: space-evenly;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // ALIGN ITEMS
  {
    class: "align-items-stretch",
    style: "align-items: stretch;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "align-items-start",
    style: "align-items: flex-start;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "align-items-center",
    style: "align-items: center;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "align-items-end",
    style: "align-items: flex-end;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "align-items-baseline",
    style: "align-items: baseline;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // ALIGN SELF
  {
    class: "align-self-stretch",
    style: "align-self: stretch;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "align-self-start",
    style: "align-self: flex-start;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "align-self-center",
    style: "align-self: center;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "align-self-end",
    style: "align-self: flex-end;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "align-self-baseline",
    style: "align-self: baseline;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // FORMGRID
  { class: "formgrid", style: "margin-top: 0;", kind: SnippetKind.Utility },
  { class: "field", style: "margin-bottom: 1rem;", kind: SnippetKind.Utility },

  // GRID
  {
    class: "grid",
    style:
      "display: flex;\nflex-wrap: wrap;\nmargin-right: -0.5rem;\nmargin-left: -0.5rem;\nmargin-top: -0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "grid-nogutter",
    style: "margin-right: 0;\nmargin-left: 0;\nmargin-top: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col",
    style: "flex-grow: 1;\nflex-basis: 0;\npadding: $gutter;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-fixed",
    style: "flex: 0 0 auto;\npadding: $gutter;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-1",
    style: "flex: 0 0 auto;\npadding: $gutter;\nwidth: 8.3333%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-2",
    style: "flex: 0 0 auto;\npadding: $gutter;\nwidth: 16.6667%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-3",
    style: "flex: 0 0 auto;\npadding: $gutter;\nwidth: 25%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-4",
    style: "flex: 0 0 auto;\npadding: $gutter;\nwidth: 33.3333%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-5",
    style: "flex: 0 0 auto;\npadding: $gutter;\nwidth: 41.6667%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-6",
    style: "flex: 0 0 auto;\npadding: $gutter;\nwidth: 50%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-7",
    style: "flex: 0 0 auto;\npadding: $gutter;\nwidth: 58.3333%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-8",
    style: "flex: 0 0 auto;\npadding: $gutter;\nwidth: 66.6667%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-9",
    style: "flex: 0 0 auto;\npadding: $gutter;\nwidth: 75%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-10",
    style: "flex: 0 0 auto;\npadding: $gutter;\nwidth: 83.3333%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-11",
    style: "flex: 0 0 auto;\npadding: $gutter;\nwidth: 91.6667%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-12",
    style: "flex: 0 0 auto;\npadding: $gutter;\nwidth: 100%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-offset-0",
    style: "margin-left: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-offset-1",
    style: "margin-left: 8.3333%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-offset-2",
    style: "margin-left: 16.6667%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-offset-3",
    style: "margin-left: 25%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-offset-4",
    style: "margin-left: 33.3333%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-offset-5",
    style: "margin-left: 41.6667%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-offset-6",
    style: "margin-left: 50%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-offset-7",
    style: "margin-left: 58.3333%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-offset-8",
    style: "margin-left: 66.6667%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-offset-9",
    style: "margin-left: 75%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-offset-10",
    style: "margin-left: 83.3333%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-offset-11",
    style: "margin-left: 91.6667%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "col-offset-12",
    style: "margin-left: 100%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // NAMED THEME COLOR
  {
    class: "surface-ground",
    style: "ground color like body background",
    kind: SnippetKind.DynamicColor,
    colorVariableName: "surface-ground",
  },
  {
    class: "surface-section",
    style: "background of a content section",
    kind: SnippetKind.DynamicColor,
    colorVariableName: "surface-section",
  },
  {
    class: "surface-card",
    style: "background of an elevated card element",
    kind: SnippetKind.DynamicColor,
    colorVariableName: "surface-card",
  },
  {
    class: "surface-overlay",
    style: "overlay elements like modals",
    kind: SnippetKind.DynamicColor,
    colorVariableName: "surface-overlay",
  },
  {
    class: "surface-border",
    style: "border colors to divide content",
    kind: SnippetKind.DynamicColor,
    colorVariableName: "surface-border",
  },
  {
    class: "surface-hover",
    style: "background color of an element in hover state",
    kind: SnippetKind.DynamicColor,
    colorVariableName: "surface-hover",
  },

  // BACKGROUND REPEAT
  {
    class: "bg-repeat",
    style: "background-repeat: repeat;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bg-no-repeat",
    style: "background-repeat: no-repeat;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bg-repeat-x",
    style: "background-repeat: repeat-x;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bg-repeat-y",
    style: "background-repeat: repeat-y;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bg-repeat-round",
    style: "background-repeat: round;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bg-repeat-space",
    style: "background-repeat: space;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // BACKGROUND SIZE
  {
    class: "bg-auto",
    style: "background-size: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bg-cover",
    style: "background-size: cover;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bg-contain",
    style: "background-size: contain;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // BACKGROUND POSITION
  {
    class: "bg-bottom",
    style: "background-position: bottom;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bg-center",
    style: "background-position: center;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bg-left",
    style: "background-position: left;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bg-left-bottom",
    style: "background-position: left bottom;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bg-left-top",
    style: "background-position: left top;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bg-right",
    style: "background-position: right;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bg-right-top",
    style: "background-position: right top;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bg-right-bottom",
    style: "background-position: right bottom;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "bg-top",
    style: "background-position: top;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // BORDER RADIUS
  {
    class: "border-noround",
    style: "border-radius: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round",
    style: "border-radius: var(--border-radius);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-xs",
    style: "border-radius: 0.125rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-sm",
    style: "border-radius: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-md",
    style: "border-radius: 0.375rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-lg",
    style: "border-radius: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-xl",
    style: "border-radius: 0.75rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-2xl",
    style: "border-radius: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-3xl",
    style: "border-radius: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-circle",
    style: "border-radius: 50%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-noround-left",
    style: "border-top-left-radius: 0;\nborder-bottom-left-radius: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-noround-top",
    style: "border-top-left-radius: 0;\nborder-top-right-radius: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-noround-right",
    style: "border-top-right-radius: 0;\nborder-bottom-right-radius: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-noround-bottom",
    style: "border-bottom-left-radius: 0;\nborder-bottom-right-radius: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-left",
    style:
      "border-top-left-radius: var(--border-radius);\nborder-bottom-left-radius: var(--border-radius);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-top",
    style:
      "border-top-left-radius: var(--border-radius);\nborder-top-right-radius: var(--border-radius);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-bottom",
    style:
      "border-bottom-left-radius: var(--border-radius);\nborder-bottom-right-radius: var(--border-radius);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-right",
    style:
      "border-top-right-radius: var(--border-radius);\nborder-bottom-right-radius: var(--border-radius);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-left-xs",
    style:
      "border-top-left-radius: 0.125rem;\nborder-bottom-left-radius: 0.125rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-top-xs",
    style:
      "border-top-left-radius: 0.125rem;\nborder-top-right-radius: 0.125rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-bottom-xs",
    style:
      "border-bottom-left-radius: 0.125rem;\nborder-bottom-right-radius: 0.125rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-right-xs",
    style:
      "border-top-right-radius: 0.125rem;\nborder-bottom-right-radius: 0.125rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-left-sm",
    style:
      "border-top-left-radius: 0.25rem;\nborder-bottom-left-radius: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-top-sm",
    style:
      "border-top-left-radius: 0.25rem;\nborder-top-right-radius: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-bottom-sm",
    style:
      "border-bottom-left-radius: 0.25rem;\nborder-bottom-right-radius: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-right-sm",
    style:
      "border-top-right-radius: 0.25rem;\nborder-bottom-right-radius: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-left-md",
    style:
      "border-top-left-radius: 0.375rem;\nborder-bottom-left-radius: 0.375rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-top-md",
    style:
      "border-top-left-radius: 0.375rem;\nborder-top-right-radius: 0.375rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-bottom-md",
    style:
      "border-bottom-left-radius: 0.375rem;\nborder-bottom-right-radius: 0.375rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-right-md",
    style:
      "border-top-right-radius: 0.375rem;\nborder-bottom-right-radius: 0.375rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-left-lg",
    style:
      "border-top-left-radius: 0.5rem;\nborder-bottom-left-radius: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-top-lg",
    style: "border-top-left-radius: 0.5rem;\nborder-top-right-radius: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-bottom-lg",
    style:
      "border-bottom-left-radius: 0.5rem;\nborder-bottom-right-radius: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-right-lg",
    style:
      "border-top-right-radius: 0.5rem;\nborder-bottom-right-radius: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-left-xl",
    style:
      "border-top-left-radius: 0.75rem;\nborder-bottom-left-radius: 0.75rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-top-xl",
    style:
      "border-top-left-radius: 0.75rem;\nborder-top-right-radius: 0.75rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-bottom-xl",
    style:
      "border-bottom-left-radius: 0.75rem;\nborder-bottom-right-radius: 0.75rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-right-xl",
    style:
      "border-top-right-radius: 0.75rem;\nborder-bottom-right-radius: 0.75rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-left-2xl",
    style: "border-top-left-radius: 1rem;\nborder-bottom-left-radius: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-top-2xl",
    style: "border-top-left-radius: 1rem;\nborder-top-right-radius: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-bottom-2xl",
    style:
      "border-bottom-left-radius: 1rem;\nborder-bottom-right-radius: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-right-2xl",
    style: "border-top-right-radius: 1rem;\nborder-bottom-right-radius: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-left-3xl",
    style:
      "border-top-left-radius: 1.5rem;\nborder-bottom-left-radius: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-top-3xl",
    style: "border-top-left-radius: 1.5rem;\nborder-top-right-radius: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-bottom-3xl",
    style:
      "border-bottom-left-radius: 1.5rem;\nborder-bottom-right-radius: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-round-right-3xl",
    style:
      "border-top-right-radius: 1.5rem;\nborder-bottom-right-radius: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-circle-left",
    style: "border-top-left-radius: 50%;\nborder-bottom-left-radius: 50%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-circle-top",
    style: "border-top-left-radius: 50%;\nborder-top-right-radius: 50%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-circle-bottom",
    style: "border-bottom-left-radius: 50%;\nborder-bottom-right-radius: 50%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-circle-right",
    style: "border-top-right-radius: 50%;\nborder-bottom-right-radius: 50%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // BORDER WIDTH
  {
    class: "border-none",
    style: "border-width: 0px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-1",
    style: "border-width: 1px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-2",
    style: "border-width: 2px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-3",
    style: "border-width: 3px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-x-none",
    style: "border-right-width: 0px;\nborder-left-width: 0px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-x-1",
    style: "border-right-width: 1px;\nborder-left-width: 1px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-x-2",
    style: "border-right-width: 2px;\nborder-left-width: 2px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-x-3",
    style: "border-right-width: 3px;\nborder-left-width: 3px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-y-none",
    style: "border-top-width: 0px;\nborder-bottom-width: 0px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-y-1",
    style: "border-top-width: 1px;\nborder-bottom-width: 1px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-y-2",
    style: "border-top-width: 2px;\nborder-bottom-width: 2px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-y-3",
    style: "border-top-width: 3px;\nborder-bottom-width: 3px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-top-none",
    style: "border-top-width: 0px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-top-1",
    style: "border-top-width: 1px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-top-2",
    style: "border-top-width: 2px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-top-3",
    style: "border-top-width: 3px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-left-none",
    style: "border-left-width: 0px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-left-1",
    style: "border-left-width: 1px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-left-2",
    style: "border-left-width: 2px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-left-3",
    style: "border-left-width: 3px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-bottom-none",
    style: "border-bottom-width: 0px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-bottom-1",
    style: "border-bottom-width: 1px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-bottom-2",
    style: "border-bottom-width: 2px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-bottom-3",
    style: "border-bottom-width: 3px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-right-none",
    style: "border-right-width: 0px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-right-1",
    style: "border-right-width: 1px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-right-2",
    style: "border-right-width: 2px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-right-3",
    style: "border-right-width: 3px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // BORDER STYLE
  {
    class: "border-solid",
    style: "border-style: solid;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-dashed",
    style: "border-style: dashed;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-dotted",
    style: "border-style: dotted;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "border-double",
    style: "border-style: double;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // BORDER COLOR
  // PADDING
  {
    class: "p-0",
    style: "padding: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "p-1",
    style: "padding: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "p-2",
    style: "padding: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "p-3",
    style: "padding: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "p-4",
    style: "padding: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "p-5",
    style: "padding: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "p-6",
    style: "padding: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "p-7",
    style: "padding: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "p-8",
    style: "padding: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pt-0",
    style: "padding-top: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pt-1",
    style: "padding-top: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pt-2",
    style: "padding-top: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pt-3",
    style: "padding-top: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pt-4",
    style: "padding-top: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pt-5",
    style: "padding-top: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pt-6",
    style: "padding-top: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pt-7",
    style: "padding-top: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pt-8",
    style: "padding-top: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pr-0",
    style: "padding-right: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pr-1",
    style: "padding-right: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pr-2",
    style: "padding-right: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pr-3",
    style: "padding-right: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pr-4",
    style: "padding-right: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pr-5",
    style: "padding-right: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pr-6",
    style: "padding-right: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pr-7",
    style: "padding-right: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pr-8",
    style: "padding-right: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pb-0",
    style: "padding-bottom: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pb-1",
    style: "padding-bottom: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pb-2",
    style: "padding-bottom: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pb-3",
    style: "padding-bottom: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pb-4",
    style: "padding-bottom: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pb-5",
    style: "padding-bottom: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pb-6",
    style: "padding-bottom: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pb-7",
    style: "padding-bottom: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pb-8",
    style: "padding-bottom: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pl-0",
    style: "padding-left: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pl-1",
    style: "padding-left: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pl-2",
    style: "padding-left: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pl-3",
    style: "padding-left: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pl-4",
    style: "padding-left: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pl-5",
    style: "padding-left: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pl-6",
    style: "padding-left: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pl-7",
    style: "padding-left: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "pl-8",
    style: "padding-left: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "px-0",
    style: "padding-left: 0;\npadding-right: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "px-1",
    style: "padding-left: 0.25rem;\npadding-right: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "px-2",
    style: "padding-left: 0.5rem;\npadding-right: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "px-3",
    style: "padding-left: 1rem;\npadding-right: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "px-4",
    style: "padding-left: 1.5rem;\npadding-right: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "px-5",
    style: "padding-left: 2rem;\npadding-right: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "px-6",
    style: "padding-left: 3rem;\npadding-right: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "px-7",
    style: "padding-left: 4rem;\npadding-right: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "px-8",
    style: "padding-left: 5rem;\npadding-right: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "py-0",
    style: "padding-top: 0;\npadding-bottom: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "py-1",
    style: "padding-top: 0.25rem;\npadding-bottom: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "py-2",
    style: "padding-top: 0.5rem;\npadding-bottom: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "py-3",
    style: "padding-top: 1rem;\npadding-bottom: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "py-4",
    style: "padding-top: 1.5rem;\npadding-bottom: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "py-5",
    style: "padding-top: 2rem;\npadding-bottom: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "py-6",
    style: "padding-top: 3rem;\npadding-bottom: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "py-7",
    style: "padding-top: 4rem;\npadding-bottom: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "py-8",
    style: "padding-top: 5rem;\npadding-bottom: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // MARGIN
  {
    class: "m-auto",
    style: "margin: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mx-auto",
    style: "margin-left: auto;\nmargin-right: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "my-auto",
    style: "margin-top: auto;\nmargin-bottom: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mt-auto",
    style: "margin-top: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mb-auto",
    style: "margin-bottom: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "ml-auto",
    style: "margin-left: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mr-auto",
    style: "margin-right: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "m-0",
    style: "margin: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "m-1",
    style: "margin: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "m-2",
    style: "margin: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "m-3",
    style: "margin: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "m-4",
    style: "margin: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "m-5",
    style: "margin: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "m-6",
    style: "margin: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "m-7",
    style: "margin: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "m-8",
    style: "margin: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mt-0",
    style: "margin-top: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mt-1",
    style: "margin-top: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mt-2",
    style: "margin-top: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mt-3",
    style: "margin-top: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mt-4",
    style: "margin-top: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mt-5",
    style: "margin-top: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mt-6",
    style: "margin-top: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mt-7",
    style: "margin-top: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mt-8",
    style: "margin-top: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mr-0",
    style: "margin-right: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mr-1",
    style: "margin-right: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mr-2",
    style: "margin-right: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mr-3",
    style: "margin-right: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mr-4",
    style: "margin-right: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mr-5",
    style: "margin-right: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mr-6",
    style: "margin-right: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mr-7",
    style: "margin-right: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mr-8",
    style: "margin-right: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mb-0",
    style: "margin-bottom: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mb-1",
    style: "margin-bottom: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mb-2",
    style: "margin-bottom: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mb-3",
    style: "margin-bottom: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mb-4",
    style: "margin-bottom: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mb-5",
    style: "margin-bottom: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mb-6",
    style: "margin-bottom: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mb-7",
    style: "margin-bottom: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mb-8",
    style: "margin-bottom: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "ml-0",
    style: "margin-left: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "ml-1",
    style: "margin-left: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "ml-2",
    style: "margin-left: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "ml-3",
    style: "margin-left: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "ml-4",
    style: "margin-left: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "ml-5",
    style: "margin-left: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "ml-6",
    style: "margin-left: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "ml-7",
    style: "margin-left: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "ml-8",
    style: "margin-left: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mx-0",
    style: "margin-left: 0;\nmargin-right: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mx-1",
    style: "margin-left: 0.25rem;\nmargin-right: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mx-2",
    style: "margin-left: 0.5rem;\nmargin-right: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mx-3",
    style: "margin-left: 1rem;\nmargin-right: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mx-4",
    style: "margin-left: 1.5rem;\nmargin-right: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mx-5",
    style: "margin-left: 2rem;\nmargin-right: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mx-6",
    style: "margin-left: 3rem;\nmargin-right: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mx-7",
    style: "margin-left: 4rem;\nmargin-right: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "mx-8",
    style: "margin-left: 5rem;\nmargin-right: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "my-0",
    style: "margin-top: 0;\nmargin-bottom: 0;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "my-1",
    style: "margin-top: 0.25rem;\nmargin-bottom: 0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "my-2",
    style: "margin-top: 0.5rem;\nmargin-bottom: 0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "my-3",
    style: "margin-top: 1rem;\nmargin-bottom: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "my-4",
    style: "margin-top: 1.5rem;\nmargin-bottom: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "my-5",
    style: "margin-top: 2rem;\nmargin-bottom: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "my-6",
    style: "margin-top: 3rem;\nmargin-bottom: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "my-7",
    style: "margin-top: 4rem;\nmargin-bottom: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "my-8",
    style: "margin-top: 5rem;\nmargin-bottom: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-m-1",
    style: "margin: -0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-m-2",
    style: "margin: -0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-m-3",
    style: "margin: -1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-m-4",
    style: "margin: -1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-m-5",
    style: "margin: -2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-m-6",
    style: "margin: -3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-m-7",
    style: "margin: -4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-m-8",
    style: "margin: -5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mt-1",
    style: "margin-top: -0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mt-2",
    style: "margin-top: -0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mt-3",
    style: "margin-top: -1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mt-4",
    style: "margin-top: -1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mt-5",
    style: "margin-top: -2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mt-6",
    style: "margin-top: -3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mt-7",
    style: "margin-top: -4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mt-8",
    style: "margin-top: -5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mr-1",
    style: "margin-right: -0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mr-2",
    style: "margin-right: -0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mr-3",
    style: "margin-right: -1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mr-4",
    style: "margin-right: -1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mr-5",
    style: "margin-right: -2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mr-6",
    style: "margin-right: -3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mr-7",
    style: "margin-right: -4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mr-8",
    style: "margin-right: -5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mb-1",
    style: "margin-bottom: -0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mb-2",
    style: "margin-bottom: -0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mb-3",
    style: "margin-bottom: -1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mb-4",
    style: "margin-bottom: -1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mb-5",
    style: "margin-bottom: -2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mb-6",
    style: "margin-bottom: -3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mb-7",
    style: "margin-bottom: -4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mb-8",
    style: "margin-bottom: -5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-ml-1",
    style: "margin-left: -0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-ml-2",
    style: "margin-left: -0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-ml-3",
    style: "margin-left: -1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-ml-4",
    style: "margin-left: -1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-ml-5",
    style: "margin-left: -2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-ml-6",
    style: "margin-left: -3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-ml-7",
    style: "margin-left: -4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-ml-8",
    style: "margin-left: -5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mx-1",
    style: "margin-left: -0.25rem;\nmargin-right: -0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mx-2",
    style: "margin-left: -0.5rem;\nmargin-right: -0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mx-3",
    style: "margin-left: -1rem;\nmargin-right: -1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mx-4",
    style: "margin-left: -1.5rem;\nmargin-right: -1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mx-5",
    style: "margin-left: -2rem;\nmargin-right: -2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mx-6",
    style: "margin-left: -3rem;\nmargin-right: -3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mx-7",
    style: "margin-left: -4rem;\nmargin-right: -4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-mx-8",
    style: "margin-left: -5rem;\nmargin-right: -5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-my-1",
    style: "margin-top: -0.25rem;\nmargin-bottom: -0.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-my-2",
    style: "margin-top: -0.5rem;\nmargin-bottom: -0.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-my-3",
    style: "margin-top: -1rem;\nmargin-bottom: -1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-my-4",
    style: "margin-top: -1.5rem;\nmargin-bottom: -1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-my-5",
    style: "margin-top: -2rem;\nmargin-bottom: -2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-my-6",
    style: "margin-top: -3rem;\nmargin-bottom: -3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-my-7",
    style: "margin-top: -4rem;\nmargin-bottom: -4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-my-8",
    style: "margin-top: -5rem;\nmargin-bottom: -5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // MIN WIDTH
  {
    class: "min-w-0",
    style: "min-width: 0px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "min-w-full",
    style: "min-width: 100%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "min-w-screen",
    style: "min-width: 100vw;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "min-w-min",
    style: "min-width: min-content;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "min-w-max",
    style: "min-width: max-content;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // WIDTH
  {
    class: "w-full",
    style: "width: 100%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-screen",
    style: "width: 100vw;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-auto",
    style: "width: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-min",
    style: "width: min-content;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-max",
    style: "width: max-content;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-1",
    style: "width: 8.3333%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-2",
    style: "width: 16.6667%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-3",
    style: "width: 25%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-4",
    style: "width: 33.3333%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-5",
    style: "width: 41.6667%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-6",
    style: "width: 50%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-7",
    style: "width: 58.3333%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-8",
    style: "width: 66.6667%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-9",
    style: "width: 75%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-10",
    style: "width: 83.3333%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-11",
    style: "width: 91.6667%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-12",
    style: "width: 100%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-1rem",
    style: "width: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-2rem",
    style: "width: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-3rem",
    style: "width: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-4rem",
    style: "width: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-5rem",
    style: "width: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-6rem",
    style: "width: 6rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-7rem",
    style: "width: 7rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-8rem",
    style: "width: 8rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-9rem",
    style: "width: 9rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-10rem",
    style: "width: 10rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-11rem",
    style: "width: 11rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-12rem",
    style: "width: 12rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-13rem",
    style: "width: 13rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-14rem",
    style: "width: 14rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-15rem",
    style: "width: 15rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-16rem",
    style: "width: 16rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-17rem",
    style: "width: 17rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-18rem",
    style: "width: 18rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-19rem",
    style: "width: 19rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-20rem",
    style: "width: 20rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-21rem",
    style: "width: 21rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-22rem",
    style: "width: 22rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-23rem",
    style: "width: 23rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-24rem",
    style: "width: 24rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-25rem",
    style: "width: 25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-26rem",
    style: "width: 26rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-27rem",
    style: "width: 27rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-28rem",
    style: "width: 28rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-29rem",
    style: "width: 29rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "w-30rem",
    style: "width: 30rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // MAX WIDTH
  {
    class: "max-w-0",
    style: "max-width: 0px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-full",
    style: "max-width: 100%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-screen",
    style: "max-width: 100vw;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-min",
    style: "max-width: min-content;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-max",
    style: "max-width: max-content;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-1rem",
    style: "max-width: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-2rem",
    style: "max-width: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-3rem",
    style: "max-width: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-4rem",
    style: "max-width: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-5rem",
    style: "max-width: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-6rem",
    style: "max-width: 6rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-7rem",
    style: "max-width: 7rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-8rem",
    style: "max-width: 8rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-9rem",
    style: "max-width: 9rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-10rem",
    style: "max-width: 10rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-11rem",
    style: "max-width: 11rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-12rem",
    style: "max-width: 12rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-13rem",
    style: "max-width: 13rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-14rem",
    style: "max-width: 14rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-15rem",
    style: "max-width: 15rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-16rem",
    style: "max-width: 16rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-17rem",
    style: "max-width: 17rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-18rem",
    style: "max-width: 18rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-19rem",
    style: "max-width: 19rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-20rem",
    style: "max-width: 20rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-21rem",
    style: "max-width: 21rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-22rem",
    style: "max-width: 22rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-23rem",
    style: "max-width: 23rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-24rem",
    style: "max-width: 24rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-25rem",
    style: "max-width: 25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-26rem",
    style: "max-width: 26rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-27rem",
    style: "max-width: 27rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-28rem",
    style: "max-width: 28rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-29rem",
    style: "max-width: 29rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-w-30rem",
    style: "max-width: 30rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // MIN HEIGHT
  {
    class: "min-h-0",
    style: "min-height: 0px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "min-h-full",
    style: "min-height: 100%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "min-h-screen",
    style: "min-height: 100vh;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // HEIGHT
  {
    class: "h-full",
    style: "height: 100%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-screen",
    style: "height: 100vh;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-auto",
    style: "height: auto;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-1rem",
    style: "height: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-2rem",
    style: "height: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-3rem",
    style: "height: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-4rem",
    style: "height: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-5rem",
    style: "height: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-6rem",
    style: "height: 6rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-7rem",
    style: "height: 7rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-8rem",
    style: "height: 8rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-9rem",
    style: "height: 9rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-10rem",
    style: "height: 10rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-11rem",
    style: "height: 11rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-12rem",
    style: "height: 12rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-13rem",
    style: "height: 13rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-14rem",
    style: "height: 14rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-15rem",
    style: "height: 15rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-16rem",
    style: "height: 16rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-17rem",
    style: "height: 17rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-18rem",
    style: "height: 18rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-19rem",
    style: "height: 19rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-20rem",
    style: "height: 20rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-21rem",
    style: "height: 21rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-22rem",
    style: "height: 22rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-23rem",
    style: "height: 23rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-24rem",
    style: "height: 24rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-25rem",
    style: "height: 25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-26rem",
    style: "height: 26rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-27rem",
    style: "height: 27rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-28rem",
    style: "height: 28rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-29rem",
    style: "height: 29rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "h-30rem",
    style: "height: 30rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // MAX HEIGHT
  {
    class: "max-h-0",
    style: "max-height: 0px;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-full",
    style: "max-height: 100%;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-screen",
    style: "max-height: 100vh;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-1rem",
    style: "max-height: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-2rem",
    style: "max-height: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-3rem",
    style: "max-height: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-4rem",
    style: "max-height: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-5rem",
    style: "max-height: 5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-6rem",
    style: "max-height: 6rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-7rem",
    style: "max-height: 7rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-8rem",
    style: "max-height: 8rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-9rem",
    style: "max-height: 9rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-10rem",
    style: "max-height: 10rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-11rem",
    style: "max-height: 11rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-12rem",
    style: "max-height: 12rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-13rem",
    style: "max-height: 13rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-14rem",
    style: "max-height: 14rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-15rem",
    style: "max-height: 15rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-16rem",
    style: "max-height: 16rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-17rem",
    style: "max-height: 17rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-18rem",
    style: "max-height: 18rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-19rem",
    style: "max-height: 19rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-20rem",
    style: "max-height: 20rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-21rem",
    style: "max-height: 21rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-22rem",
    style: "max-height: 22rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-23rem",
    style: "max-height: 23rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-24rem",
    style: "max-height: 24rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-25rem",
    style: "max-height: 25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-26rem",
    style: "max-height: 26rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-27rem",
    style: "max-height: 27rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-28rem",
    style: "max-height: 28rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-29rem",
    style: "max-height: 29rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "max-h-30rem",
    style: "max-height: 30rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // FONT SIZE
  {
    class: "text-xs",
    style: "font-size: .75rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "text-sm",
    style: "font-size: .875rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "text-base",
    style: "font-size: 1rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "text-lg",
    style: "font-size: 1.125rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "text-xl",
    style: "font-size: 1.25rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "text-2xl",
    style: "font-size: 1.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "text-3xl",
    style: "font-size: 1.75rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "text-4xl",
    style: "font-size: 2rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "text-5xl",
    style: "font-size: 2.5rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "text-6xl",
    style: "font-size: 3rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "text-7xl",
    style: "font-size: 4rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "text-8xl",
    style: "font-size: 6rem;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // FONT WEIGHT
  {
    class: "font-light",
    style: "font-weight: 300;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "font-normal",
    style: "font-weight: 400;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "font-medium",
    style: "font-weight: 500;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "font-semibold",
    style: "font-weight: 600;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "font-bold",
    style: "font-weight: 700;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // FONT STYLE
  {
    class: "font-italic",
    style: "font-style: italic;",
    kind: SnippetKind.Utility,
  },
  // TEXT ALIGN
  {
    class: "text-center",
    style: "text-align: center;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "text-justify",
    style: "text-align: justify;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "text-left",
    style: "text-align: left;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "text-right",
    style: "text-align: right;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // TEXT DECORATION
  {
    class: "underline",
    style: "text-decoration: underline;",
    kind: SnippetKind.Utility,
  },
  {
    class: "line-through",
    style: "text-decoration: line-through;",
    kind: SnippetKind.Utility,
  },
  {
    class: "no-underline",
    style: "text-decoration: none;",
    kind: SnippetKind.Utility,
  },

  // TEXT OVERFLOW
  {
    class: "text-overflow-clip",
    style: "text-overflow: clip;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "text-overflow-ellipsis",
    style: "text-overflow: ellipsis;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // TEXT TRANSFORM
  {
    class: "lowercase",
    style: "text-transform: lowercase;",
    kind: SnippetKind.Utility,
  },
  {
    class: "uppercase",
    style: "text-transform: uppercase;",
    kind: SnippetKind.Utility,
  },
  {
    class: "capitalize",
    style: "text-transform: capitalize;",
    kind: SnippetKind.Utility,
  },

  // LINE HEIGHT
  {
    class: "line-height-1",
    style: "line-height: 1;",
    kind: SnippetKind.Utility,
  },
  {
    class: "line-height-2",
    style: "line-height: 1.25;",
    kind: SnippetKind.Utility,
  },
  {
    class: "line-height-3",
    style: "line-height: 1.5;",
    kind: SnippetKind.Utility,
  },
  {
    class: "line-height-4",
    style: "line-height: 2;",
    kind: SnippetKind.Utility,
  },

  // WITHE SPACE
  {
    class: "white-space-normal",
    style: "white-space: normal;",
    kind: SnippetKind.Utility,
  },
  {
    class: "white-space-nowrap",
    style: "white-space: nowrap;",
    kind: SnippetKind.Utility,
  },

  // LIST STYLE
  {
    class: "list-none",
    style: "list-style: none;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "list-disc",
    style: "list-style: disc;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "list-decimal",
    style: "list-style: decimal;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // VERTICAL ALIGN
  {
    class: "vertical-align-baseline",
    style: "vertical-align: baseline;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "vertical-align-top",
    style: "vertical-align: top;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "vertical-align-middle",
    style: "vertical-align: middle;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "vertical-align-bottom",
    style: "vertical-align: bottom;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "vertical-align-text-top",
    style: "vertical-align: text-top;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "vertical-align-text-bottom",
    style: "vertical-align: text-bottom;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "vertical-align-sub",
    style: "vertical-align: sub;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "vertical-align-super",
    style: "vertical-align: super;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // BOX SHADOW
  {
    class: "shadow-none",
    style: "box-shadow: none;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "shadow-1",
    style:
      "box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.08);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "shadow-2",
    style:
      "box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.12);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "shadow-3",
    style:
      "box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 1px 4px -1px rgba(0, 0, 0, 0.1);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "shadow-4",
    style:
      "box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "shadow-5",
    style:
      "box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "shadow-6",
    style:
      "box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "shadow-7",
    style:
      "box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.08), 0px 22px 30px 2px rgba(0, 0, 0, 0.15), 0px 8px 10px rgba(0, 0, 0, 0.15);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "shadow-8",
    style:
      "box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2);",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // OPACITY
  { class: "opacity-0", style: "opacity: 0;", kind: SnippetKind.Utility },
  { class: "opacity-10", style: "opacity: .1;", kind: SnippetKind.Utility },
  { class: "opacity-20", style: "opacity: .2;", kind: SnippetKind.Utility },
  { class: "opacity-30", style: "opacity: .3;", kind: SnippetKind.Utility },
  { class: "opacity-40", style: "opacity: .4;", kind: SnippetKind.Utility },
  { class: "opacity-50", style: "opacity: .5;", kind: SnippetKind.Utility },
  { class: "opacity-60", style: "opacity: .6;", kind: SnippetKind.Utility },
  { class: "opacity-70", style: "opacity: .7;", kind: SnippetKind.Utility },
  { class: "opacity-80", style: "opacity: .8;", kind: SnippetKind.Utility },
  { class: "opacity-90", style: "opacity: .9;", kind: SnippetKind.Utility },
  { class: "opacity-100", style: "opacity: 1;", kind: SnippetKind.Utility },

  // TRANSITION
  {
    class: "transition-none",
    style: "transition-property: none;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-all",
    style: "transition-property: all;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-colors",
    style: "transition-property: background-color, border-color, color;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-transform",
    style: "transition-property: transform;",
    kind: SnippetKind.Utility,
  },

  // TRANSITION DURATION
  {
    class: "transition-duration-100",
    style: "transition-duration: 100ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-duration-150",
    style: "transition-duration: 150ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-duration-200",
    style: "transition-duration: 200ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-duration-300",
    style: "transition-duration: 300ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-duration-400",
    style: "transition-duration: 400ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-duration-500",
    style: "transition-duration: 500ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-duration-1000",
    style: "transition-duration: 1000ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-duration-2000",
    style: "transition-duration: 2000ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-duration-3000",
    style: "transition-duration: 3000ms;",
    kind: SnippetKind.Utility,
  },

  // TRANSITION TIMING FUNCTION
  {
    class: "transition-linear",
    style: "transition-timing-function: linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-ease-in",
    style: "transition-timing-function: cubic-bezier(0.4, 0, 1, 1);",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-ease-out",
    style: "transition-timing-function: cubic-bezier(0, 0, 0.2, 1);",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-ease-in-out",
    style: "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);",
    kind: SnippetKind.Utility,
  },

  // TRANSITION DELAY
  {
    class: "transition-delay-100",
    style: "transition-delay: 100ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-delay-150",
    style: "transition-delay: 150ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-delay-200",
    style: "transition-delay: 200ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-delay-300",
    style: "transition-delay: 300ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-delay-400",
    style: "transition-delay: 400ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-delay-500",
    style: "transition-delay: 500ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "transition-delay-1000",
    style: "transition-delay: 1000ms;",
    kind: SnippetKind.Utility,
  },

  // ANIMATIONS
  {
    class: "fadein",
    style: "animation: fadein 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "fadeout",
    style: "animation: fadeout 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "slidedown",
    style: "animation: slidedown 0.45s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "slideup",
    style: "animation: slideup 0.45s cubic-bezier(0, 1, 0, 1);",
    kind: SnippetKind.Utility,
  },
  {
    class: "scalein",
    style: "animation: scalein 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "fadeinleft",
    style: "animation: fadeinleft 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "fadeoutleft",
    style: "animation: fadeoutleft 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "fadeinright",
    style: "animation: fadeinright 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "fadeoutright",
    style: "animation: fadeoutright 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "fadeinup",
    style: "animation: fadeinup 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "fadeoutup",
    style: "animation: fadeoutup 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "fadeindown",
    style: "animation: fadeindown 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "fadeoutdown",
    style: "animation: fadeoutdown 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animate-width",
    style: "animation: animate-width 1000ms linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "flip",
    style: "animation: flip 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "flipleft",
    style: "animation: flipleft 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "flipright",
    style: "animation: flipright 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "flipup",
    style: "animation: flipup 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "zoomin",
    style: "animation: zoomin 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "zoomindown",
    style: "animation: zoomindown 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "zoominleft",
    style: "animation: zoominleft 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "zoomninright",
    style: "animation: zoomninright 0.15s linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "zoominup",
    style: "animation: zoominup 0.15s linear;",
    kind: SnippetKind.Utility,
  },

  // ANIMATION DURATION
  {
    class: "animation-duration-100",
    style: "animation-duration: 100ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-duration-150",
    style: "animation-duration: 150ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-duration-200",
    style: "animation-duration: 200ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-duration-300",
    style: "animation-duration: 300ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-duration-400",
    style: "animation-duration: 400ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-duration-500",
    style: "animation-duration: 500ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-duration-1000",
    style: "animation-duration: 1000ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-duration-2000",
    style: "animation-duration: 2000ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-duration-3000",
    style: "animation-duration: 3000ms;",
    kind: SnippetKind.Utility,
  },

  // ANIMATION DELAY
  {
    class: "animation-delay-100",
    style: "animation-delay: 100ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-delay-150",
    style: "animation-delay: 150ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-delay-200",
    style: "animation-delay: 200ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-delay-300",
    style: "animation-delay: 300ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-delay-400",
    style: "animation-delay: 400ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-delay-500",
    style: "animation-delay: 500ms;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-delay-1000",
    style: "animation-delay: 1000ms;",
    kind: SnippetKind.Utility,
  },

  // ANIMATION ITERATION
  {
    class: "animation-iteration-1",
    style: "animation-iteration-count: 1;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-iteration-2",
    style: "animation-iteration-count: 2;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-iteration-infinite",
    style: "animation-iteration-count: infinite;",
    kind: SnippetKind.Utility,
  },

  // ANIMATION TIMING FUNCTION
  {
    class: "animation-linear",
    style: "animation-timing-function: linear;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-ease-in",
    style: "animation-timing-function: cubic-bezier(0.4, 0, 1, 1);",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-ease-out",
    style: "animation-timing-function: cubic-bezier(0, 0, 0.2, 1);",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-ease-in-out",
    style: "animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);",
    kind: SnippetKind.Utility,
  },

  // ANIMATION FILL
  {
    class: "animation-fill-none",
    style: "animation-fill-mode: none;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-fill-forwards",
    style: "animation-fill-mode: forwards;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-fill-backwards",
    style: "animation-fill-mode: backwards;",
    kind: SnippetKind.Utility,
  },
  {
    class: "animation-fill-both",
    style: "animation-fill-mode: both;",
    kind: SnippetKind.Utility,
  },

  // TRANSFORM TRANSLATE
  {
    class: "translate-x-0",
    style: "transform: translateX(0%);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "translate-x-100",
    style: "transform: translateX(100%);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-translate-x-100",
    style: "transform: translateX(-100%);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "translate-y-0",
    style: "transform: translateY(0%);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "translate-y-100",
    style: "transform: translateY(100%);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-translate-y-100",
    style: "transform: translateY(-100%);",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // TRANSFORM ORIGIN
  {
    class: "origin-center",
    style: "transform-origin: center;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "origin-top",
    style: "transform-origin: top;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "origin-top-right",
    style: "transform-origin: top right;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "origin-right",
    style: "transform-origin: right;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "origin-bottom-right",
    style: "transform-origin: bottom right;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "origin-bottom",
    style: "transform-origin: bottom;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "origin-bottom-left",
    style: "transform-origin: bottom left;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "origin-left",
    style: "transform-origin: left;",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "origin-top-left",
    style: "transform-origin: top left;",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // TRANSFORM ROTATE
  {
    class: "rotate-90",
    style: "transform: rotate(90deg);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-rotate-90",
    style: "transform: rotate(-90deg);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "rotate-180",
    style: "transform: rotate(180deg);",
    kind: SnippetKind.Utility,
    responsive: true,
  },
  {
    class: "-rotate-180",
    style: "transform: rotate(-180deg);",
    kind: SnippetKind.Utility,
    responsive: true,
  },

  // APPEARANCE
  {
    class: "appearance-none",
    style: "appearance: none;",
    kind: SnippetKind.Utility,
  },

  // CURSOR
  { class: "cursor-auto", style: "cursor: auto;", kind: SnippetKind.Utility },
  {
    class: "cursor-pointer",
    style: "cursor: pointer;",
    kind: SnippetKind.Utility,
  },
  { class: "cursor-wait", style: "cursor: wait;", kind: SnippetKind.Utility },
  { class: "cursor-move", style: "cursor: move;", kind: SnippetKind.Utility },

  // OUTLINE
  { class: "outline-none", style: "outline: none;", kind: SnippetKind.Utility },

  // POINTER EVENTS
  {
    class: "pointer-events-none",
    style: "pointer-events: none;",
    kind: SnippetKind.Utility,
  },
  {
    class: "pointer-events-auto",
    style: "pointer-events: auto;",
    kind: SnippetKind.Utility,
  },

  // USER SELECT
  {
    class: "select-none",
    style: "user-select: none;",
    kind: SnippetKind.Utility,
  },
  {
    class: "select-text",
    style: "user-select: text;",
    kind: SnippetKind.Utility,
  },
  {
    class: "select-all",
    style: "user-select: all;",
    kind: SnippetKind.Utility,
  },
  {
    class: "select-auto",
    style: "user-select: auto;",
    kind: SnippetKind.Utility,
  },
];

const classTypes = [
  { prefix: "bg", cssProp: "background-color" },
  { prefix: "text", cssProp: "color" },
  { prefix: "border", cssProp: "border-color" },
];

Object.entries(colorPalette).forEach(([colorName, shades]) => {
  Object.entries(shades).forEach(([shade, hex]) => {
    const rgba = hexToRgba(hex);
    const variableName = `${colorName}-${shade}`;

    classTypes.forEach(({ prefix, cssProp }) => {
      primeflexSnippets.push({
        class: `${prefix}-${variableName}`,
        style: `${cssProp}: var(--${variableName});`,
        defaultStyle: `${cssProp}: ${rgba};`,
        kind: SnippetKind.FixedColor,
        colorVariableName: variableName,
        pseudoState: true,
      });
    });
  });
});
