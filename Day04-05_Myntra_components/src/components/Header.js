function Header(){
    return (
        <div className="heading">

            <img className="myntra-image" src="https://cdn.worldvectorlogo.com/logos/myntra-2.svg"/>

            <div className="options">
                <button className="options-button">MEN</button>
                <button className="options-button">WOMEN</button>
                <button className="options-button">KIDS</button>
                <button className="options-button">HOME</button>
                <button className="options-button">BEAUTY</button>
                <button className="options-button">GENZ</button>
                <button className="options-button">STUDIO</button>
            </div>    

            <input className="search-bar" placeholder="Search for porducts, brands and more "></input>

            <div className="profile-container">

                <div className="profile-div">
                    <img src="https://p7.hiclipart.com/preview/442/477/305/computer-icons-user-profile-avatar-profile.jpg" className="profile-img"/>
                    <button className="profile-btn">Profile</button>
                </div>

                <div className="profile-div">
                    <img src="https://cdn-icons-png.freepik.com/512/7245/7245139.png" className="profile-img"/>
                    <button className="profile-btn">Wishlist</button>
                </div>

                <div className="profile-div">
                    <img src="https://cdn-icons-png.flaticon.com/512/126/126142.png" className="profile-img"/>
                    <button className="profile-btn">Bag</button>
                </div>
            </div>

        </div>
        
    )
}

export function Header_1(){
    return (
        <div className="head-img-container">
            <img className="header-img" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/c1d44e47034865.586e1a03d8cbf.jpg"></img>
        </div>
    )
}


export default Header
