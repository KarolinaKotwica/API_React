import Image_show from "./Image_show";

const Image_List = ({images}) => {
    const renderedImages = images.map((image) => {
        return <Image_show image={image} key={image.id } />
    })

    return (
        <div>{renderedImages}</div>
    )
}

export default Image_List;