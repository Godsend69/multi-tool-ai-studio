import './globals.css'

export const metadata = {
  title: 'Multi-Tool AI Studio',
  description: 'A mystical 3D realm powered by AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
