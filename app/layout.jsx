import "@styles/globals.css"

export const metadata = {
    title: "Welture",
    description: "Discover and Share the Best",
    }

const layout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default layout