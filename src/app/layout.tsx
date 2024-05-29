export const metadata = {
    title: 'Meu Portfolio'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt">
        <body>{children}</body>
        </html>
    )
}
