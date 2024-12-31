interface FormInputProps {
    label: string;
    name: string;
    type?: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
  }
  
  export function FormInput({ 
    label, 
    name, 
    type = "text", 
    value, 
    onChange, 
    placeholder,
    required 
  }: FormInputProps) {
    return (
      <div className="group">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-blue-500 transition-colors"
        >
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-gray-300 rounded-[4px] shadow-sm 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                   transition-all duration-200 ease-in-out outline-none"
        />
      </div>
    );
  }