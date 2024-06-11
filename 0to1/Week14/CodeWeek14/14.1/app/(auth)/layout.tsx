export default function({children}: {
  children: React.ReactNode
}) {
  return <div>
    <div className="border-b text-center">
      20% off on all products
    </div>
    {children}
  </div>
}