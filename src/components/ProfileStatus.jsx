import React from 'react'
import '../css/Profile.css'


const ProfileStatus = () => {
    return (
        <div className="list-group list-group-flush">
            <div className="list-group-item text-center py-3 px-3">
                <h4 className="text-info mb-0">view</h4>
                <small className="text-muted px-1">Who's viewed your profile</small>
            </div>
            <div className="list-group-item text-center py-3 px-3">
                <h4 className="text-info mb-0">connections</h4>
                <p className="mb-0"><small className="text-muted px-1">Connections</small></p>
                <small><a href="#" className="font-weight-bold text-dark">Manage your network</a></small>
            </div>
          
                    <div className="list-group-item text-center py-3 px-3 bg-light">
                        <p className="mb-0"><small className="text-muted px-1">Access exclusive tools &amp; insights</small></p>
                        <small className="align-middle">
                        <a href="#" className="font-weight-bold text-dark">Free Upgrade to Premium</a>
                        </small>
                    </div>
                
            
        </div>
    )
}
export default ProfileStatus