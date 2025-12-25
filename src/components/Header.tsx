export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="flex items-center justify-between px-8 py-6 md:px-12 md:py-8">
        <a href="/" className="group">
          <h1 className="text-3xl md:text-4xl text-foreground font-custom transition-transform duration-300 group-hover:scale-105" style={{ fontWeight: 400 }}>
            Barinn
          </h1>
        </a>
      </div>
    </header>
  );
}
