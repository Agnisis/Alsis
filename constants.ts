import {
  Code,
  
  ArrowRightLeft,
  MessageSquare,
  MessageCircle,
  BookOpenCheck,
  LayoutList,
} from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: "Conversation with Alsis",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Sentiment Analyser",
    icon: MessageCircle,
    href: "/sentiment",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Grammar Error Corrector",
    icon: BookOpenCheck,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/grammar_correction",
  },
  {
    label: "Parts Of Speech Classifier",
    icon: LayoutList,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/pos",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
  {
    label: "Translator",
    icon: ArrowRightLeft,
    color: "text-blue-700",
    bgColor: "bg-blue-700/10",
    href: "/translation",
  },
];
