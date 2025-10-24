import { primeflexSnippets, SnippetKind } from "./snippets";
import { primeflexBreakpoints, primeflexPseudoStates } from "./variants";
import { colorPalette, hexToRgba } from "../helpers/colorHelper";

export const primeflexColors: Record<string, string> = {
  white: "#ffff",
  transparent: "#0000",

  ...Object.fromEntries(
    [10, 20, 30, 40, 50, 60, 70, 80, 90].flatMap((alpha) => [
      [`white-alpha-${alpha}`, `rgba(255, 255, 255, ${alpha / 100})`],
      [`black-alpha-${alpha}`, `rgba(0, 0, 0, ${alpha / 100})`],
    ])
  ),
};

// extend colors with shades
Object.entries(colorPalette).forEach(([name, shades]) => {
  Object.entries(shades).forEach(([shade, hex]) => {
    primeflexColors[`${name}-${shade}`] = hexToRgba(hex);
  });
});

export const primeflexSnippetColors = primeflexSnippets.filter(({ kind }) =>
  [SnippetKind.FixedColor, SnippetKind.DynamicColor].includes(kind)
);

export const primeflexColorClassNames: string[] = [];

primeflexSnippetColors.forEach((snippet) => {
  primeflexColorClassNames.push(snippet.class);

  if (snippet.pseudoState) {
    primeflexPseudoStates.forEach((state) =>
      primeflexColorClassNames.push(state + snippet.class)
    );
  }

  if (snippet.responsive) {
    primeflexBreakpoints.forEach((bp) =>
      primeflexColorClassNames.push(bp + snippet.class)
    );
  }
});

export const primeflexSnippetColorsMap = new Map(
  primeflexSnippetColors.map((snippet) => [snippet.class, snippet])
);
