import "./App.css";
import { RedocStandalone } from "redoc";

function App() {
  return (
    <div style={{ margin: "0 auto", maxWidth: 1200 }}>
      <RedocStandalone
        specUrl="./openapi.yaml"
        options={{
          scrollYOffset: 50,
          hideDownloadButton: false,
          theme: {
            // 1) BRAND COLORS
            colors: {
              primary: {
                main: "#2d3353", // Your brand color
              },
              text: {
                primary: "#333333", // Main body text color
                secondary: "#555555", // Less prominent text
              },
              // HTTP verb badge colors (example tweaks)
              http: {
                get: "#4caf50",
                post: "#2196f3",
                put: "#ff9800",
                delete: "#f44336",
              },
            },

            // 2) TYPOGRAPHY
            typography: {
              fontSize: "16px",
              lineHeight: "1.6em",
              // Main fonts
              fontFamily:
                "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, " +
                "Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, " +
                '"Segoe UI", Helvetica, Arial, sans-serif, ' +
                '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              // Headings
              headings: {
                fontFamily: "inherit", // use same as body or set a custom
                fontWeight: "600",
              },
              // Code blocks & inline code
              code: {
                fontSize: "14px",
                fontFamily:
                  "SFMono-Regular, Menlo, Monaco, Consolas, " +
                  '"Liberation Mono", "Courier New", monospace',
                lineHeight: "1.4em",
                color: "#000000",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default App;
