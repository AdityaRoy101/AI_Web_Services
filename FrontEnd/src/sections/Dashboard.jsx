
// dropzone to drop images
// input box to take url's of images
// loader in a part
// image loader with the lines

import { useState } from "react"
import CustomButton from "../components/CustomButton"
import InputText from "../components/InputText"
import FileUploader from "./FileUploader"
import ImageViewerAfterRecognization from "./ImageViewerboundingboxes/ImageViewerAfterRecognization"


// at first
// image input box, button to send the image to clarify api
// receive the image and show the lines around the image

const Dashboard = () => {

  // const [homeImageUrl, SethomeImageUrl] = useState("");
  const [imageUrl, SetImageUrl] = useState("");
  // const [imageSet, SetImageSet] = useState(true);
  const [box, SetBox] = useState({});
  const [boxHeight, setBoxHeight] = useState(0);
  const [filename, setFilename] = useState("");

  const displayFaceBox = (b) => {
    SetBox(b);
  }

  const calculateFaceLocation = (data) => {
    // SetImageSet(false);
    const clarifyface = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifyface);
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log(width);
    // console.log(height);
    setBoxHeight(height);
    // SetImageSet(false);
    return{
      leftcol: clarifyface.left_col * width,
      toprow: clarifyface.top_row * height,
      rightcol: width - (clarifyface.right_col * width),
      bottomrow: height - (clarifyface.bottom_row * height)
    }
  }

  const buttonClickUpload = async () => {

    if(imageUrl.length > 6 && filename.length === ""){
      await fetch('http://localhost:5000/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify
      ({
        input: imageUrl  
      })
      })
      .then(response => response.json())
      .then(data => {
        displayFaceBox(calculateFaceLocation(data));})
      .catch(err => console.log(err));
    }else if(imageUrl === "" && filename.length > 5){

      // await fetch(`curl -F file=@http://localhost:5000/Images/${filename} https://file.io`)
      //   .then(res => res.json())
      // ===================================
      
      // await fetch('http://localhost:5000/imageurl', {
      // method: 'post',
      // headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify
      // ({
      //   input: `http://localhost:5000/Images/${filename}`  
      // })
      // })
      // .then(response => response.json())
      // .then(data => {
      //   displayFaceBox(calculateFaceLocation(data));})
      // .catch(err => console.log(err));


    }else if(imageUrl.length > 6){
      await fetch('http://localhost:5000/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify
      ({
        input: imageUrl  
      })
      })
      .then(response => response.json())
      .then(data => {
        displayFaceBox(calculateFaceLocation(data));
      })
      .catch(err => console.log(err));
    }
  }

  return (
    <main className=" justify-center items-center h-screen flex-col flex">
      <section className="flex gap-[200px]">

        <section className=" flex flex-col justify-center items-center gap-5">
          <h1 className=" text-[30px] font-palanquin font-medium">AI Face Recognizer</h1>
          <div className=" bg-gray-50 rounded-lg w-[400px] h-[400px] border-dashed border-2 border-black flex flex-col pr-5 pl-5">
            <div className=" w-full mt-5 flex-col flex gap-2">
              <InputText text="Enter any Image Url .jpg .png .jpeg supported" work={SetImageUrl}/>
              <CustomButton text="Recognize" work={buttonClickUpload}/>
              {console.log(box)}
            </div>
            <div className=" mt-10 border-[1px] border-black border-dashed rounded-lg">
              <FileUploader fileFunc={setFilename}/>
            </div>
          </div>
        </section>

        <section className=" flex flex-col justify-center items-center gap-5">
          <h1 className=" text-[30px] font-palanquin font-medium">Recognized Faces</h1>
            {imageUrl.length < 6 && filename.length > 5?
              <ImageViewerAfterRecognization box={box} imgurl={`http://localhost:5000/Images/${filename}`} boxHeight={boxHeight} />
              :
              <ImageViewerAfterRecognization box={box} imgurl={imageUrl} boxHeight={boxHeight} />
            }
        </section>
      </section>
    </main>
  )
}

export default Dashboard