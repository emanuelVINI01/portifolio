/**
 * Per-project visual identity, keyed by project id.
 * Kept separate from `projects.ts` because it is purely presentational
 * (background motif, watermark icon, terminal-style tag) and does not
 * need to be duplicated across the pt/en/de content arrays.
 */
import type { CSSProperties } from 'react';

export type CardPattern =
  | 'circuit'
  | 'ledger'
  | 'terminal'
  | 'network'
  | 'waves'
  | 'blocks'
  | 'orbit'
  | 'hex'
  | 'scan'
  | 'signal'
  | 'chip';

export interface ProjectVisual {
  pattern: CardPattern;
  icon: string;
  tag: string;
}

export const PROJECT_VISUALS: Record<string, ProjectVisual> = {
  'my-bet': { pattern: 'ledger', icon: 'landmark', tag: '/ledger/atomic-tx' },
  'simple-bank': { pattern: 'ledger', icon: 'landmark', tag: '/ledger/atomic-tx' },
  'cvm-runtime': { pattern: 'circuit', icon: 'cpu', tag: 'cvm :: framebuffer' },
  'cvm-compiler': { pattern: 'circuit', icon: 'binary', tag: 'cvm -> asm -> vm' },
  apiflash: { pattern: 'terminal', icon: 'zap', tag: 'POST /workbench' },
  browia: { pattern: 'network', icon: 'puzzle', tag: 'mcp://active-tab' },
  lowvia: { pattern: 'waves', icon: 'brain-circuit', tag: '~/deep-research' },
  snippetvault: { pattern: 'scan', icon: 'library', tag: '/vault/public' },
  typedash: { pattern: 'scan', icon: 'gauge', tag: 'wpm :: realtime' },
  'ryzen-shop-bot': { pattern: 'signal', icon: 'bot', tag: '#ticket-queue' },
  'ryzen-hosting': { pattern: 'hex', icon: 'server', tag: 'hosting :: legacy' },
  'dv-duels': { pattern: 'blocks', icon: 'swords', tag: 'arena :: 1v1' },
  'portifolio-frontend': { pattern: 'orbit', icon: 'layout-template', tag: 'v1 :: archive' },
  'z-discord-core': { pattern: 'network', icon: 'link-2', tag: 'core :: bridge' },
  'comuni-mine-bot': { pattern: 'blocks', icon: 'shield', tag: 'mod :: auto' },
  'minecraft-feast-bot': { pattern: 'blocks', icon: 'party-popper', tag: 'event :: loop' },
  'advanced-sql': { pattern: 'ledger', icon: 'database', tag: 'jdbc :: wrap' },
  'z-manutencao': { pattern: 'chip', icon: 'wrench', tag: 'init :: 2021' },
  'z-silk2': { pattern: 'chip', icon: 'sliders-horizontal', tag: 'rules :: custom' },
  'multi-server-api': { pattern: 'network', icon: 'share-2', tag: 'sync :: cluster' },
};

const DEFAULT_VISUAL: ProjectVisual = { pattern: 'chip', icon: 'sparkles', tag: 'proc :: default' };

export function getProjectVisual(id: string): ProjectVisual {
  return PROJECT_VISUALS[id] ?? DEFAULT_VISUAL;
}

/** A CSS-only background motif per pattern, tinted with the project's own accent color. */
export function getCardPatternStyle(pattern: CardPattern, color: string): CSSProperties {
  switch (pattern) {
    case 'circuit':
      return {
        backgroundImage: `linear-gradient(${color}26 1px, transparent 1px), linear-gradient(90deg, ${color}26 1px, transparent 1px), radial-gradient(circle at 22% 32%, ${color}55 1.5px, transparent 1.6px), radial-gradient(circle at 74% 68%, ${color}55 1.5px, transparent 1.6px)`,
        backgroundSize: '18px 18px, 18px 18px, 18px 18px, 18px 18px',
      };
    case 'ledger':
      return {
        backgroundImage: `linear-gradient(${color}1f 1px, transparent 1px), linear-gradient(90deg, ${color}33 1px, transparent 1px)`,
        backgroundSize: '100% 22px, 34px 100%',
        backgroundPosition: '0 0, 34px 0',
      };
    case 'terminal':
      return {
        backgroundImage: `repeating-linear-gradient(${color}22 0px, ${color}22 1px, transparent 1px, transparent 4px)`,
      };
    case 'network':
      return {
        backgroundImage: `radial-gradient(circle, ${color}55 1.5px, transparent 1.6px), linear-gradient(135deg, ${color}14 1px, transparent 1px)`,
        backgroundSize: '26px 26px, 26px 26px',
      };
    case 'waves':
      return {
        backgroundImage: `repeating-linear-gradient(135deg, ${color}18 0px, ${color}18 10px, transparent 10px, transparent 26px)`,
      };
    case 'blocks':
      return {
        backgroundImage: `linear-gradient(45deg, ${color}18 25%, transparent 25%), linear-gradient(-45deg, ${color}18 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${color}18 75%), linear-gradient(-45deg, transparent 75%, ${color}18 75%)`,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
      };
    case 'orbit':
      return {
        backgroundImage: `repeating-radial-gradient(circle at 80% 20%, ${color}22 0px, ${color}22 1px, transparent 1px, transparent 14px)`,
      };
    case 'hex':
      return {
        backgroundImage: `repeating-linear-gradient(60deg, ${color}16 0px, ${color}16 1px, transparent 1px, transparent 16px), repeating-linear-gradient(-60deg, ${color}16 0px, ${color}16 1px, transparent 1px, transparent 16px)`,
      };
    case 'scan':
      return {
        backgroundImage: `linear-gradient(115deg, transparent 40%, ${color}22 50%, transparent 60%), linear-gradient(${color}12 1px, transparent 1px)`,
        backgroundSize: '200% 200%, 24px 24px',
      };
    case 'signal':
      return {
        backgroundImage: `repeating-radial-gradient(circle at 100% 0%, ${color}20 0px, ${color}20 1px, transparent 1px, transparent 12px)`,
      };
    case 'chip':
    default:
      return {
        backgroundImage: `radial-gradient(${color}40 1px, transparent 1.2px)`,
        backgroundSize: '10px 10px',
      };
  }
}
