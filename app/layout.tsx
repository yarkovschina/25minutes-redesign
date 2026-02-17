export const metadata = {
  title: '25 минут — Красивая и здоровая спина',
  description: 'Индивидуальная программа для красивой осанки за 25 минут в день',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
