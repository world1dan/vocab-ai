export default function Footer() {
    return (
        <footer className="flex items-center justify-center gap-4 bg-card px-4 py-8 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()}</span>
        </footer>
    )
}
