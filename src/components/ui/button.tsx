
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors duration-150 ease-in-out transform transition-transform duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_5px_10px_-3px_hsl(var(--primary)/0.4)] active:bg-primary active:text-primary-foreground active:shadow-[0_5px_10px_-3px_hsl(var(--primary)/0.4)] active:scale-95",
        filled: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_5px_10px_-3px_hsl(var(--primary)/0.4)] active:bg-primary active:text-primary-foreground active:shadow-[0_5px_10px_-3px_hsl(var(--primary)/0.4)] active:scale-95",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-[0_5px_10px_-3px_hsl(var(--destructive)/0.4)] active:bg-destructive active:shadow-[0_5px_10px_-3px_hsl(var(--destructive)/0.4)] active:scale-95",
        outline: 
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground active:scale-95",
        secondary:
          "bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_5px_10px_-3px_hsl(var(--secondary)/0.4)] active:bg-secondary active:text-secondary-foreground active:shadow-[0_5px_10px_-3px_hsl(var(--secondary)/0.4)] active:scale-95 dark:border-muted-foreground dark:text-muted-foreground dark:hover:bg-muted-foreground dark:hover:text-background dark:active:bg-muted-foreground dark:active:text-background dark:hover:shadow-[0_5px_10px_-3px_hsl(var(--muted-foreground)/0.4)] dark:active:shadow-[0_5px_10px_-3px_hsl(var(--muted-foreground)/0.4)]",
        ghost: "hover:bg-accent hover:text-accent-foreground active:scale-95",
        link: "text-primary underline-offset-4 hover:underline active:scale-95",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3", 
        lg: "h-11 rounded-lg px-8", 
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
