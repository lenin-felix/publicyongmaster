

import React from 'react';
import { setCookie ,parseCookies } from 'nookies';

var ctx = { 
    query : { 
        token : `123456789`
    }
}

var ctl = { }

  const Mylogin = () => { 
   
    const signInClick = () => { 
        alert(`working`)
        setCookie(ctx, 'authorization', ctx.query.token, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        });

    }
    
    const getInitialProps = async () => {

        const { authorization } = parseCookies(ctl);
        
        console.log(authorization)

        const {token} = ctl.query
        
        console.log(token)
        console.log( parseCookies(ctx))
        // const props = getUser(authorization || token)
    
        return authorization;
    }
    return ( 
        <div className="bg-default">
               <div className="main-content">
              
                    <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
            
                        <div className="container mt--8 pb-5">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-md-7">
                                    <div className="card bg-secondary border-0 mb-0">
                                        <div className="card-header bg-transparent pb-3">
                                            <div className="text-muted text-center mt-2 mb-3"><h3>MG Admin</h3></div>
                                            <div className="text-muted text-center mt-2 mb-3"><small>Welcome Admin! Please login to continue!</small></div>
                                        
                                        </div>
                                        <div className="card-body px-lg-5 py-lg-4">
                                        
                                            <form role="form">
                                                <div className="form-group mb-3">
                                                    <div className="input-group input-group-merge input-group-alternative">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                                        </div>
                                                        <input className="form-control" placeholder="Username or Email" type="email"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group input-group-merge input-group-alternative">
                                                            <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                                            </div>
                                                        <input className="form-control" placeholder="Password" type="password"/>
                                                    </div>
                                                </div>
                                                <div className="custom-control custom-control-alternative custom-checkbox">
                                                    <input className="custom-control-input" id=" customCheckLogin" type="checkbox"/>
                                                    <label className="custom-control-label" for=" customCheckLogin">
                                                        <span className="text-muted">Remember me</span>
                                                    </label>
                                                </div>
                                                <div className="text-center">
                                                    <button type="button" className="btn btn-primary my-4" onClick={signInClick}>Sign in</button>
                                                    <button type="button" className="btn btn-primary my-4" onClick={getInitialProps}>Sign work</button>
                                                </div>
                                            </form>
                                        </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-6">
                                        <a href="#" className="text-light"><small>Forgot password?</small></a>
                                    </div>
                                    <div className="col-6 text-right">
                                        <a href="#" className="text-light"><small>Create new account</small></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>
        
        </div>
     )
}


export default Mylogin;