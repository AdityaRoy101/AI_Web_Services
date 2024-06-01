import { Input } from 'antd';

const InputText = ({ text, work }) => {
  return (
    <main  className=' justify-center items-center'>
        <section>
          <Input 
            placeholder={text} 
            className=' p-2 focus:border-black' 
            onChange={(e) => 
            {
              work(e.target.value)
            }}
          />
        </section>
    </main>
  )
}

export default InputText