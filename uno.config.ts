// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from "unocss";
import presetShadcn from "./uno.preset.shadcn";

export default defineConfig({
    preflights: [
      {
        getCSS: () => `
          *:not(div) {
            -webkit-transition-property: all;
            -o-transition-property: all;
            transition-property: all;
            -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            -webkit-transition-duration: 400ms;
            -o-transition-duration: 400ms;
            transition-duration: 400ms;
            font-family: "Comfortaa";
          }
          a:hover {
            text-decoration-line: underline;
            text-underline-offset: 4px;
            text-decoration-color: hsl(210 40% 38%);
            color: hsl(210 40% 38%);
          }
          a:focus {
            text-decoration-line: underline;
            text-underline-offset: 4px;
            text-decoration-color: hsl(210 40% 38%);
            color: hsl(210 40% 38%);
          }
          @keyframes circular-charging {

            0% {
                transform: rotate3d(0, 0, 1, 0deg);
            }
            100% {
                transform: rotate3d(0, 0, 1, -360deg);
            }

        }

        .circular-charging {
            animation: circular-charging 6s linear infinite;
            transform-origin: 600% 600%;
        }
        @keyframes pulse {
            0%,
            100% {
              opacity: 0.66;
            }
            50% {
              opacity: 0.33;
            }
          }
          .hero-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

        `
      }
    ],
    shortcuts: [
        {
            _transitions: "transition-all transition-duration-400 ease",
            "animate-accordion-up": "accordion-up",
            "animate-accordion-down": "accordion-down",
            "flex-center": "flex justify-center items-center",
            "flex-cols-center": "flex flex-col justify-center items-center",
            "grid-center": "grid grid-items-center grid-justify-center",
            "grid-cols-center": "grid grid-flow-col justify-center items-center",
            _btn_hover:
                "_transitions",
            _btn_click: "_transitions scale-97 brightness-75",
            hud: ""
        },
    ],
    theme: {
        colors: {
            brand: {
                primary: "hsl(var(--hue, 15) 78% 51%)", //class="bg-brand-primary"
            },
            success: "hsl(var(--success))",
            error: "hsl(var(--error))",
        },
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                comfortaa: "Comfortaa",
                montserrat: "Montserrat"
            },
        }),
        presetShadcn(),
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
});
