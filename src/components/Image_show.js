import './Image_show.css';

const Image_show = ({image}) => {
    console.log(image)
    return (
        <div className='image'>
            <a href={image.links.download} target='_blank'><img className='images' src={image.urls.thumb} alt={image.alt_description}/></a>
        </div>
    )
}

export default Image_show;