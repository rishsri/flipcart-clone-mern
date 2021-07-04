import { createContext } from "react";
import {CssBaseline} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const TemplateContext = createContext(null);

const Template = ({ children }) => {
  const theme = createMuiTheme({
     overrides: {
         MuiDialog: {
             paperWidthSm: {
                 maxWidth: 'unset'
             }
         },
         MuiDialogContent: {
             root: {
                 padding: 0,
                 '&:first-child': {
                     paddingTop: 0
                 }
             }
         },
         MuiTableCell: {
            root: {
                borderBottom: 0
            }
        }
     }
  });

  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          {children}</ThemeProvider>
    </TemplateContext.Provider>
  );
};

export default Template;

//Cssbaseline = The MUI provides MuiCssBaseline that overrides some of our CSS styles.
