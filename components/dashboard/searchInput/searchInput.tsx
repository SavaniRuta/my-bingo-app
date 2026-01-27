import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

type SearchInputProps = {
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  icon?: React.ElementType;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function SearchInput({
  placeholder = "Search",
  className,
  inputClassName,
  icon: Icon = Search,
  ...props
}: SearchInputProps) {
  return (
    <>
      <InputGroup className={className}>
        {Icon && (
          <InputGroupAddon>
            <Icon className="text-muted-foreground" />
          </InputGroupAddon>
        )}

        <InputGroupInput
          type="text"
          placeholder={placeholder}
          className={cn(
            "border-0 focus-visible:ring-0 shadow-none",
            inputClassName,
          )}
          {...props}
        />
      </InputGroup>
    </>
  );
}
