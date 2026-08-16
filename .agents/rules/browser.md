---
trigger: always_on
---

# Browser Automation & Testing Rules

## 1. STRICT PROHIBITION: Never Use `browser_subagent`
- Calling the `browser_subagent` tool is **STRICTLY FORBIDDEN**. It leads to process deadlocks and session freezing on macOS.
- Never propose or invoke `browser_subagent` under any circumstances.

## 2. MANDATORY: Chrome DevTools / CDP Direct Automation
- For all browser interactions, Storybook inspections, UI testing, DOM analysis, and console error checks:
  1. Use **`chrome-devtools` MCP tools** (`navigate_page`, `evaluate_script`, `click`, `take_screenshot`, `list_console_messages`, etc.).
  2. Or interact directly with Google Chrome via Chrome Remote Debugging Protocol (CDP) on `http://127.0.0.1:9222`.
  3. If Google Chrome with port 9222 is not active, launch it in the background via:
     ```bash
     /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-dev-profile &
     ```
  4. For simple static page reading or documentation fetching, use `read_url_content`.
