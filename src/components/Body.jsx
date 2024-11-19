import React from 'react'
import Video from './Video'
import { PiHeartStraightLight } from 'react-icons/pi'
import Video_2 from './Video_2'
import { FaChevronRight } from 'react-icons/fa'
import Header from './Header'

const Body = () => {
  return (
    <div>
      <Header/>

      <main>
        <div className="flex text-white">
          <div className="bg-blue-400 w-full pl-48 pt-28 pr-48">
            <h1 className="text-[40px] leading-10 font-bold">
              Doesn’t every child deserve a safe home, love and education?
            </h1>
            <p className="text-[20px] mt-4 leading-7">
              Free Nepalese children in need from abuse and give them a route
              out of poverty
            </p>
            <button className="rounded-[25px] py-[6px] px-4 flex gap-2 items-center bg-white text-[20px] text-blue-400 mt-12 hover:">
              DONATE NOW <FaChevronRight className='text-center hidden' />
            </button>
          </div>
          <img src="child.jpg" alt="Error" />
        </div>

        <div className="flex flex-col justify-center items-center p-7 ml-[396px] mr-[396px] text-center">
          <h1 className="text-blue-400 text-2xl">Child Labour in Nepal</h1>
          <p className="text-[22px] tracking-tight leading-7 mt-8">
            Our End to Child Labour project works to free children from illegal
            work and give them access to education and a brighter future. In
            order to do this, we must address the widereaching factors that lead
            them into this exploitative and dangerous work in the first place.
          </p>
          <Video />
        </div>

        <div className="bg-blue-400 p-8 flex flex-col justify-center items-center">
          <h1 className="text-white text-[25px] font-bold">
            Please give what you can to help us end child labour
          </h1>
          <button className="rounded-[25px] py-[6px] px-4 bg-white text-[20px] text-blue-400 mt-6">
            DONATE NOW
          </button>
        </div>

        <div className="text-center mx-auto max-w-5xl my-8 text-[20px] text-gray-600">
          <h1 className="text-blue-400 text-[30px] mt-6 mb-8 uppercase">
            Every child deserves a home, love and education
          </h1>
          <p className="m-4">
            Nepal is home to almost 10 million children living in poverty. This
            situation leads to many children falling victim to life on the
            streets, child labour, trafficking, abuse and exploitation.
          </p>
          <p className="m-4">
            Resources are limited and families are often struggling to survive,
            which far too often results in children being exposed to treatment
            that is unimaginable to most of us here in the Western World.
          </p>
          <p className="m-4">
            Our Sansar is a dynamic and responsive NGO focusing on providing
            holistic support that considers every aspect of a child’s wellbeing.
            We don’t just provide shelter or education, we provide emotional
            support and a nurturing family to help lift these children towards a
            positive future.
          </p>
          <p className="m-4">And we can’t do it without you.</p>
        </div>

        <div className="flex justify-center items-center gap-40 text-blue-400 text-[18px] mt-16 mb-14">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[40px]">
              <PiHeartStraightLight />
            </p>
            <h1>SAFETY</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[40px]">
              <PiHeartStraightLight />
            </p>
            <h1>EDUCATION</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[40px]">
              <PiHeartStraightLight />
            </p>
            <h1>LOVE</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[40px]">
              <PiHeartStraightLight />
            </p>
            <h1>COUNSELLING</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[40px]">
              <PiHeartStraightLight />
            </p>
            <h1>MEDICAL CARE</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[40px]">
              <PiHeartStraightLight />
            </p>
            <h1>LEGAL SUPPORT</h1>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="rounded-[25px] py-[6px] px-4 bg-blue-400 text-[20px] text-white">
            DONATE NOW
          </button>
        </div>

        <Video_2 />

        <div className="bg-blue-400 my-10 text-white py-24 px-8 flex justify-center items-center">
          <div className="w-[1110px]">
            <h1 className="text-[30px]">How we help</h1>
            <p className="text-[22px] my-4">
              We work in Province 2, the smallest yet most densely populated
              region of Nepal. Here there is a devastating lack of support and
              services for children suffering neglect, abuse and the dire
              effects of poverty.{' '}
            </p>
            <p className="text-[22px] my-4">
              We work closely with local communities, organisations and the
              government in Nepal to ensure projects are cost-effective and
              reach the maximum number of beneficiaries. We understand how
              critical the involvement of the local community is to the
              long-term success, sustainability and effectiveness of our
              projects.
            </p>
            <p className="text-[22px] my-4">
              Our vision is for all children in need to have a safe place to
              turn to for practical help, counselling, legal support, education,
              training, work experience and medical support.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-16 ">
          <div className="w-[350px] text-center text-[20px] leading-6 min-h-80 flex flex-col">
            <a href="/">
              <img
                className="h-52 w-full object-cover"
                src="vollyball.jpg"
                alt="Error"
              />
            </a>
            <a href="/">
              <h1 className="text-[24px] leading-6 my-6">
                Street Children’s Programme
              </h1>
            </a>
            <p className="my-3">
              In Nepal, there are approx 5,000 children living on the streets
              with no access to shelter or education.
            </p>
            <p className="my-3">
              Our home and helpline free them from a life of drugs, stealing and
              malnutrition, providing shelter, education, nurturing care and a
              passage to a positive future.
            </p>
            <a href="/">
              <button className="border-2 border-blue-400 rounded-[3px] py-3 px-5 my-4 text-blue-400">
                Tell Me More
              </button>
            </a>
          </div>

          <div className="w-[350px] text-center text-[20px] leading-6 min-h-80 flex flex-col">
            <a href="/">
              <img
                className="h-52 w-full object-cover"
                src="game.jpg"
                alt="Error"
              />
            </a>
            <a href="/">
              <h1 className="text-[24px] leading-6 my-6">
                Children’s Protection Programme, Janakpur
              </h1>
            </a>
            <p className="my-3">
              In the last five years, the trafficking of women and children from
              Nepal has jumped by over 500%
            </p>
            <p className="my-3">
              Our safe house for girls provides refuge, counselling, education
              and transformative support to girls who have been victims of rape,
              trafficking and violence.
            </p>
            <a href="/">
              <button className="border-2 border-blue-400 rounded-[3px] py-3 px-5 my-4 text-blue-400">
                Tell Me More
              </button>
            </a>
          </div>

          <div className="w-[350px] text-center text-[20px] leading-6 min-h-80 flex flex-col">
            <a href="/">
              <img
                className="h-52 w-full object-cover"
                src="brick.jpg"
                alt="Error"
              />
            </a>
            <a href="/">
              <h1 className="text-[24px] leading-6 my-6">
                End to Child Labour, Rautahat
              </h1>
            </a>
            <p className="my-3">
              In Rautahat, a shocking 2,500 children are subject to child
              labour.
            </p>
            <p className="my-3">
              Instead of going to school, they work in dangerous conditions, to
              put food on the table for their families.
            </p>
            <p className="my-3">
              Our End Child Labour project gets them out of work and safely into
              school.
            </p>
            <a href="/">
              <button className="border-2 border-blue-400 rounded-[3px] py-3 px-5 my-4 text-blue-400">
                Tell Me More
              </button>
            </a>
          </div>
        </div>

        <div className="bg-blue-400 flex flex-col justify-center items-center gap-4 my-6 text-white text-[28px] font-bold py-20">
          <h1>Every child deserves to feel safe</h1>
          <h1>Every child deserves a home</h1>
          <h1>Every child deserves to be loved</h1>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center w-[1000px] text-center my-4">
            <p className="text-[20px]">
              It’s our goal that the children who need us will be safe from
              harm, cared for and nurtured by people they can trust, so they can
              build bright futures. They will no longer be isolated or excluded
              from society or left to fend for themselves.
            </p>
            <h1 className="text-blue-400 font-bold text-[25px] my-6">
              We can change a child’s life, with not very much money at all.
            </h1>
            <h1 className="font-bold text-[20px]">Give what you can</h1>
            <p className="text-[20px] my-6">
              100% of your donation goes directly to Our Sansar’s projects.
            </p>
            <button className="rounded-[25px] py-[6px] px-4 bg-blue-400 text-[20px] text-white">
              DONATE NOW
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-blue-400 text-[25px] font-bold mt-6 mb-8">
            Our Blog
          </h1>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-[18px]">
              <a href="/">
                {' '}
                <img
                  className="h-52 w-full rounded-[20px]"
                  src="img4.jpg"
                  alt="Error"
                />
              </a>
              <a href="/">
                <h1 className=" text-blue-400 mt-6 mb-2">
                  Child labour in Nepal
                </h1>
              </a>
              <p>
                In Nepal, there are over 1 million children engaged in child
                labour. A...
              </p>
            </div>

            <div className="text-[18px]">
              <a href="/">
                {' '}
                <img
                  className="h-52 w-full rounded-[20px]"
                  src="img3.jpg"
                  alt="Error"
                />
              </a>
              <a href="/">
                <h1 className=" text-blue-400 mt-6 mb-2">More than a Walk</h1>
              </a>
              <p>
                More than a Dent, a registered charity set up by Magda and
                Edwin,...
              </p>
            </div>

            <div className="text-[18px]">
              <a href="/">
                {' '}
                <img
                  className="h-52 w-full rounded-[20px]"
                  src="img2.jpg"
                  alt="Error"
                />
              </a>
              <a href="/">
                <h1 className=" text-blue-400 mt-6 mb-2">
                  EmpowerHER is a finalist at the Global Sustainability
                  Festival!
                </h1>
              </a>
              <p>
                The 6th Big Syn International Film Festival, the world’s
                largest...
              </p>
            </div>

            <div className="text-[18px]">
              <a href="/">
                {' '}
                <img
                  className="h-52 w-full rounded-[20px]"
                  src="img1.jpg"
                  alt="Error"
                />
              </a>
              <a href="/">
                <h1 className=" text-blue-400 mt-6 mb-2">
                  End to Child Marriage
                </h1>
              </a>
              <p>
                In the quiet majestic corners of Nepal, the Terai area is often
                home to...
              </p>
            </div>
          </div>
          <p className="text-blue-400 my-8">« Older Entries</p>
        </div>
      </main>

      <footer className="bg-black py-8">
        <div className="flex mx-auto">
          <div className="flex flex-col text-white">
            <h1 className="text-blue-400 text-[20px]">Contact</h1>
            <p>Our Sansar Limited</p>
            <p>35 New England Road</p>
            <p>Brighton</p>
            <p>BN1 4GG</p>
            <p>
              <a href="/">info@oursansar.org</a>
            </p>
          </div>
          <div className="flex flex-col text-white mr-8 ml-12">
            <h1 className="text-blue-400 text-[20px]">Registration info</h1>
            <p>Registered in England and Wales</p>
            <p>No. 6930451</p>
            <p>Registered Charity no. 1132124</p>
            <p>
              <a href="/">Privacy policy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Body
