"use client"

import React from 'react'
import ProjectsGrid from '@/components/Projects';
import { useTrail, animated, easings } from "@react-spring/web"
import { GRIDS } from '@/app/constants';

function ProjectsPageWrapper() {


    const trails = useTrail(7, {
        from: { scale: 0 },
        to: { scale: 1 },
        leave: { scale: 1 },
        config: {
        easing: easings.easeInBack,
        delay: 300,
    },
  })


  return (
    <animated.div
          style={trails[1]}
          className='relative bg-[#F4A261] border border-black h-full w-full'
          onClick={() => setCurrentGrid(GRIDS[2])}
        >
        </animated.div>
  )
}

export default ProjectsPageWrapper;