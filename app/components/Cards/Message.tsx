'use client';

const Message = () => {
  return (
    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-800">
      <button onClick={() => console.log("hi")}>Add to cart </button>
    </div>
    
  )
}

export default Message
