export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 81; // подставь реальную высоту твоего fixed-хедера в px
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top, behavior: "smooth" });
}