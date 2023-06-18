import React from "react";
import { type ForwardedRef, forwardRef } from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    const { children, className, ...rest } = props;

    return (
      <button
        ref={ref}
        className={clsx(
          "rounded bg-white px-2.5 py-1.5 text-sm text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 transition-shadow hover:bg-gray-50 focus:ring-2 focus:ring-blue-600 dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/20",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
