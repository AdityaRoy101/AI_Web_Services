
const LinkTag = ({ text, route }) => {
  return (
    <main className=" text-blue-600 flex justify-center items-center font-montserrat font-medium">
        <section>
            <a className=" hover:cursor-pointer" onClick={route}>{ text }</a>
        </section>
    </main>
  )
}

export default LinkTag