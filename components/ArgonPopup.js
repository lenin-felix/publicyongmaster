
import React from "react";
import Popup from "reactjs-popup";
 
export const ArgonPopup =  () => (
  <Popup trigger={<button> Trigger</button>} position="center center">
     <div className="row">
            <div className="col-md-4 col-12">
              
               <div className="modal fade" id="modal-default" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                  <div className="modal-dialog modal-lg modal-dialog-centered modal-" role="document">
                     <div className="modal-content">
                        <div className="modal-header">
                           <h2 className="modal-title" id="modal-title-default">App Information</h2>
                           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">×</span>
                           </button>
                        </div>
                        <div className="modal-body">
                           <form role="form">
                              <div className="form-group mb-3">
                                 <div className="mb-2">MASTER_ID</div>
                                 <div className="input-group input-group-merge input-group-alternative">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text"><i className="ni ni-badge"></i></span>
                                       
                                    </div>
                                    <input className="form-control" placeholder="Master ID" type="text"/>
                                 </div>
                              </div>
                              <div className="form-group mb-3">
                                 <div className="mb-2">LATEST_VERSION</div>
                                 <div className="input-group input-group-merge input-group-alternative">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text"><i className="ni ni-bold-up"></i></span>                                   
                                    </div>
                                    <input className="form-control" placeholder="Latest Version" type="text"/>
                                 </div>
                              </div>
                              <div className="form-group mb-3">
                                 <div className="mb-2">Project Name</div>
                                 <div className="input-group input-group-merge input-group-alternative">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text"><i className="ni ni-single-copy-04"></i></span>
                                    </div>
                                    <input className="form-control" placeholder="Project Name" type="text"/>
                                 </div>
                              </div>
                              <div className="form-group mb-3">
                                 <div className="mb-2">Host URL</div>
                                 <div className="input-group input-group-merge input-group-alternative">
                                    <div className="input-group-prepend">
                                       <span className="input-group-text"><i className="ni ni-world-2"></i></span>
                                    </div>
                                    <input className="form-control" placeholder="Host URL" type="text"/>
                                 </div>
                              </div>
                              <div className="text-center">
                                 <button type="button" className="btn btn-primary my-4 d-none" id="signinbutton">Sign in</button>
                              </div>
                           </form>
                        </div>
                        <div className="modal-footer">
                           <button type="button" className="btn btn-primary" >Save Project</button>
                           <button type="button" className="btn btn-link  ml-auto" data-dismiss="modal">Close</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
  </Popup>
);