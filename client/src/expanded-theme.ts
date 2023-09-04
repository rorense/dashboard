//eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

// To make the variables in theme.ts viable for typescript, we create interfaces.
declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        [key: number]: string;
    }

    interface Palette {
        tertiary: PaletteColor;
    }
}