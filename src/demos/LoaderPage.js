import React from 'react'

const LoaderPage = () => {
  return (
    <div>
      <section class="py_30 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-12"><h2 class="text-center mb-5">Loader</h2></div>

            <div class="col">
              <div class="card cui2 w-100">
                <div class="cbody">
                  <div class="codebefore relative">
                    <span class="copycode">Copy Code</span>
                  </div>
                  <div class="copythis">
                    <div class="loader f50 loader-col static">
                      <i class="fas fa-spinner fa-pulse mb_15"></i>
                      <span class="loader-text f16">Loading.....</span>
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
                    <div class="loader f50 loader-col static">
                      <i class="fas fa-spinner fa-spin mb_15"></i>
                      <span class="loader-text f16">Loading.....</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section></div>
  )
}

export default LoaderPage