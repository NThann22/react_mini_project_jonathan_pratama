export default function Button({variant, onClick, children}) {
  const variants = {
    primary: 'bg-gradient-to-br from-[#FFB800] to-[#FF8A00] hover:bg-opacity-[0.7] mt-auto text-white font-open_sans font-bold text-base py-[21px] px-[112px] rounded-lg shadow-md shadow-[#FFAE00]',
    secondary: 'bg-gradient-to-br from-[#F17228] to-[#F15E28] hover:bg-opacity-[0.7] text-white font-open_sans font-black text-base py-[21px] px-[25px] rounded-lg shadow-md shadow-[#FFAE00]',
    white: 'bg-[#FFFFFF] hover:bg-opacity-[0.7] bg-gradient-to-br from-[#FFB800] to-[#FF8A00] bg-clip-text text-transparent font-open_sans font-black text-4xl py-[30px] px-[76px] rounded-lg shadow-md shadow-[#FFAE00]',
    primarymini: 'bg-gradient-to-br from-[#FFB800] to-[#FF8A00] hover:bg-opacity-[0.7] mt-auto font-open_sans text-white font-black text-lg py-[21px] px-[27px] rounded-lg shadow-md shadow-[#FFAE00]'
  }

  const buttonClass = variants.hasOwnProperty(variant) ? variants[variant] : variants.primary;

  return (
    <button className={buttonClass} onClick={onClick}>{children}</button>
  )
}
