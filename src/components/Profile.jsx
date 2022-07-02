
import React from 'react'

const Profile = () => {
    return (
        <div className="row">
            <h2> profile </h2>
            <div className="col s6 offset-s3">
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
            <div className="col s6 offset-s3">
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s6 offset-s3">
              <h2> TODO! </h2> 
            </div>
        </div>

    )
}
export default Profile; 