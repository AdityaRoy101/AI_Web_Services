
const CustomButton = ({ text, work }) => {
  return (
    <main className="">
      <section>
        <button className=" w-full pt-2 pb-2 pr-3 pl-3 bg-blue-500 rounded-lg text-white font-medium font-montserrat border hover:bg-white hover:text-black hover:border-black " onClick={work}>{ text }</button>
      </section>
    </main>
  )
}

export default CustomButton