import type { Metadata } from "next"
import GameStudioClientPage from "@/app/game-studio/game-studio-client-page"

export const metadata: Metadata = {
  title: "Game Studio",
  description: "Explore Bivy Tech's game development projects and upcoming gaming events.",
}

export default function GameStudioPage() {
  return <GameStudioClientPage />
}
