# Component Reference Guide

Quick reference for all available components and their usage.

## Button Component

### Basic Usage

```tsx
import { Button } from '@/components/ui';

<Button variant="primary">Click me</Button>
```

### Variants

- `primary` - Primary action button (blue)
- `secondary` - Secondary action button (purple)
- `outline` - Outlined button with transparent background
- `ghost` - Minimal button with no border
- `danger` - Destructive action button (red)

### Sizes

- `sm` - Small button
- `md` - Medium button (default)
- `lg` - Large button

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `isLoading` | `boolean` | `false` | Show loading spinner |
| `fullWidth` | `boolean` | `false` | Make button full width |
| `disabled` | `boolean` | `false` | Disable button |
| All standard button HTML attributes | - | - | Passed through to button element |

### Examples

```tsx
// Primary button
<Button variant="primary">Save</Button>

// Secondary button
<Button variant="secondary">Cancel</Button>

// Outline button
<Button variant="outline">Learn More</Button>

// Ghost button
<Button variant="ghost">Skip</Button>

// Danger button
<Button variant="danger">Delete</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Full width
<Button fullWidth>Full Width Button</Button>

// Loading state
<Button isLoading>Processing...</Button>

// Disabled
<Button disabled>Disabled</Button>

// With onClick handler
<Button onClick={() => console.log('clicked')}>Click me</Button>
```

## Card Component

### Basic Usage

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

### Variants

- `default` - Default card with background
- `outlined` - Card with border
- `elevated` - Card with shadow

### Padding Options

- `none` - No padding
- `sm` - Small padding (16px)
- `md` - Medium padding (24px, default)
- `lg` - Large padding (32px)

### Examples

```tsx
// Simple card
<Card>
  <p>Simple content</p>
</Card>

// Card with header
<Card variant="elevated" padding="lg">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Main content area
  </CardContent>
</Card>

// Outlined card
<Card variant="outlined" padding="md">
  Content with border
</Card>
```

## Input Component

### Basic Usage

```tsx
import { Input } from '@/components/ui';

<Input label="Email" type="email" placeholder="Enter email" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Input label text |
| `error` | `string` | `undefined` | Error message to display |
| `helperText` | `string` | `undefined` | Helper text below input |
| `fullWidth` | `boolean` | `false` | Make input full width |
| All standard input HTML attributes | - | - | Passed through to input element |

### Examples

```tsx
// Basic input
<Input type="text" placeholder="Enter text" />

// With label
<Input label="Email" type="email" placeholder="your@email.com" />

// Required field
<Input label="Name" type="text" required />

// With error
<Input 
  label="Password" 
  type="password" 
  error="Password must be at least 8 characters" 
/>

// With helper text
<Input 
  label="Username" 
  type="text" 
  helperText="Choose a unique username" 
/>

// Full width
<Input label="Full Width" type="text" fullWidth />

// All together
<Input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  required
  helperText="We'll never share your email"
  fullWidth
/>
```

## Design System Colors

All colors are available as Tailwind utility classes:

### Primary (Blue)
- `bg-primary-50` through `bg-primary-950`
- `text-primary-50` through `text-primary-950`
- `border-primary-50` through `border-primary-950`

### Secondary (Purple)
- `bg-secondary-50` through `bg-secondary-950`
- `text-secondary-50` through `text-secondary-950`
- `border-secondary-50` through `border-secondary-950`

### Gray (Neutral)
- `bg-gray-50` through `bg-gray-950`
- `text-gray-50` through `text-gray-950`
- `border-gray-50` through `border-gray-950`

### Success (Green)
- `bg-success-50` through `bg-success-950`
- `text-success-50` through `text-success-950`
- `border-success-50` through `border-success-950`

### Warning (Yellow/Orange)
- `bg-warning-50` through `bg-warning-950`
- `text-warning-50` through `text-warning-950`
- `border-warning-50` through `border-warning-950`

### Error (Red)
- `bg-error-50` through `bg-error-950`
- `text-error-50` through `text-error-950`
- `border-error-50` through `border-error-950`

### Usage Examples

```tsx
// Background colors
<div className="bg-primary-500">Primary background</div>
<div className="bg-success-100">Light success background</div>

// Text colors
<p className="text-error-600">Error text</p>
<p className="text-gray-700">Dark gray text</p>

// Border colors
<div className="border-2 border-primary-500">Primary border</div>
```

## Utility Functions

### cn() - Class Name Merger

Merge and conditionally apply Tailwind classes:

```tsx
import { cn } from '@/lib/utils/cn';

// Basic usage
<div className={cn('base-class', 'another-class')} />

// Conditional classes
<div className={cn('base-class', isActive && 'active-class')} />

// With component props
<div className={cn('base-class', className)} />
```

## Best Practices

1. **Always import from centralized index**: `import { Button } from '@/components/ui'`
2. **Use design system colors**: Prefer `bg-primary-500` over custom colors
3. **Leverage variants**: Use component variants instead of custom styling
4. **Type safety**: All components are fully typed with TypeScript
5. **Accessibility**: Components include proper ARIA attributes and keyboard support

