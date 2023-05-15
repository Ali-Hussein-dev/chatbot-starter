import { type MantineThemeOverride } from "@mantine/core";

export const themeOverride: MantineThemeOverride = {
    primaryColor: "gray",
    //   primaryShade: 9,
    globalStyles: ({ colors, colorScheme }) => ({
        a: {
            color: colors.blue[7],
            "&:hover": {
                color: "inherit",
            },
        },
        body: {
            background: colorScheme === "dark" ? colors.dark[9] : colors.gray[2],
            color: colorScheme === "dark" ? colors.dark[2] : colors.gray[6],
        },

        // scrollbar
        "::-webkit-scrollbar": {
            width: 8,
        },
        "::-webkit-scrollbar-track": {
            background: "transparent",
        },
        "::-webkit-scrollbar-thumb": {
            background: colorScheme === "dark" ? colors.dark[3] : colors.gray[5],
            borderRadius: 4,
        },
        ".mantine-Textarea-input, .mantine-Input-input, .mantine-Select-input": {
            "&:focus": {
                borderColor: colors.gray[7],
            },
            borderColor: "transparent",
        },
        ".mantine-MultiSelect-input": {
            "&:focus-within": {
                borderColor: colors.gray[7],
            },
            borderColor: "transparent",
        },
        ".mantine-Button-root": {
            color: colorScheme === "dark" ? colors.dark[1] : colors.gray[8],
        },
    }),
};
