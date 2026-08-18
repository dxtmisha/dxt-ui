---
trigger: always_on
---

# Browser Automation & Testing Rules

## 1. STRICT PROHIBITION: Never Use `browser_subagent`
- Calling the `browser_subagent` tool is **STRICTLY FORBIDDEN**. It leads to process deadlocks and session freezing on macOS.
- Never propose or invoke `browser_subagent` under any circumstances.

## 2. MANDATORY: Desktop Browser Automation (Chrome DevTools / CDP)
- For desktop browser interactions, Storybook inspections, UI testing, DOM analysis, and console error checks:
  1. Use **`chrome-devtools` MCP tools** (`navigate_page`, `evaluate_script`, `click`, `take_screenshot`, `list_console_messages`, etc.).
  2. Or interact directly with Google Chrome via Chrome Remote Debugging Protocol (CDP) on `http://127.0.0.1:9222`.
  3. If Google Chrome with port 9222 is not active, launch it in the background via:
     ```bash
     /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-dev-profile &
     ```
  4. For simple static page reading or documentation fetching, use `read_url_content`.

## 3. MANDATORY: Mobile Testing via Real Apple iOS Simulator (Xcode Simulator)
- When the user asks to test on mobile, phone, iPhone, iPad («на телефоне», «на реальном устройстве», «в симуляторе»):
  **Always use the native Apple Xcode Simulator (`Simulator.app` + `xcrun simctl`)** with `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer`.

### Standard Workflow:
1. **Check or Boot Simulator:**
   ```bash
   DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer xcrun simctl list devices | grep -i booted
   # If not booted, boot device (e.g. iPhone 17 Pro Max / iPhone 17 Pro):
   DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer xcrun simctl boot <device_id_or_name>
   open -a /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app
   DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer xcrun simctl bootstatus <device_id_or_name>
   ```
2. **Open URL in Mobile Safari:**
   ```bash
   DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer xcrun simctl openurl booted "<URL>"
   ```
3. **Capture Real WebKit Screenshots:**
   ```bash
   DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer xcrun simctl io booted screenshot <artifact_dir>/screenshot.png
   ```
4. **Interactive Click & Drag on Simulator:**
   - Query Simulator window position/size via AppleScript:
     ```bash
     osascript -e 'tell application "Simulator" to activate' -e 'tell application "System Events" to tell process "Simulator" to return {position of window 1, size of window 1}'
     ```
   - Dispatch real clicks to the window using CGEvent / Swift utility.
5. **Appearance, Accessibility & Environment:**
   - Dark / Light Mode: `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer xcrun simctl ui booted appearance dark` / `light`
   - Dynamic Type: `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer xcrun simctl ui booted content_size extra-extra-large`
   - High Contrast: `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer xcrun simctl ui booted increase_contrast enabled`

