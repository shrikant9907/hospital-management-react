import React from 'react'

const ProgressBarPage = () => {
  return (
    <div>
    <section class="py_30 bg-light">
  <div class="container">
    <h2 class="text-center mb_50">Progress Bars</h2>
    <div class="row">	
      <div class="col">

        <div class="card cui2 w-100">
          <div class="cbody">
            <div class="codebefore relative">
              <span class="copycode">Copy Code</span>
            </div>
            <div class="copythis">
              <div class="progress r_4 box_shw3 h_30">
                <div class="progress-bar bg_purple progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col">
        
        <div class="card cui2 w-100">
          <div class="cbody">
            <div class="codebefore relative">
              <span class="copycode">Copy Code</span>
            </div>
            <div class="copythis">
              <div class="progress r_4 h_30 bg-dark">
                <div class="progress-bar bg-dark progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '25%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div> 
</section>
    
    </div>
  )
}

export default ProgressBarPage