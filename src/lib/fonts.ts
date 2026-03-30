import { GeistMono } from "geist/font/mono"
import { GeistPixelSquare, GeistPixelCircle, GeistPixelGrid, GeistPixelLine, GeistPixelTriangle } from "geist/font/pixel"
// import { GeistSans } from "geist/font/sans"
import { Bricolage_Grotesque, Geist } from "next/font/google"
// Bricolage Grotesque
import { cn } from "@/lib/utils"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})
// const fontSans = Bricolage_Grotesque({
//   subsets: ["latin"],
//   variable: "--font-bricolage-grotesque",
// })
const fontMono = GeistMono

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  GeistPixelSquare.variable,
  GeistPixelCircle.variable,
  GeistPixelGrid.variable,
  GeistPixelLine.variable,
  GeistPixelTriangle.variable,
  "[--font-sans:var(--font-geist)]",
  "[--font-mono:var(--font-geist-mono)]"
)