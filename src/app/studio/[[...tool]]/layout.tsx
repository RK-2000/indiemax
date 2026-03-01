export const metadata = {
  title: 'IndieMax Studio',
  description: 'Content management for IndieMax',
}

export default function StudioLayout({
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
