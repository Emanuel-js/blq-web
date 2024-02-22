import React from 'react'

interface ShortcutProps {
    shortcut: MainShortcut[];
  }

  const Shortcut: React.FC<ShortcutProps> = ({ shortcut }) => {
  return (
<div className='grid grid-cols-5 md:grid-cols-10 gap-5 p-5 w-[100%] md:w-[80%] m-auto'>

{shortcut.map((item) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2" key={item.creator}>
            <a
                href={item.linkUrl}
                target="_blank"
                rel="noreferrer"
            >
                <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: 'auto' }} />
            </a>
            <div className="text-center">
                {item.title}
            </div>
        </div>
    )
})}
</div>



  )
}

export default Shortcut