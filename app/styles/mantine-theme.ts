import {
  createTheme,
  Button,
  Paper,
  Modal,
  TextInput,
  Checkbox,
  Text,
  Select,
  MultiSelect,
  ActionIcon,
  Textarea,
  Table,
  Flex,
  PasswordInput,
  Tabs,
  Badge,
  Popover,
  Drawer,
  Accordion,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

export const theme = createTheme({
  //defaults
  primaryColor: "violet",
  primaryShade: 7,
  defaultRadius: "lg",

  //components
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "violet",
        radius: "md",
        loaderProps: { type: "dots" },
      },
      // styles: {
      //     root: {
      //         justifyContent: 'center',
      //         alignItems: 'center'
      //     },
      //     label: {
      //         justifyContent: 'center',
      //         alignItems: 'center'
      //     }
      // }
    }),
    Paper: Paper.extend({
      defaultProps: {
        radius: "lg",
        shadow: "xl",
        p: "xl",
        withBorder: true,
        w: "100%",
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        radius: "lg",
        centered: true,
      },
      styles: (theme) => ({
        // content: {
        //     display: 'flex',
        //     flexDirection: 'column',
        //     gap: 'var(--mantine-spacing-xl)',
        //     backgroundColor: 'var(--mantine-color-body)'
        // },
        root: {
        },
        header: {
          position: 'unset',
          padding: 0,
          minHeight: 'unset'
        },
        body: {
            backgroundColor: 'var(--mantine-color-body)',
            padding: 0
        },
        content: {
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--mantine-spacing-xl)',
          padding: 0
        },
        title: {
          fontSize: "var(--mantine-font-size-xl)",
          fontWeight: 700,
        },
      }),
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        size: "md",
        radius: "md",
      },
    }),
    // PasswordInput: PasswordInput.extend({
    //     defaultProps: {
    //         size: 'xl',
    //         radius: 'lg',
    //     },
    //     styles: {
    //         label: {
    //             fontWeight: 500,
    //             marginBottom: 'var(--mantine-spacing-xs)'
    //         }
    //     }
    // }),
    // Text: Text.extend({
    //     defaultProps: {
    //         size: 'xl',
    //     },
    //     styles: {
    //         root: {
    //             textWrap: 'wrap',
    //         }
    //     }
    // }),
    // Textarea: Textarea.extend({
    //     defaultProps: {
    //         size: 'xl',
    //         radius: 'lg',
    //     },
    // }),
    Checkbox: Checkbox.extend({
      defaultProps: {
        color: "violet",
        size: "md",
        radius: "md",
      },
    }),
    Select: Select.extend({
      defaultProps: {
        size: "md",
        radius: "md",
        comboboxProps: { shadow: "xl" },
        checkIconPosition: "right",
        color: "violet",
      },
      styles: {
        label: {
          fontWeight: 500,
          marginBottom: "var(--mantine-spacing-xs)",
        },
      },
    }),
    MultiSelect: MultiSelect.extend({
      defaultProps: {
        radius: "md",
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        radius: "md",
        size: "md",
        color: "violet",
      },
    }),
    Flex: Flex.extend({
      defaultProps: {
        gap: "xl",
      },
    }),
    DatePickerInput: DatePickerInput.extend({
      defaultProps: {
        radius: "md",
        size: "md",
        color: "violet",
      },
      styles: {
        label: {
          fontWeight: 500,
          marginBottom: "var(--mantine-spacing-xs)",
        },
      },
    }),
    Badge: Badge.extend({
      defaultProps: {
        radius: "md",
        size: "md",
        color: "violet",
      },
    }),
    Popover: Popover.extend({
      defaultProps: {},
      styles: {
        dropdown: {
          padding: "var(--mantine-spacing-xl)",
        },
      },
    }),
    Drawer: Drawer.extend({
      defaultProps: {},
      styles: {
        title: {
          fontSize: "1.5em",
          fontWeight: 700,
        },
        header: {
          padding: 0,
          minHeight: "unset",
        },
        body: {
          padding: 0,
        },
      },
    }),
    Accordion: Accordion.extend({
      defaultProps: {},
      styles: {
        control: {
          padding: 0,
        },
        content: {
          padding: 0,
        },
      },
    }),
  },
});
