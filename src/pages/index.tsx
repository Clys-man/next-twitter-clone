import React from 'react'
import SEO from '@/components/SEO'

const Home: React.FC = () => {
  return (
    <div id="app">
      <SEO title="teste" image="boost.png" shouldExcludeTitleSuffix />
      <main>
        <h1>NextJs Template</h1>
        <h3>By: @clys_man</h3>
      </main>
    </div>
  )
}

export default Home
