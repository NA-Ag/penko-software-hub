import {
  BarChart3, BookOpen, Box, Building2, Calculator, Database, FileText, FileType, FolderLock,
  Gamepad2, GraduationCap, Image, Keyboard, LucideIcon, Music, PenTool, Presentation,
  Scissors, Shield, Sparkles, StickyNote, Table, Users,
} from 'lucide-react';

// Named imports keep the bundle to the icons we actually use (vs. `import * as Icons`)
const PRODUCT_ICONS: Record<string, LucideIcon> = {
  BarChart3, BookOpen, Building2, Calculator, Database, FileText, FileType, FolderLock,
  Gamepad2, GraduationCap, Image, Keyboard, Music, PenTool, Presentation,
  Scissors, Shield, Sparkles, StickyNote, Table, Users,
};

export const getProductIcon = (name: string): LucideIcon => PRODUCT_ICONS[name] ?? Box;
