import { sizes, variants } from "@/lib/variants";

interface ButtonProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  // Add other potential props here
}


export default function ButtonMy(props: ButtonProps) {
  return (
    <button
      {...props}
      className={`${props.variant ? variants[props.variant] : variants['default']} ${props.size ? sizes[props.size] : sizes['base']} ${props.className}`}
    />
  );
}