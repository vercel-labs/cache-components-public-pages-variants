import '@/app/globals.css'

export const metadata = { title: 'My Shop' }

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className="antialiased dark:bg-gray-900">
      <body>
        <main className="mx-auto grid max-w-2xl gap-12 px-5 pt-6 pb-12">
          {children}
        </main>
      </body>
    </html>
  )
}
