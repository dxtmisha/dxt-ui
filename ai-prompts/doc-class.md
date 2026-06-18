# Task: MDX Documentation Generation for Classes

Act as a documentation specialist for the `dxt-ui` project. Your goal is to generate professional, industrial-grade documentation for TypeScript classes in MDX format.

## General Requirements
- **Format**: MDX with Storybook Meta tags.
- **Languages**: Always generate three separate files: `.en.mdx` (English), `.ru.mdx` (Russian), and `.vi.mdx` (Vietnamese).
- **Style**: Technical, concise, and structured. Use bold text for key concepts.
- **Consistency**: All translations must be logically identical. Technical signatures (method names, types) MUST remain in English.

## Structure and Styling Rules

### 1. Meta Tag & Header
Every file starts with a Meta tag and an H1 title.
```mdx
import {Meta} from '@storybook/addon-docs/blocks'

<Meta title='@dxtmisha/en/functional-basic/Classes/Api - Request Management (Static)'/>

# Api Class
```

### 2. Introduction & Features
A clear paragraph followed by a bulleted list of advantages.
```mdx
The `Api` class is a **Primary Class (Static)** and serves as the main entry point for managing HTTP requests...

## Key Features
- **Static Interface** — perform operations without manual instantiation.
- **SSR Isolation** — utilizes `ServerStorage` for isolation.
```

### 3. Methods
All methods must be listed under a mandatory `## Methods` header.

#### Method Grouping
Divide methods into logical groups using H3 subheaders (e.g., `### Configuration`). 
**Mandatory**: If the class is divided into groups, **each group must have its own H3 header**.
**Exception**: If a class does not require division into groups, the H3 subheading is omitted entirely.

#### Style Consistency
**CRITICAL RULE**: Do NOT mix styles within a single group. A group must use EITHER the "Short Style" OR the "Detailed Style" for all its methods.

#### A. Short Style
Use for simple, self-explanatory methods (e.g., Getters, simple Setters).
```mdx
## Methods
### Configuration
- `setUrl(url: string): void` — Changes the base API URL.
- `setTimeout(timeout: number): void` — Changes the global timeout.
```

#### B. Detailed Style
Mandatory for **Primary Methods** (core functionality) or complex methods where the name/signature is insufficient for full understanding.
Include:
- **Sub-header** (H3 or H4) for the method name.
- **Description**.
- **Parameters** list.
- **Returns** description.
- **Usage Example** in a code block.

```mdx
## Methods
### `request`
Core executor for network requests.

**Parameters:**
- `pathRequest: string | ApiFetch` — Path or configuration object.

**Returns:** `Promise<T>` — The parsed response data.

```javascript
const data = await Api.request('/api/user')
```
```

### 4. Types & Architecture
Use H2 for broad architectural topics. Types should be listed as a list of properties.
```mdx
## Types
### ApiConfig
- `urlRoot: string` — the base URL for the API.

## Proxy Architecture
The `Api` class operates as a **Static Proxy**...
```

## Language Specifics
- **English**: Standard technical English.
- **Russian**: Professional technical terminology (e.g., "Инкапсуляция", "Изоляция", "Точка входа").
- **Vietnamese**: Professional technical terminology (e.g., "Lớp chính", "Cách ly SSR", "Điểm truy cập").

## Execution Strategy
1. **Analyze** the class: Identify which methods are "Primary" and which groups should be "Detailed".
2. **Draft** the structure: Ensure no mixed styles in groups.
3. **Translate**: Create the three files ensuring technical consistency.
