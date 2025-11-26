import { cn, theme } from '@/lib/theme';

interface FormFieldProps {
  /** Label text */
  label: string;
  /** Field type (text, email, or textarea) */
  type?: 'text' | 'email' | 'textarea';
  /** Field ID (used for htmlFor and id) */
  id: string;
  /** Current value */
  value: string;
  /** Change handler */
  onChange: (value: string) => void;
  /** Placeholder text (optional) */
  placeholder?: string;
  /** Number of rows for textarea (default: 5) */
  rows?: number;
  /** Whether field is required */
  required?: boolean;
  /** Additional className for the container */
  className?: string;
}

/**
 * FormField Component
 *
 * Provides consistent styling for form inputs and textareas.
 * Consolidates the pattern used in Contact.tsx.
 *
 * @example
 * <FormField
 *   label="Name"
 *   type="text"
 *   id="name"
 *   value={formData.name}
 *   onChange={(name) => setFormData({ ...formData, name })}
 *   required
 * />
 *
 * @example
 * <FormField
 *   label="Message"
 *   type="textarea"
 *   id="message"
 *   value={formData.message}
 *   onChange={(message) => setFormData({ ...formData, message })}
 *   rows={5}
 *   required
 * />
 */
export function FormField({
  label,
  type = 'text',
  id,
  value,
  onChange,
  placeholder,
  rows = 5,
  required = false,
  className = ''
}: FormFieldProps) {
  const Component = type === 'textarea' ? 'textarea' : 'input';

  const inputProps = {
    id,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    placeholder,
    required,
    className: cn(
      'w-full px-4 py-2 border rounded-lg',
      'focus:ring-2 focus:ring-green-600 focus:border-transparent',
      'transition-all',
      theme.text.heading,
      theme.bg.control,
      theme.border.control
    )
  };

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={cn('block text-sm font-medium mb-2', theme.text.body)}
      >
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea {...inputProps} rows={rows} />
      ) : (
        <input {...inputProps} type={type} />
      )}
    </div>
  );
}
