
const SecondaryButton = ({ text, work }) => {
  return (
    <main className=" flex justify-center items-center">
      <section>
        <button className=" pt-2 pb-2 pr-3 pl-3 bg-black rounded-lg text-white font-medium font-montserrat border hover:bg-white hover:text-black hover:border  border-black" onClick={work}>{ text }</button>
      </section>
    </main>
  )
}

export default SecondaryButton