import './Banner.css';

const Banner = (props) => {

    if (props.user) {
        return (
            <div className="banner" >
                <div className='user-details'>
                    <p>BANNER</p>
                </div>
            </div>);
    } else return <div className="banner" />;



};
export default Banner;
