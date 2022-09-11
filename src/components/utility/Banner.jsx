import './Banner.css';

const Banner = (props) => {


    if (props.selectedChar) {
        return (
            <div className="banner" >
                <div className='user-details'>
                    <p>{props.selectedChar.name}</p>
                    <p>${props.selectedChar.cash}</p>
                </div>
                <div className='player-details'>
                    <p>{props.selectedChar.name}</p>
                    <p>${props.selectedChar.cash}</p>
                </div>
            </div>);
    } else return <div className="banner" />;



};
export default Banner;
