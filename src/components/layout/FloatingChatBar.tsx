"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const PLACEHOLDERS = [
  "How much does a website cost for my business?",
  "Can I get a website live in under a week?",
  "What is included in the $9.99/month plan?",
  "Will my website show up on Google?",
  "What if I already have a website?",
  "How do I get more customers from my website?",
  "Does RealWebStudio build sites for my industry?",
  "What does the 14-day money-back guarantee cover?",
  "Can I update my website myself after launch?",
  "How is RealWebStudio different from other agencies?",
];

function deepFind(root: ParentNode, selector: string): Element | null {
  const direct = root.querySelector(selector);
  if (direct) return direct;

  const nodes = root.querySelectorAll("*");
  for (const node of nodes) {
    if (node.shadowRoot) {
      const found = deepFind(node.shadowRoot, selector);
      if (found) return found;
    }
  }

  return null;
}

export default function FloatingChatBar() {
  const [message, setMessage] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [focused, setFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messageRef = useRef("");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageRef.current = message;
  }, [message]);

  useEffect(() => {
    let msgIndex = 0;
    let charIndex = 0;
    let typing = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (focused || messageRef.current) {
        timer = setTimeout(tick, 250);
        return;
      }

      const current = PLACEHOLDERS[msgIndex];

      if (typing) {
        charIndex += 1;
        setPlaceholder(current.slice(0, charIndex));
        timer =
          charIndex < current.length
            ? setTimeout(tick, 42)
            : setTimeout(() => {
                typing = false;
                tick();
              }, 1800);
      } else {
        charIndex -= 1;
        setPlaceholder(current.slice(0, charIndex));

        if (charIndex > 0) {
          timer = setTimeout(tick, 22);
        } else {
          msgIndex = (msgIndex + 1) % PLACEHOLDERS.length;
          typing = true;
          timer = setTimeout(tick, 400);
        }
      }
    };

    tick();

    return () => clearTimeout(timer);
  }, [focused]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

    const panel = panelRef.current;

    const moveWidgetIntoPanel = () => {
      const widget = document.querySelector("chat-widget");
      if (widget && !panel.contains(widget)) {
        panel.appendChild(widget);
      }
    };

    moveWidgetIntoPanel();

    if (!document.querySelector('script[data-rws-chat-widget="true"]')) {
      const script = document.createElement("script");
      script.src = "https://beta.leadconnectorhq.com/loader.js";
      script.dataset.rwsChatWidget = "true";
      script.dataset.resourcesUrl =
        "https://beta.leadconnectorhq.com/chat-widget/loader.js";
      script.dataset.widgetId = "69d7e120d0d6ea44d290161b";
      script.async = true;
      script.onload = () => window.setTimeout(moveWidgetIntoPanel, 300);
      panel.appendChild(script);
    }

    const poll = window.setInterval(moveWidgetIntoPanel, 250);
    const stopPoll = window.setTimeout(() => window.clearInterval(poll), 8000);

    return () => {
      window.clearInterval(poll);
      window.clearTimeout(stopPoll);
    };
  }, [isOpen]);

  function injectMessage(value: string) {
    let attempts = 0;

    const poll = window.setInterval(() => {
      const widget = document.querySelector("chat-widget");
      const root = widget?.shadowRoot ?? widget;
      const textarea = root ? deepFind(root, "textarea") : null;

      attempts += 1;

      if (!textarea && attempts <= 25) return;

      window.clearInterval(poll);

      if (!(textarea instanceof HTMLTextAreaElement) || !widget) return;

      const setter = Object.getOwnPropertyDescriptor(
        window.HTMLTextAreaElement.prototype,
        "value"
      )?.set;

      setter?.call(textarea, value.trim());
      textarea.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
      textarea.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      textarea.focus();

      window.setTimeout(() => {
        const sendButton =
          deepFind(widget.shadowRoot ?? widget, ".live-chat-send-button") ??
          deepFind(widget.shadowRoot ?? widget, 'button[type="submit"]');

        if (sendButton instanceof HTMLButtonElement) {
          sendButton.removeAttribute("disabled");
          sendButton.click();
        }
      }, 300);
    }, 200);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsOpen(true);

    if (message.trim()) {
      window.setTimeout(() => injectMessage(message), 450);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
        aria-label="Chat with Sierra - RealWebStudio AI"
        className="fixed bottom-5 left-1/2 z-[60] flex w-[calc(100%-1.5rem)] max-w-[640px] -translate-x-1/2 items-center gap-3 rounded-full border border-orange/30 bg-dark/92 py-3 pl-5 pr-3 shadow-large backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-orange/65 hover:bg-dark sm:bottom-6 sm:w-[calc(100%-3rem)] sm:gap-3.5 sm:py-3.5 sm:pl-6"
      >
        <span className="flex shrink-0 text-orange" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </span>

        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Type your question for Sierra</span>
          {!focused && !message && (
            <span className="pointer-events-none absolute left-0 top-1/2 max-w-full -translate-y-1/2 overflow-hidden text-ellipsis whitespace-nowrap text-[13px] text-white/45 sm:text-[15px]">
              {placeholder}
            </span>
          )}
          <input
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent text-[13px] font-medium text-white outline-none caret-orange placeholder:text-transparent sm:text-[15px]"
            spellCheck={false}
          />
        </label>

        <button
          type="submit"
          className="shrink-0 rounded-full bg-orange px-4 py-2.5 text-[12px] font-extrabold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark sm:px-5 sm:text-[13px]"
        >
          Ask Sierra
          <span className="hidden sm:inline"> -&gt;</span>
        </button>
      </form>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Chat with Sierra - RealWebStudio"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-dark/78 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div className="relative w-full max-w-[480px]">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="absolute -top-11 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-orange/25 text-[22px] leading-none text-white transition-colors duration-200 hover:bg-orange/50"
            >
              &times;
            </button>
            <div
              ref={panelRef}
              className="min-h-[620px] overflow-visible rounded-[16px] shadow-large"
            >
            </div>
          </div>
        </div>
      )}
    </>
  );
}
