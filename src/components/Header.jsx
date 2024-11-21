import { useState } from 'react'
import Dropdown from './Dropdown'

const Header = () => {
  const [isdropdown, setIsDropdown] = useState(null)
  let home = ['Subpage_1', 'Subpage_2', 'Subpage_3']
  let ourWork = ["Projects", "Case Studies", "Partners"]
  let makeADifference = ["Donate", "Sponsor", "Advocate"]
  let volunteer = ["Opportunities", "Training", "FAQ"]
  let fundraise = ["Campaigns", "Events", "Resources"]
  let aboutUs = ["Team", "Mission", "Contact"]
  let blog = ["Latest Posts", "Categories", "Archives"]

  return (
    <div>
      <header className="flex justify-between items-center p-7 sticky top-0 bg-white z-10">
        <img className="h-24" src="logo.png" alt="Error" />
        <nav>
          <ul className="flex gap-7 font-bold relative">
            <li onMouseEnter={() => setIsDropdown('home')}
                onMouseLeave={() => setIsDropdown(null)}>
              <a href="/"
              >
                Home
              </a>
              {isdropdown === 'home' && <Dropdown dropdownPros={home} />}
            </li>
            <li>
              <a
                onMouseEnter={() => setIsDropdown('ourWork')}
                onMouseLeave={() => setIsDropdown(null)}
                href="/">
                Our Work
              </a>
              {isdropdown === 'ourWork' && <Dropdown dropdownPros = {ourWork} />}
            </li>
            <li>
              <a 
                onMouseEnter={() => setIsDropdown('makeADifference')}
                onMouseLeave={() => setIsDropdown(null)}
                href="/">
                Make A Difference
              </a>
              {isdropdown === 'makeADifference' && <Dropdown dropdownPros = {makeADifference} />}
            </li>
            <li>
              <a
                href="/"
                onMouseEnter={() => setIsDropdown('volunteer')}
                onMouseLeave={() => setIsDropdown(null)}
              >
                Volunteer
              </a>
              {isdropdown === 'volunteer' && (
                <Dropdown dropdownPros={volunteer} />
              )}
            </li>
            <li>
              <a 
                onMouseEnter={() => setIsDropdown('fundraise')}
                onMouseLeave={() => setIsDropdown(null)}
                href="/"
              >
                Fundraise
                </a>
                {isdropdown === 'fundraise' && <Dropdown dropdownPros = {fundraise} />}
            </li>
            <li>
              <a 
                onMouseEnter={() => setIsDropdown('aboutUs')}
                onMouseLeave={() => setIsDropdown(null)}
                href="/"
              >
                About Us
                </a>
                {isdropdown === 'aboutUs' && <Dropdown dropdownPros = {aboutUs} />}
            </li>
            <li>
              <a 
                onMouseEnter={() => setIsDropdown('blog')}
                onMouseLeave={() => setIsDropdown(null)}
              href="/"
              >
                Blog
              </a>
              {isdropdown === 'blog' && <Dropdown dropdownPros ={blog} />}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
