import React from "react"
import "./create.css"
import { IoIosAddCircleOutline } from "react-icons/io"

export const Create = () => {
  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img '>
            <img src='https://cdn.discordapp.com/attachments/1191746153348350043/1257062413665308682/Picsart_24-07-01_01-26-12-085.jpg?ex=66830a1a&is=6681b89a&hm=88bf41a3a8654dcd1938319700770f55907a8fccf62c4424383db971ac9c6204&' alt='image' class='image-preview' />
          </div>
          <form>
            <div className='inputfile flexCenter'>
              <input type='file' accept='image/*' alt='img' />
            </div>
            <input type='text' placeholder='Title' />

            <textarea name='' id='' cols='30' rows='10'></textarea>

            <button className='button'>Create Post</button>
          </form>
        </div>
      </section>
    </>
  )
}
