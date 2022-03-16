import React, { useState } from "react"

// TODO
// - gladeye current grid
// - fixed vs flexi gutters
// - fixed vs flexi margins


const Controls = ({ handleLayoutOnClick, handleMarginOnChange, handleGutterOnChange, marginSize, gutterSize }) => {
  return (
    <div className="fixed top-0 inset-x-0 px-12 h-24 flex items-center space-x-6 z-30 bg-white shadow-lg">
      <button className="flex items-center rounded-md bg-blue-500 text-white text-sm font-medium px-6 py-2 cursor-pointer shadow-sm hover:bg-blue-400" onClick={handleLayoutOnClick}>Toggle Layout</button>
      <label className="flex items-center space-x-2 font-medium text-sm">
        <span>Margin:</span>
        <input type="range" min="5" max="100" defaultValue="48" onChange={handleMarginOnChange} />
        <span>{marginSize}px</span>
      </label>
      <label className="flex items-center space-x-2 font-medium text-sm">
        <span>Gutter:</span>
        <input type="range" min="5" max="80" defaultValue="32" onChange={handleGutterOnChange} />
        <span>{gutterSize}px</span>
      </label>
    </div>
  )
}

const Item = ({flush = 'none', full, alt}) => {

  let rounded = 'rounded-lg';
  if (flush === 'right') {
    rounded = 'rounded-l-lg'
  }
  if (flush === 'left') {
    rounded = 'rounded-r-lg'
  }

  let height = 'aspect-video';
  if (full) {
    height = 'h-full'
  }

  let style = 'bg-gradient-to-r from-sky-500 to-indigo-500'
  if (alt) {
    style = 'bg-slate-800'
  }

  return (
    <div className={`${style} ${rounded} ${height} shadow-lg`}></div>
  )
}

const Layout = ({ fillLayout }) => {

  let style = 'border-x border-deeppink';
  if (fillLayout) {
    style = 'bg-deeppink bg-opacity-25'
  }


  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <div className="absolute inset-0 flex items-stretch justify-center">
        <div className="w-px bg-lime"></div>
      </div>
      <div className="h-full px-margin">
        <div className="h-full grid grid-cols-12 gap-y-8 gap-x-gutter">
          <div className={`col-span-1 ${style}`}></div>
          <div className={`col-span-1 ${style}`}></div>
          <div className={`col-span-1 ${style}`}></div>
          <div className={`col-span-1 ${style}`}></div>
          <div className={`col-span-1 ${style}`}></div>
          <div className={`col-span-1 ${style}`}></div>
          <div className={`col-span-1 ${style}`}></div>
          <div className={`col-span-1 ${style}`}></div>
          <div className={`col-span-1 ${style}`}></div>
          <div className={`col-span-1 ${style}`}></div>
          <div className={`col-span-1 ${style}`}></div>
          <div className={`col-span-1 ${style}`}></div>
        </div>
      </div>
    </div>
  )
}

const IndexPage = () => {
  const [showLayout, setShowLayout] = useState(false);
  const [fillLayout, setFillLayout] = useState(false);
  const [marginSize, setMarginSize] = useState(48);
  const [gutterSize, setGutterSize] = useState(32);

  const handleLayoutOnClick = () => {
    if (!showLayout) {
      setShowLayout(true)
    }
    if (showLayout) {
      setFillLayout(true)
    }
    if (fillLayout) {
      setShowLayout(false)
      setFillLayout(false)
    }
  }

  const handleMarginOnChange = (event) => {
    setMarginSize(event.currentTarget.value)
    document.documentElement.style.setProperty('--margin', `${marginSize}px`);
  }

  const handleGutterOnChange = (event) => {
    setGutterSize(event.currentTarget.value)
    document.documentElement.style.setProperty('--gutter', `${event.currentTarget.value}px`);
  }

  return (
    <>
      <Controls
        handleLayoutOnClick={handleLayoutOnClick}
        handleMarginOnChange={handleMarginOnChange}
        handleGutterOnChange={handleGutterOnChange}
        marginSize={marginSize}
        gutterSize={gutterSize}
      />
      {showLayout && <Layout fillLayout={fillLayout} />}
      <div className="pt-24">
        <div className="relative grid grid-cols-12 gap-y-8 gap-x-gutter px-margin py-12 bg-slate-700 z-10">
          <div className="col-span-6">
            <Item/>
          </div>
          <div className="col-span-6">
            <Item/>
          </div>
          <div className="col-span-4">
            <Item/>
          </div>
          <div className="col-span-4">
            <Item/>
          </div>
          <div className="col-span-4">
            <Item/>
          </div>
          <div className="col-span-6">
            <div className="-ml-margin">
              <Item flush="left"/>
            </div>
          </div>
          <div className="col-span-3">
            <Item full/>
          </div>
          <div className="col-span-3">
            <Item full/>
          </div>
          <div className="col-span-4">
            <Item full/>
          </div>
          <div className="col-span-8">
            <div className="-mr-margin">
              <Item flush="right"/>
            </div>
          </div>
          <div className="col-span-3">
            <Item/>
          </div>
          <div className="col-span-3">
            <Item/>
          </div>
          <div className="col-span-3">
            <Item/>
          </div>
          <div className="col-span-3">
            <Item/>
          </div>
          <div className="col-span-6">
            <div className="-mr-gutter-half">
              <Item/>
            </div>
          </div>
          <div className="col-span-6">
            <Item full alt/>
          </div>
          <div className="col-span-4">
            <div className="-ml-margin -mr-gutter">
              <Item flush="left"/>
            </div>
          </div>
          <div className="col-span-4">
            <Item alt full/>
          </div>
          <div className="col-span-4">
            <div className="-mr-margin -ml-gutter">
              <Item flush="right"/>
            </div>
          </div>
          <div className="col-span-3">
            <Item/>
          </div>
          <div className="col-span-3">
            <Item/>
          </div>
          <div className="col-span-3">
            <Item/>
          </div>
          <div className="col-span-3">
            <Item/>
          </div>
          <div className="col-span-6">
            <Item full alt/>
          </div>
          <div className="col-span-6">
            <div className="-ml-gutter">
              <Item/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
