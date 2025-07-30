import '../app/_styles/globals.css'

export const metadata = {
  title: 'VirtusLab',
  description: 'VirtusLab , grind your skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
