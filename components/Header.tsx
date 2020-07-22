import Link from "next/link";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
      <header className=''>
       {children}
      </header>
  )
}

export default Header;
