export const Avatar = ({size = "small"}: {size: "small" | "big"}) => {
  return (
    <div className={`${size === "big" ? "w-[44px] h-[44px]" : "w-[34px] h-[34px]"} bg-[#D3C1FAFF] opacity-100 overflow-hidden rounded-full avatar`}>
      <img className="w-full h-full" src="src/assets/A1.jpg" alt="Avatar"/>
    </div>
  )
}