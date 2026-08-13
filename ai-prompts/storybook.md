Your task is to build the project's Storybook and move the built static output to the `docs` folder in the project root.

### Step-by-Step Execution Algorithm:
1. **Build Storybook**:
   Navigate to the `packages/storybook` directory and execute the build command:
   ```bash
   npm run build-storybook
   ```
   The compiled files will be saved in the `packages/storybook/storybook-static` directory.

2. **Clean Target Folder**:
   Completely remove all files and folders inside the `docs` directory located at the repository root:
   ```bash
   rm -rf docs && mkdir docs
   ```

3. **Copy Files**:
   Move all contents of the `packages/storybook/storybook-static` folder to the `docs` folder in the project root:
   ```bash
   cp -R packages/storybook/storybook-static/. docs/
   ```

4. **Create `.nojekyll` File**:
   Create an empty `.nojekyll` file inside the `docs` folder to prevent GitHub Pages from ignoring directories starting with underscores:
   ```bash
   touch docs/.nojekyll
   ```

5. **Clean Temporary Files**:
   Delete the temporary build directory:
   ```bash
   rm -rf packages/storybook/storybook-static
   ```

You MUST execute these steps sequentially whenever you receive a request to build or update documentation/Storybook.
