type ExperiencePaginationProps = {
  active: "left" | "right",
  onChange: (value: "left" | "right") => void
}

export default function ExperiencePagination({active, onChange}: ExperiencePaginationProps) {
  return (
    <div className="dots-container">
      <button onClick={() => onChange("left")} className={active ==="left" ? "dot active" : "dot"}/>
      <button onClick={() => onChange("right")} className={active ==="right" ? "dot active" : "dot"}/>
    </div>
  )
}