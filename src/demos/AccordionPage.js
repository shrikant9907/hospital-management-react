import React from 'react'

const AccordionPage = () => {
  return (
    <>

      <div class="accordion accordion-ui1">
        <div class="card">
          <h3 class="card-header" role="tab" id="heading1">
            <a href="#collapse_design11" data-toggle="collapse" data-parent="#accordion2" aria-expanded="true" aria-controls="collapse_design11"><span class="card-count">1</span> <span class="card-title">Lorem ipsectetur adipisicing </span> <i class="fas fa-caret-down position-absolute d-none"></i> <i class="fas fa-caret-left position-absolute d-none"></i></a>
          </h3>
          <div class="collapse show" id="collapse_design11" role="tabpanel" aria-labelledby="heading1" data-parent="#accordion2">
            <div class="card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>


      <div class="accordion accordion-ui2">
        <div class="card">
          <h3 class="card-header" role="tab" id="heading2">
            <a href="#collapse_design2" data-toggle="collapse" data-parent="#accordion2" aria-expanded="true" aria-controls="collapse_design2"><span class="card-title">Lorem ipsum dolong </span> <i class="fas fa-caret-down"></i> <i class="fas fa-caret-left"></i></a>
          </h3>
          <div class="card-body collapse show" id="collapse_design2" role="tabpanel" aria-labelledby="heading2" data-parent="#accordion2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>


      <div class="accordion accordion-ui2">
        <div class="card">
          <h3 class="card-header" role="tab" id="heading3">
            <a href="#collapse_design3" data-toggle="collapse" data-parent="#accordion2" aria-expanded="true" aria-controls="collapse_design3"><span class="card-title">Lorem ipsum dolor sit amet, consectetur adipisicing </span> <i class="fas fa-plus"></i> <i class="fas fa-minus"></i></a>
          </h3>
          <div class="card-body collapse show" id="collapse_design3" role="tabpanel" aria-labelledby="heading3" data-parent="#accordion2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default AccordionPage