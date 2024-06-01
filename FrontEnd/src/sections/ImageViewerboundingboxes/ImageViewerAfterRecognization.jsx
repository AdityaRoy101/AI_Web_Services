import './ImageViewerAfterRecognization.css';
import homeImage from '../../assets/icons/Home_image.png'

const ImageViewerAfterRecognization = ({box, imgurl, boxHeight }) => {
  return (
    <main >
      {boxHeight <= 400 ?
      (<section className=" bg-gray-50 rounded-lg w-[400px] h-[400px] border-dashed border-2 border-blue-600 flex flex-col justify-center items-center">
        {imgurl === "" ? 
        <>
          <img 
            src={homeImage} 
            alt="Dummy Image"
            width={50}
            height={50}
            className=' rounded-lg'
          />
          <h2 className=' text-center w-[250px] mt-5 text-slate-500 font-normal font-palanquin text-[15px]'>Upload image or enter image url and press on Recognize to see Magic</h2>
        </>:
        <div className='absolute'>
          <img id='inputimage' src={imgurl} width='400px' height='auto' className=' rounded-lg'/>
          <div className='boundingbox' style={{top: box.toprow, right: box.rightcol, bottom: box.bottomrow, left: box.leftcol}}></div>
        </div>
        }
      </section>
      ):(
      <section className=" bg-gray-50 rounded-lg w-[400px] h-[400px] border-dashed border-2 border-blue-600 flex flex-col justify-center items-center">
        <h1 className=' text-red-500 font-palanquin font-normal text-[20px]'>Image height is Greater than 400px</h1>
        <p className=' mt-2 text-gray-500 font-palanquin font-normal w-[300px] text-center'>Choose Image whose height is less than 400px</p>
        <p className=' mt-2 text-blue-500 font-palanquin font-normal w-[300px] text-center'>Reload the Page to Continue</p>
      </section>
      )}
    </main>
  )
}

export default ImageViewerAfterRecognization