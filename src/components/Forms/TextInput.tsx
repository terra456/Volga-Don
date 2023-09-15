type InputProps = {
  type: string;
  placeholder: string;
  className: string;
  required?: boolean;
  errMessage?: string;
  alt?: string;
};

const TextInput = ({ type, placeholder, errMessage, alt }: InputProps) => (
  <>
    <input
      type={type}
      alt={alt ? alt : placeholder}
      aria-invalid={errMessage ? 'true' : 'false'}
      className="base-input base-input_type_name"
    />
    {errMessage && <span className="ml-8 mt-0 text-xs text-red-500">{errMessage}</span>}
  </>
);
export default TextInput;
