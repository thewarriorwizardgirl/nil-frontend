export function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10 4 4 8-8" />
    </svg>
  );
}

export function NavigationIcon({ label }: { label: string }) {
  switch (label) {
    case "Home":
      return <path d="m2.5 9 7.5-6 7.5 6M4.5 8v9h11V8M8 17v-5h4v5" />;
    case "About Us":
      return <><circle cx="10" cy="6" r="3" /><path d="M4 17c.4-3 2.4-4.5 6-4.5s5.6 1.5 6 4.5" /></>;
    case "Services":
      return <><path d="M3 6h14M3 10h14M3 14h9" /><circle cx="15.5" cy="14" r="2.5" /></>;
    case "Associations":
      return <><circle cx="7" cy="7" r="2.5" /><circle cx="14" cy="8" r="2" /><path d="M2.5 16c.3-2.4 1.8-3.7 4.5-3.7 2.6 0 4.1 1.3 4.4 3.7M12 12c2.8-.6 4.6.7 5.2 3.3" /></>;
    case "Vision":
      return <><path d="M2.5 10s2.7-5 7.5-5 7.5 5 7.5 5-2.7 5-7.5 5-7.5-5-7.5-5Z" /><circle cx="10" cy="10" r="2" /></>;
    case "Strengths":
      return <><path d="M3 17V9h3v8M8.5 17V5h3v12M14 17v-6h3v6" /><path d="M2 17h16" /></>;
    case "Founder":
      return <><circle cx="10" cy="6.5" r="3" /><path d="M4 17c.5-3.2 2.5-4.8 6-4.8s5.5 1.6 6 4.8" /><path d="M14.5 3.5 16 2l2 2-1.5 1.5" /></>;
    default:
      return <><path d="M4 3h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="m4 5 6 5 6-5" /></>;
  }
}
