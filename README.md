# SheTech - Professional Next.js + Tailwind CSS Setup

A professionally organized Next.js application with TypeScript, Tailwind CSS, and a comprehensive design system with reusable components.

## 🚀 Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Reusable UI Components** (Button, Card, Input)
- **Design System** with centralized colors and theme constants
- **Organized Folder Structure** for scalability
- **Dark Mode Support** built-in
- **Accessibility** focused components

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with design system
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page with component showcase
├── components/
│   └── ui/                # Reusable UI components
│       ├── Button.tsx     # Button component with variants
│       ├── Card.tsx       # Card component with sub-components
│       ├── Input.tsx      # Input component with validation
│       └── index.ts       # Centralized exports
├── lib/
│   ├── constants/         # Design system constants
│   │   ├── colors.ts      # Color palette definitions
│   │   └── theme.ts       # Theme tokens (spacing, shadows, etc.)
│   └── utils/
│       └── cn.ts          # Utility for merging Tailwind classes
```

## 🎨 Design System

### Colors

The design system includes a comprehensive color palette:

- **Primary**: Blue scale (50-950)
- **Secondary**: Purple scale (50-950)
- **Gray**: Neutral grays (50-950)
- **Success**: Green scale (50-950)
- **Warning**: Yellow/Orange scale (50-950)
- **Error**: Red scale (50-950)

All colors are available as Tailwind classes (e.g., `bg-primary-500`, `text-error-600`).

### Components

#### Button

```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="md">Click me</Button>
<Button variant="outline" size="lg" fullWidth>Submit</Button>
<Button variant="danger" isLoading>Loading...</Button>
```

**Variants**: `primary`, `secondary`, `outline`, `ghost`, `danger`  
**Sizes**: `sm`, `md`, `lg`  
**Props**: `fullWidth`, `isLoading`, `disabled`

#### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';

<Card variant="elevated" padding="lg">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>
```

**Variants**: `default`, `outlined`, `elevated`  
**Padding**: `none`, `sm`, `md`, `lg`

#### Input

```tsx
import { Input } from '@/components/ui';

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  fullWidth
/>
<Input
  label="Password"
  type="password"
  error="Password is required"
  fullWidth
/>
```

**Props**: `label`, `error`, `helperText`, `fullWidth`, all standard input props

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Usage Guidelines

### Importing Components

Always import from the centralized index:

```tsx
import { Button, Card, Input } from '@/components/ui';
```

### Using Colors

Use Tailwind classes with the design system colors:

```tsx
<div className="bg-primary-500 text-white">
<div className="border-error-600 text-success-500">
```

### Styling Utilities

Use the `cn` utility for conditional classes:

```tsx
import { cn } from '@/lib/utils/cn';

<div className={cn('base-class', condition && 'conditional-class')} />
```

## 🎯 Best Practices

1. **Component Reusability**: Always check if a component exists before creating a new one
2. **Design System**: Use colors and spacing from the design system constants
3. **Type Safety**: Leverage TypeScript types for all components
4. **Accessibility**: Components include proper ARIA attributes and keyboard navigation
5. **Consistency**: Follow the established patterns for new components

## 📦 Dependencies

- `next`: 16.0.1
- `react`: 19.2.0
- `react-dom`: 19.2.0
- `tailwindcss`: ^4
- `typescript`: ^5
- `clsx`: For conditional classes
- `tailwind-merge`: For merging Tailwind classes

## 🔄 Adding New Components

When adding new components:

1. Create the component in `src/components/ui/`
2. Export it from `src/components/ui/index.ts`
3. Follow the existing patterns (forwardRef, TypeScript types, variants)
4. Use the design system colors and theme constants
5. Include proper TypeScript documentation

## 📄 License

This project is private and proprietary.
