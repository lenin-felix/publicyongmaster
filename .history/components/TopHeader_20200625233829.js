
export const TopHeader = () => {
    return (
        <div className="header bg-default pb-6">
            <div className="container-fluid">
                <div className="header-body">
                    <div className="row align-items-center py-4">
                        <div className="col-lg-6 col-7">
                        <h6 className="h2 text-white d-inline-block mb-0">Home</h6>
                        <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                            <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                            <li className="breadcrumb-item"><a href="#"><i className="fas fa-home"></i></a></li>
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                            </ol>
                        </nav>
                        </div>
                    
                    </div>
                
                    <div className="row">
                    
                    </div>
                </div>    
            </div>
        </div>
    )
}