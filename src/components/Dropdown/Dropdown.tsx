import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { ChevronDown } from 'lucide-react';
import "./Dropdown.css";

type DropdownVariant = "accent" | "primary" | "secondary" | "default" | "ghost";

export interface DropdownItem {
  label: string;
  value: string;
  onClick?: () => void;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  variant?: DropdownVariant;
}

export function Dropdown({ label, items, variant = "primary" }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const uid = useId();
  const menuId = `dropdown-menu-${uid}`;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handlePointerDown(e: PointerEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  // Keyboard navigation inside menu
  function handleMenuKeyDown(e: KeyboardEvent) {
    const focused = document.activeElement;
    const index = itemRefs.current.indexOf(focused as HTMLButtonElement);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      itemRefs.current[Math.min(index + 1, items.length - 1)]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (index <= 0) {
        triggerRef.current?.focus();
      } else {
        itemRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "Escape" || e.key === "Tab") {
      setOpen(false);
      triggerRef.current?.focus();
    }
  }

  function handleTriggerKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => itemRefs.current[0]?.focus());
    }
  }

  function toggleOpen() {
    setOpen((prev) => {
      if (!prev) {
        requestAnimationFrame(() => itemRefs.current[0]?.focus());
      }
      return !prev;
    });
  }

  return (
    <div className="dropdown-wrapper" ref={wrapperRef}>
      <button
        ref={triggerRef}
        className={`dropdown-trigger dropdown-trigger--${variant}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={toggleOpen}
        onKeyDown={handleTriggerKeyDown}
      >
        {label}
        <ChevronDown 
          color="currentColor"
          size={20}
          />
      </button>

      {open && (
        <ul
          id={menuId}
          role="menu"
          className="dropdown-menu"
          onKeyDown={handleMenuKeyDown}
        >
          {items.map((item, i) => (
            <li key={item.value} role="none">
              <button
                ref={(el) => { itemRefs.current[i] = el; }}
                role="menuitem"
                className="dropdown-item"
                onClick={() => {
                  item.onClick?.();
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
