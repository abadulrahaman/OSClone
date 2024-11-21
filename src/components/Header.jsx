import { useState, useEffect } from 'react'

const Header = () => {
  // State to track the currently active menu item
  const [activeItem, setActiveItem] = useState(null)
  const [delayedItem, setDelayedItem] = useState(null)

  useEffect(() => {
    let timeout
    if (activeItem) {
      // Delay showing the dropdown
      timeout = setTimeout(() => setDelayedItem(activeItem), 150) // 150ms delay
    } else {
      // Delay hiding the dropdown
      timeout = setTimeout(() => setDelayedItem(null), 150) // 150ms delay
    }
    return () => clearTimeout(timeout) // Cleanup timeout on component unmount or state change
  }, [activeItem])

  const menuItems = [
    { name: 'Home', subItems: ['Subpage 1', 'Subpage 2', 'Subpage 3'] },
    { name: 'Our Work', subItems: ['Projects', 'Case Studies', 'Partners'] },
    { name: 'Make A Difference', subItems: ['Donate', 'Sponsor', 'Advocate'] },
    { name: 'Volunteer', subItems: ['Opportunities', 'Training', 'FAQ'] },
    { name: 'Fundraise', subItems: ['Campaigns', 'Events', 'Resources'] },
    { name: 'About Us', subItems: ['Team', 'Mission', 'Contact'] },
    { name: 'Blog', subItems: ['Latest Posts', 'Categories', 'Archives'] },
  ]

  return (
    <div>
      <header className="flex justify-between items-center p-7 sticky top-0 bg-white z-10">
        <img className="h-24" src="logo.png" alt="Error" />
        <nav>
          <ul className="flex gap-7 font-bold">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <a href="/">{item.name}</a>
                {/* Dropdown menu */}
                {delayedItem === item.name && (
                  <ul className="absolute left-0 top-full bg-white shadow-md p-3 w-48">
                    {item.subItems.map((subItem) => (
                      <li key={subItem} className="p-2 hover:bg-gray-100">
                        <a href={`/${subItem.toLowerCase()}`}>{subItem}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
