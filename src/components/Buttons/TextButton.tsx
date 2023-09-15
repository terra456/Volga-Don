type Props = {
  text: string;
  className?: string;
};

const TextButton = ({ text, className }: Props) => {
  return <button className={`btn ${className}`}>{text}</button>;
};

export default TextButton;
