import ProfileLeft from "./ProfileLeft"
import CreatePost from "./CreatePost"
import Suggestions from "./Suggestions"
    const Home = () => {
        return (
            <div className="container py-2">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <ProfileLeft />
                       
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-5">
                        <CreatePost /> 
                        <hr />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <Suggestions />
                    </div>
                </div>
            </div>
        )
    }
export default Home