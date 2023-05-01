import React, { useEffect, useRef, useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";

const Index = () => {
  const [qrCode, setQrCode] = useState();
  const ref = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined" && !qrCode) {
      let qr;
      const QRCodeStyling = require("qr-code-styling");
      qr = new QRCodeStyling(initialState);
      qr.append(ref.current);
      setQrCode(qr)
    }
  }, [ref]);

  const initialState = {
    width: 200,
    height: 200,
    size: 500,
    data: "Sample Data",
    margin: 10,
    extension: 'png',
    type: 'svg',
    imageOptions: { margin: 2 },
    backgroundOptions: { color: "#ffedd6" },
    dotsOptions: { type: "extra-rounded", color: "#cf5846" },
    cornersSquareOptions: { type: "extra-rounded", color: "#f59827" },
    cornersDotOptions: { type: "dot", color: "#cf5846" },

  }
  const [data, setData] = useState(initialState);
  const inputFile = useRef(null);
  useEffect(() => { if (qrCode) qrCode.update(data) }, [data]);
  const handleDataChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="flex flex-grow h-full flex-col-reverse md:flex-row gap-4 w-full mx-auto p-4 md:p-8">

      <div className="md:w-2/3 w-full overflow-hidden">
        <div className=" grid gap-4  bg-background-main shadow-xl rounded-lg p-4 md:p-8">

          <div className="flex space-x-4 border-b-2 border-outline pb-6 mb-2 ">
            <div className="w-full">
              <label htmlFor="data" className="block mb-4 text-base font-medium">Text Or URL</label>
              <textarea value={data.data} onChange={handleDataChange} rows={5} type="text" name="data" placeholder="Enter Text or URL" className="bg-background-light text-sm rounded-lg focus:ring-offset-0 border-2 resize-none !border-outline focus:ring-0 w-full py-3 px-4 font-semibold " />
            </div>

          </div>

          <div className="grid gap-4 ">

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full md:w-1/2 lg:w-full">
                <label htmlFor="backgroundOptionColor" className="block mb-4 text-base font-medium">Background Color</label>
                <input type="color" value={data.backgroundOptions.color} onChange={(e) => { e.preventDefault(); setData({ ...data, backgroundOptions: { ...data.backgroundOptions, color: e.target.value } }) }} name="backgroundOptionColor" className=" text-sm h-10 rounded-lg border-2 border-outline  font-semibold w-full bg-background-light capitalize focus:ring-offset-0 focus:ring-0">
                </input>
              </div>
              <div className="w-full md:w-1/2 lg:w-full">
                <label htmlFor="dotsOptionColor" className="block mb-4 text-base font-medium">Dots Color</label>
                <input type="color" value={data.dotsOptions.color} onChange={(e) => { e.preventDefault(); setData({ ...data, dotsOptions: { ...data.dotsOptions, color: e.target.value } }) }} name="dotsOptionColor" className=" text-sm h-10 rounded-lg  border-2 border-outline font-semibold w-full bg-background-light capitalize focus:ring-offset-0 focus:ring-0">
                </input>
              </div>
              <div className="w-full md:w-1/2 lg:w-full">
                <label htmlFor="cornersSquareOptionsColor" className="block mb-4 text-base font-medium">Corners Square Color</label>
                <input type="color" value={data.cornersSquareOptions.color} onChange={(e) => { e.preventDefault(); setData({ ...data, cornersSquareOptions: { ...data.cornersSquareOptions, color: e.target.value } }) }} name="cornersSquareOptionsColor" className=" text-sm h-10 rounded-lg border-2 border-outline  font-semibold w-full bg-background-light capitalize focus:ring-offset-0 focus:ring-0">
                </input>
              </div>
              <div className="w-full md:w-1/2 lg:w-full">
                <label htmlFor="cornersDotOptionsColor" className="block mb-4 text-base font-medium">Corners Dot Color</label>
                <input type="color" value={data.cornersDotOptions.color} onChange={(e) => { e.preventDefault(); setData({ ...data, cornersDotOptions: { ...data.cornersDotOptions, color: e.target.value } }) }} name="cornersSquareOptionsColor" className=" text-sm h-10 rounded-lg border-2 border-outline  font-semibold w-full bg-background-light capitalize focus:ring-offset-0 focus:ring-0">
                </input>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">

              <div className="w-full md:w-1/2 lg:w-full">
                <label htmlFor="dotsOptionType" className="block mb-4 text-base font-medium">Dots Type</label>
                <select value={data.dotsOptions.type} onChange={(e) => { e.preventDefault(); setData({ ...data, dotsOptions: { ...data.dotsOptions, type: e.target.value } }) }} name="dotsOptionType" className=" text-sm rounded-lg font-semibold w-full p-2.5 bg-background-light capitalize focus:ring-offset-0 border-2 !border-outline focus:ring-0">
                  <option value="extra-rounded">Extra Rounded</option>
                  <option value="rounded">rounded</option>
                  <option value="classy">classy</option>
                  <option value="classy-rounded">classy Rounded</option>
                  <option value="square">square</option>
                  <option value="dots">dots</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 lg:w-full">
                <label htmlFor="cornersSquareOptionsType" className="block mb-4 text-base font-medium">Dots Type</label>
                <select value={data.cornersSquareOptions.type} onChange={(e) => { e.preventDefault(); setData({ ...data, cornersSquareOptions: { ...data.cornersSquareOptions, type: e.target.value } }) }} name="dotsOptionType" className=" text-sm rounded-lg font-semibold w-full p-2.5 bg-background-light capitalize focus:ring-offset-0 border-2 !border-outline focus:ring-0">
                  <option value="extra-rounded">Rounded</option>
                  <option value="square">square</option>
                  <option value="dots">dots</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 lg:w-full">
                <label htmlFor="cornersDotOptionsType" className="block mb-4 text-base font-medium">Dots Type</label>
                <select value={data.cornersDotOptions.type} onChange={(e) => { e.preventDefault(); setData({ ...data, cornersDotOptions: { ...data.cornersDotOptions, type: e.target.value } }) }} name="dotsOptionType" className=" text-sm rounded-lg font-semibold w-full p-2.5 bg-background-light capitalize focus:ring-offset-0 border-2 !border-outline focus:ring-0">
                  <option value="square">square</option>
                  <option value="dot">dot</option>
                </select>
              </div>
            </div>


          </div>

        </div>
      </div>

      <div className="md:w-1/3 w-full">
        <div className="grid gap-4 bg-background-main shadow-xl rounded-lg p-4 md:p-8">

          <div className="rounded-xl  overflow-hidden inline-block mx-auto">
            <div className="object-center w-full h-full object-cover border-2 border-outline rounded-xl overflow-hidden" ref={ref} />
          </div>

          <div className="flex flex-col space-y-4">

            <div className="w-full flex space-x-4 items-center justify-between">
              <label htmlFor="image" className="text-base font-medium">Logo</label>
              <button
                onClick={() => inputFile.current.click()}
                className='bg-background-light flex gap-2 items-center text-base  max-w-xs w-full border-2 border-outline hover:border-primary-light text-start hover:bg-primary-main hover:text-white cursor-pointer font-semibold rounded-lg px-4 py-2 '
              >
                <PhotoIcon className="w-5 h-5" />
                Choose File
              </button>
              <input ref={inputFile} name="image" id="logo-image" type="file" onChange={(e) => { if (e.target.files[0]) { setData({ ...data, image: URL.createObjectURL(e.target.files[0]) }) } }} hidden accept="image/*" />
            </div>

            <div className="w-full flex space-x-4 items-center justify-between">
              <label htmlFor="margin" className="text-base font-medium">Margin</label>
              <input value={data.margin} onChange={handleDataChange} type="text" placeholder="eg. 10" name="margin" className="  max-w-xs w-full bg-background-light text-sm rounded-lg focus:ring-offset-0 border-2 !border-outline focus:ring-0 py-3 px-4 font-semibold " />
            </div>

            <div className="w-full flex space-x-4 items-center justify-between">
              <label htmlFor="size" className="text-base font-medium">Size</label>
              <select onChange={handleDataChange} value={data.size} name="size" className="max-w-xs w-full text-sm rounded-lg font-semibold p-2.5 bg-background-light focus:ring-offset-0 border-2 !border-outline focus:ring-0">
                <option value={100}>{'Small ( 100x100 px )'}</option>
                <option value={250}>{'Medium ( 250x250 px )'}</option>
                <option value={500}>{'Large ( 500x500 px )'}</option>
                <option value={1000}>{'Extra Large ( 1000x1000 px )'}</option>
              </select>
            </div>

            <div className="w-full flex space-x-4 items-center justify-between">
              <label htmlFor="extension" className="text-sm font-semibold">Extension</label>
              <select onChange={handleDataChange} value={data.extension} name="extension" className=" max-w-xs w-full  text-sm rounded-lg font-semibold p-2.5 bg-background-light focus:ring-offset-0 border-2 !border-outline focus:ring-0">
                <option value="png">PNG</option>
                <option value="jpeg">JPEG</option>
                <option value="webp">WEBP</option>
                <option value="svg">SVG</option>
              </select>
            </div>

            <div className='bg-background-light border-2 border-outline hover:border-primary-light text-center  hover:bg-primary-main hover:text-white cursor-pointer font-semibold rounded-lg px-4 py-2 '
              onClick={() => { const QRCodeStyling = require("qr-code-styling"); const newQR = new QRCodeStyling({ ...data, width: data.size, height: data.size }); newQR.download({ name: `QR Code ( ${data.size}x${data.size}px )`, extension: data.extension }) }}
            >
              Download
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Index;
