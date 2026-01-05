export default function TermsModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded max-w-2xl overflow-y-auto max-h-[80vh]">
        <h2 className="text-xl font-bold mb-2 text-retroRed">Terms &amp; Conditions</h2>
        <p className="text-sm leading-relaxed mb-2">
          Participation in The Bootroom 2026 is subject to the event rules outlined in the official contract. Entry fee AED 3,500 + VAT per team.
        </p>
        <ul className="list-disc ml-5 space-y-1 text-sm">
          <li>10 players per team (all employees of the company).</li>
          <li>Matches are 7-a-side, 20 minutes each.</li>
          <li>No refunds within 14 days of event.</li>
          <li>Organizer (S7 Group) not liable for injury or loss.</li>
          <li>Photos / videos may be used for promotion.</li>
        </ul>
        <button onClick={onClose} className="mt-4 bg-retroRed text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  )
}
