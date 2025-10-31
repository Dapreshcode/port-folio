import React from 'react'

const Skills = () => {
  return (
   <section class="bg-[#0b0f19]/90 py-20 px-6 text-gray-200" id='#Skills'>
  <div class="max-w-4xl mx-auto">
    <h2 class="text-yellow-400 font-semibold text-center">MY SKILLS</h2>
    <p class="text-center text-gray-400 mt-2">
     These are the skills I have acquired as a front end web developer thus far
    </p>

    <div class="mt-10 space-y-6">
      <div>
        <p class="flex justify-between"><span>HTML</span><span>90%</span></p>
        <div class="w-full bg-gray-700 rounded-full h-2 mt-2">
          <div class="bg-yellow-400 h-2 rounded-full w-[90%]"></div>
        </div>
      </div>

      <div>
        <p class="flex justify-between"><span>CSS/TAILWINDCSS</span><span>70%</span></p>
        <div class="w-full bg-gray-700 rounded-full h-2 mt-2">
          <div class="bg-yellow-400 h-2 rounded-full w-[70%]"></div>
        </div>
      </div>

      <div>
        <p class="flex justify-between"><span>REACT</span><span>55%</span></p>
        <div class="w-full bg-gray-700 rounded-full h-2 mt-2">
          <div class="bg-yellow-400 h-2 rounded-full w-[55%]"></div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Skills
