var modalWrap=null;
    const showModal1 = () =>{
      //alert('clicked');
      if(modalWrap !== null){
        modalWrap.remove();
      }
      modalWrap=document.createElement('div');
      modalWrap.innerHTML=`
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Oneplus 11</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <ul>
                    <li>Camera: 50MP Main Camera with Sony IMX890 (OIS supported), 48MP Ultrawide Camera with Sony IMX581 (FOV: 115 degree) and 32MP Telephoto lens with Sony IMX709 (2X Optical Zoom); 16MP Front (Selfie) Camera with EIS support</li>
                    <li>Camera Modes : Night, PRO, PANO, Portrait, TIME-LAPSE, SLO-MO, Text scanner, Movie, Long Exposure, Dual-view video, TILT-SHIFT, XPAN, Scan, STICKER, and AI ID photo</li>
                    <li>Display: 6.7 Inches; 120 Hz AMOLED QHD Display with Corning Gorilla Glass Victus; Resolution: 3216 X 1440 pixels; HDR 10+, sRGB, 10-bit Color Depth, PWM + DC dimming</li>
                    <li>Operating System: OxygenOS based on Android 13</li>
                    <li>Processor: Snapdragon 8 Gen 2 Mobile Platform</li>
                    <li>16GB LPDDR5X RAM, 256 GB UFS4.0 Storage</li>
                    <li>Battery & Charging: 5000 mAh with 100W SUPERVOOC</li>
                </ul>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    
      `;

      document.body.append(modalWrap);
      var modal= new bootstrap.Modal(modalWrap.querySelector('.modal'));
      modal.show();
    }