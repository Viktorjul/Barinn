export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-9xl text-foreground font-custom" style={{ fontWeight: 400 }}>Barinn</h1>
      <p className="text-subtext font-orange-squash text-4xl">BASIL GIMLET</p>
      <p className="text-text font-paragraph text-lg max-w-2xl text-center px-4">
        Your paragraph text here. This is where you can add descriptive content about your brand, product, or service.
      </p>
    </main>
  );
}

