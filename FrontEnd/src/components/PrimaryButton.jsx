
const PrimaryButton = ({ text, work }) => {
  return (
    <main className=" flex justify-center items-center">
      <section>
        <button className=" pt-2 pb-2 pr-3 pl-3 bg-white border-black border-2 rounded-lg text-black font-medium font-montserrat hover:text-slate-600 hover:border-slate-600" onClick={work}>{ text }</button>
      </section>
    </main>
  )
}

export default PrimaryButton