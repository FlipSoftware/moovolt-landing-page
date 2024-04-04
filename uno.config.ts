import {
    presetIcons,
    presetTypography,
    presetWebFonts,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
} from "unocss";

export default {
    presets: [
        presetIcons({
            scale: 1,
            extraProperties: {
                display: "inline-block",
            },
        }),
        presetTypography(),
        presetUno(),
    ],
    transformers: [transformerVariantGroup(), transformerDirectives()],
    shortcuts: {},
};
