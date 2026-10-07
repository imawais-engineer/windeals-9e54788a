import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/components/win-deals/app-shell";
export const Route = createFileRoute("/app")({ component: () => <AppShell><Outlet /></AppShell> });
