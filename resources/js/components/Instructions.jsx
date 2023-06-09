export default function Instructions({ children }) {
  return (
    <div className="alert bg-sky-200 shadow mt-3">
      <svg fill="none" viewBox="0 0 24 24" className="stroke-black flex-shrink-0 w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <p className="font-semibold">
        {children}
      </p>
    </div>
  )
}
