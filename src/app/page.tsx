export default function HomePage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to The Bootroom 2026</h1>
      <p className="text-lg mb-8">
        Register your company team to participate in the most exciting corporate football event of the year.
      </p>
      <a
        href="/register"
        className="bg-gold text-white px-6 py-3 rounded hover:bg-retroYellow transition"
      >
        Register Now
      </a>
    </div>
  )
}
