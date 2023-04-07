import './Image_show.css';

const Image_show = ({image}) => {
    console.log(image)
    return (
        <div className='images'>
            <img src={image.urls.small} alt={image.alt_description}/>
        </div>
    )
}

export default Image_show;