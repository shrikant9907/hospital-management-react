import React from 'react'

const ModalPage = () => {
  return (
    <div>

      <section class="common-section-ui">

        <div class="container">
          {/*Row Start */}
          <div class="row">
            <div class="col-12"><h2 class="text-center mb-5">Modals/Popups</h2></div>
            <div class="col">

              <p class="w-100"><code>mui + mui2 / mui3 / mui4</code></p>
              {/*Button trigger modal */}
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
                Basic Modal UI
              </button>
              {/*Modal */}
              <div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="mui mui2 muis modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="basicModalLabel">Popup Title</h5>
                      <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="alert alert-success alertrcs dismissible fade show" role="alert">
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                        <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
                      </div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime voluptates beatae animi ipsa! Ex neque sapiente eius aspernatur, eveniet, est omnis repudiandae eos itaque esse, doloribus corrupti adipisci qui.</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              {/*Button trigger modal */}
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginFormModal">
                Login Modal UI
              </button>
              {/*Modal */}
              <div class="modal fade" id="loginFormModal" tabindex="-1" role="dialog" aria-labelledby="loginFormModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <form class="fui fui1p w-100" action="" method="post" enctype="multipart/form-data" autocomplete="off">
                    <div class="mui muic mui2 muis modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="loginFormModalLabel">Login</h5>
                        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div class="alert alert-success alertrcs dismissible fade show" role="alert">
                          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                          <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div class="form-group">
                          <label for="">Name:</label>
                          <input name="email" value="" required="required" type="email" class="form-control" placeholder="Enter your email" maxlength="50" />
                        </div>
                        <div class="form-group">
                          <label for="">Email:</label>
                          <input name="password" value="" required="required" type="password" class="form-control" placeholder="Enter your password" maxlength="50" />
                        </div>
                        <div class="d-flex justify-content-between">
                          <div class="rememberme m-0">
                            <label for="rememberme" class="d-flex"><input class="mr_5 h_25" id="rememberme" name="rememberme" value="yes" type="checkbox" /> Remember me</label>
                          </div>
                          <a href="#" class="link text-primary">Forgot Password?</a>
                        </div>
                      </div>
                      <div class="modal-footer">
                        {/*<button type="button" class="btn btn-secondary btnui3" data-dismiss="modal">Close</button> */}
                        <button type="submit" class="btn btn-primary btnui3 w-100">Signin</button>
                      </div>

                    </div></form>
                </div>
              </div>
              <hr />
              {/*Button trigger modal */}
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#OtpFormModal">
                Verify Email Modal UI
              </button>
              {/*Modal */}
              <div class="modal fade" id="OtpFormModal" tabindex="-1" role="dialog" aria-labelledby="OtpFormModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <form class="fui fui1p w-100" action="" method="post" enctype="multipart/form-data" autocomplete="off">
                    <div class="mui muic mui2 muis modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title text-primary" id="OtpFormModalLabel">Verify Your Email</h5>
                        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <p class="text-center">Please check your email for OTP.</p>
                        <div class="alert-otp-success alert alert-success alertrcs dismissible fade show" role="alert">
                          <strong>Success!</strong> Your email has been verified successfully.
                          <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div class="alert-wrong-otp alert alert-danger alertrcs dismissible fade show" role="alert">
                          <strong>Wrong OTP!</strong> Please add correct OTP.
                          <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div class="alert-add-otp alert alert-danger alertrcs dismissible fade show" role="alert">
                          <strong>Empty!</strong> Please add OTP.
                          <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div class="form-group mb-0">
                          <input autofocus="" name="otp_code" value="" maxlength="6" type="text" required="required" class="form-control text-center" placeholder="Enter OTP Code" onkeypress="return (event.charCode !=8 &amp;&amp; event.charCode ==0 || (event.charCode >= 48 &amp;&amp; event.charCode <= 57))" onkeydown="this.value=this.value.replace(/[^\d]/,'')" pattern="[0-9]" />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="submit" class="btn btn-primary btnui2 w-100">Submit OTP</button>
                      </div>

                    </div></form>
                </div>
              </div>
              <hr />
              {/*Button trigger modal */}
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#OtpFormModal2">
                Verify Email Modal UI2
              </button>
              {/*Modal */}
              <div class="modal fade" id="OtpFormModal2" tabindex="-1" role="dialog" aria-labelledby="OtpFormModal2Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <form class="fui fui2 w-100" action="" method="get" enctype="multipart/form-data" autocomplete="off">
                    <div class="mui muic mui2 muis modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title text-primary" id="OtpFormModal2Label">Verify Your Email</h5>
                        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <p class="text-center">Please check your email for OTP.</p>
                        <div class="alert-otp-success alert alert-success alertrcs dismissible fade show" role="alert">
                          <strong>Success!</strong> Your email has been verified successfully.
                          <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div class="alert-wrong-otp alert alert-danger alertrcs dismissible fade show" role="alert">
                          <strong>Wrong OTP!</strong> Please add correct OTP.
                          <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div class="alert-add-otp alert alert-danger alertrcs dismissible fade show" role="alert">
                          <strong>Empty!</strong> Please add OTP.
                          <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div class="form-group mb-0 otpGroup">
                          <input name="otp_code[]" autofocus="" maxlength="1" type="text" required="required" class="form-control" placeholder="-" onkeypress="return (event.charCode !=8 &amp;&amp; event.charCode ==0 || (event.charCode >= 48 &amp;&amp; event.charCode <= 57))" onkeydown="this.value=this.value.replace(/[^\d]/,'')" pattern="[0-9]" />
                          <input name="otp_code[]" maxlength="1" type="text" required="required" class="form-control" placeholder="-" onkeypress="return (event.charCode !=8 &amp;&amp; event.charCode ==0 || (event.charCode >= 48 &amp;&amp; event.charCode <= 57))" onkeydown="this.value=this.value.replace(/[^\d]/,'')" pattern="[0-9]" />
                          <input name="otp_code[]" maxlength="1" type="text" required="required" class="form-control" placeholder="-" onkeypress="return (event.charCode !=8 &amp;&amp; event.charCode ==0 || (event.charCode >= 48 &amp;&amp; event.charCode <= 57))" onkeydown="this.value=this.value.replace(/[^\d]/,'')" pattern="[0-9]" />
                          <input name="otp_code[]" maxlength="1" type="text" required="required" class="form-control" placeholder="-" onkeypress="return (event.charCode !=8 &amp;&amp; event.charCode ==0 || (event.charCode >= 48 &amp;&amp; event.charCode <= 57))" onkeydown="this.value=this.value.replace(/[^\d]/,'')" pattern="[0-9]" />
                          <input name="otp_code[]" maxlength="1" type="text" required="required" class="form-control" placeholder="-" onkeypress="return (event.charCode !=8 &amp;&amp; event.charCode ==0 || (event.charCode >= 48 &amp;&amp; event.charCode <= 57))" onkeydown="this.value=this.value.replace(/[^\d]/,'')" pattern="[0-9]" />
                          <input name="otp_code[]" maxlength="1" type="text" required="required" class="form-control" placeholder="-" onkeypress="return (event.charCode !=8 &amp;&amp; event.charCode ==0 || (event.charCode >= 48 &amp;&amp; event.charCode <= 57))" onkeydown="this.value=this.value.replace(/[^\d]/,'')" pattern="[0-9]" />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="submit" class="btn btn-primary btnui2 w-100">Submit OTP</button>
                      </div>

                    </div></form>
                </div>
              </div>
              <hr />
              {/*Button trigger modal */}
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signupFormModal">
                Signup Modal UI
              </button>
              {/*Signup Modal UI */}
              <div class="modal fade" id="signupFormModal" tabindex="-1" role="dialog" aria-labelledby="signupFormModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <form class="fui fui1p w-100" action="" method="post" enctype="multipart/form-data">
                    <div class="mui muic mui2 muis modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="signupFormModalLabel">Signup</h5>
                        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div class="alert alert-success alertrcs dismissible fade show d-none" role="alert">
                          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                          <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div class="form-group">
                          <label for="">Name:</label>
                          <input required="required" name="text" value="" type="text" class="form-control" placeholder="Enter your name." maxlength="50" />
                        </div>
                        <div class="form-group">
                          <label for="">Email:</label>
                          <input required="required" name="email" value="" type="email" class="form-control" placeholder="Enter your email." maxlength="50" />
                        </div>
                        <div class="form-group">
                          <label for="">Password:</label>
                          <input required="required" name="password" value="" type="password" class="form-control" placeholder="Enter your password." maxlength="50" />
                        </div>
                        <div class="form-group">
                          <label for="">Confirm Password:</label>
                          <input required="required" name="cpassword" value="" type="password" class="form-control" placeholder="Confirm your password." maxlength="50" />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <a href="#" class="btn btn-outline-primary btnui3">Login</a>
                        <button type="submit" class="btn btn-primary btnui3">Signup</button>
                      </div>

                    </div></form>
                </div>
              </div>
              <hr />
              {/*Button trigger modal */}
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactFormModal">
                Contact Form Modal UI
              </button>
              {/*Contact Form Modal UI */}
              <div class="modal fade" id="contactFormModal" tabindex="-1" role="dialog" aria-labelledby="contactFormModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <form class="fui fui1 w-100" action="" method="post" enctype="multipart/form-data">
                    <div class="mui muic mui2 muis modal-content">
                      <div class="modal-header">
                        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div class="alert alert-success alertrcs dismissible fade show d-none" role="alert">
                          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                          <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div class="form-group">
                          <label for="">Name:</label>
                          <input required="required" name="text" value="" type="text" class="form-control" placeholder="Enter your name." maxlength="50" />
                        </div>
                        <div class="form-group">
                          <label for="">Email:</label>
                          <input required="required" name="email" value="" type="email" class="form-control" placeholder="Enter your email." maxlength="50" />
                        </div>
                        <div class="form-group">
                          <label for="">Phone:</label>
                          <input required="required" name="phone" value="" type="text" class="form-control" placeholder="Enter your password." maxlength="50" />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="submit" class="btn btn-primary btnui2">Send</button>
                      </div>

                    </div></form>
                </div>
              </div>

            </div>
          </div>
          {/*Row End */}
        </div>
      </section>
    </div>
  )
}

export default ModalPage