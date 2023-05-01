import React, { Component, createRef } from "react";
import { ExclamationCircleIcon, PhotoIcon } from "@heroicons/react/24/outline";
import QrReader from "react-scan-qr";

export class QrCodeScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "",
      error: "",
      legacyMode: false,
      ref: createRef(null)
    };

    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
    this.openImageDialog = this.openImageDialog.bind(this);
  }
  handleScan(result) {
    this.setState({result, error:result ? "" : "QR Code Not found"})
  }
  handleError(e) {
    this.setState({error:e.message, legacyMode:true})
  }
  openImageDialog() {
    this.state.ref.current.openImageDialog()
  }

  render() {

    return (
      <div className="flex flex-col gap-4">

        <QrReader
          ref={this.state.ref}
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          legacyMode={this.state.legacyMode}
          className="rounded-lg w-[250px] md:w-[350px] mx-auto h-[250px] md:h-[350px] object-cover object-center bg-background-main overflow-hidden border-2 border-outline"
        />

        {this.state.error &&
          <div className='bg-primary-main border-2 justify-center border-primary-light text-white capitalize px-4 py-2 w-full rounded-lg font-semibold inline-flex items-center mx-auto gap-2'>
            <ExclamationCircleIcon className='w-6 h-6' />
            {"Error : " + this.state.error}
          </div>}

        {this.state.legacyMode && <div
        onClick={this.openImageDialog}
          className=" px-4 py-2 bg-background-light cursor-pointer justify-center capitalize font-semibold rounded-lg  inline-flex items-center gap-2 ">
          <PhotoIcon className='w-6 h-6' />
            Submit Your QR Code Image
        </div>}

        {this.state.result && 
        <div className="flex flex-col">
<label className=" px-4 py-2 bg-primary-main text-white capitalize font-semibold rounded-t-lg  inline-flex items-center border-2 border-primary-light ">Result</label>
        <textarea defaultValue={this.state.result} rows={5} className="font-semibold w-full text-start bg-background-light rounded-b-lg px-4 py-2 resize-none focus:ring-offset-0 border-2 !border-outline focus:ring-0"></textarea>
        </div>}

      </div>
    );
  }
}
