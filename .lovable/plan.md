# Exportar o código do projeto em um arquivo único

Objetivo: gerar um arquivo `.md` para download com todo o código-fonte da landing page, pronto para colar em outra IA e revisar.

## O que será entregue

Um único arquivo `aurora-med-dietoterapia-codigo.md` contendo, nesta ordem, cada arquivo em bloco de código identificado:

1. `src/styles.css` — design system (verde floresta, sage, creme, dourado, terracota), utilitários `shell`, `section-y`, `reveal`
2. `src/routes/__root.tsx` — layout raiz, fontes Cormorant Garamond + Inter, favicon
3. `src/routes/index.tsx` — página com SEO/JSON-LD e a ordem das seções
4. Os 17 componentes de `src/components/aurora/`: `brand`, `TopUrgencyBar`, `HeroSection`, `AudienceSection`, `LearningSection`, `ModulesSection`, `ProfessionalTestimonials`, `PatientTestimonials`, `BonusSection`, `PricingSection`, `DeliverablesSection`, `GuaranteeSection`, `FAQSection`, `AboutAuroraMed`, `FinalCTA`, `Footer`, `MobileStickyCTA`

Um cabeçalho curto no topo informa a stack (TanStack Start v1, React 19, Vite 7, Tailwind CSS v4), para que a outra IA entenda o contexto.

Sem prompts de imagem, conforme escolhido — apenas código. As imagens em `src/assets` permanecem referenciadas por import nos componentes.

## Notas técnicas

- Nenhuma alteração no código do app: a exportação é somente leitura, agregando os arquivos existentes.
- O arquivo é gravado em `/mnt/documents` e aparece no chat como artefato para download/visualização.
- Total aproximado: 20 arquivos, ~1.300 linhas.
