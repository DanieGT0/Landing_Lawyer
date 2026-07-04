# Napkin — Proyecto Web Lawyer (Landing_Lawyer)

## Workflow (SIEMPRE)
- **Al terminar cada tarea: `git add -A` + commit + `git push` automático, sin preguntar.**
- Repo: https://github.com/DanieGT0/Landing_Lawyer.git (rama `main`)
- NO usar tokens de API para deploy — Daniel conecta Vercel vía dashboard.

## Stack
- Astro 7 + Tailwind 4 (@tailwindcss/vite) + GSAP (ScrollTrigger)
- Deploy: Vercel (auto-detecta Astro). Static output.
- Dev: `npm run dev` → localhost:4321. Build check: `npx astro build`.

## Diseño (tema claro estilo Kanun — ex-coders.com/html/kanun)
- Paleta: crema `#F9F7F3`, blanco `#fff`, títulos `#181818`, texto `#565656`,
  acento bronce `#B68C5A`, líneas `#e6e0d6`. Footer oscuro `#181818`.
- Fuentes: Prata (serif display) + DM Sans (body). Tokens en `src/styles/global.css` @theme.
- Video hero: `/public/hero.mp4` (Pexels, licencia libre). Self-hosted, NO hotlink.

## Contenido
- Despacho jurídico El Salvador. Datos/áreas centralizados en `src/data/site.ts`.
- 6 áreas reales: corporativo/mercantil (CNR), notarial (CSJ), laboral (MTPS),
  propiedad intelectual/marcas, familia/civil, compliance LPLDA.
- Contacto: formulario WhatsApp + mailto, sin backend.
- TODO pendiente de Daniel: reemplazar en site.ts → whatsapp, email, direccion, nombre firma.

## Estructura
- `src/components/` — Header, Hero, Marquee, Areas, Proceso, Despacho,
  Notariado, Faq, Contacto, Footer, WhatsappButton, Icon, Motion (animaciones).
- Motion.astro = reveal + kinetic words + counters (GSAP). Agnóstico al tema.
