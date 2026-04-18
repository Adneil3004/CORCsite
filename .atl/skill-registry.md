# 🗂️ Skill Registry

Esta es la base de conocimientos activa de habilidades para el proyecto **CORC Website**. Auto-generado por `sdd-init`.

## Compact Rules
Estos son los estándares compactos inyectados en el contexto de los agentes durante la ejecución de las fases SDD.

### Project Standards (auto-resolved)
- **Idioma**: Español obligatorio para toda la UI (labels, mensajes, botones).
- **Roles**: Adherencia estricta a roles (Managin no codifica, QA requiere tests en verde).
- **Seguridad**: RLS en base de datos. Peticiones externas sensibles deben ser solicitadas al usuario.
- **Orquestación**: Analizar -> Delegar (Prompt) -> Supervisar.
- **Estética**: Estilo "Concierge" premium, paleta institucional obligatoria.

## Design Tokens (Paleta Oficial)
- **Primario**: `#D90416` (Rojo)
- **Secundario**: `#91CDF2` (Azul)
- **Terciario**: `#F2E41B` (Amarillo)
- **Neutral**: `#F2EAC2` (Crema)

## User Skills Trigger Table

| Command / Context | Skill to load |
| :--- | :--- |
| **Diseño UI / Estética** | [ui-skills](file:///Users/jdanielhn/.gemini/antigravity/skills/ui-skills/SKILL.md) |
| **Next.js / React** | [nextjs-best-practices](file:///Users/jdanielhn/.gemini/antigravity/skills/nextjs-best-practices/SKILL.md) |
| **Pruebas / QA** | [tdd-workflow](file:///Users/jdanielhn/.gemini/antigravity/skills/tdd-workflow/SKILL.md) |
| **Postgres / Supabase** | [neon-postgres](file:///Users/jdanielhn/.gemini/antigravity/skills/neon-postgres/SKILL.md) |
| **Documentación** | [documentador](file:///Users/jdanielhn/.gemini/antigravity/global_workflows/documentador.md) |

---
*Para actualizar este registro, ejecute `/sdd-init`.*
