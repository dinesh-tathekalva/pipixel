import NavVertical from "./NavVertical";
import SimpleGallery from "./SimpleGallery";

const Main = () => {
    return (
        <div className="container d-flex flex-column flex-md-row navItem">
            <NavVertical />
            <div className="container">
                <SimpleGallery
                    galleryID="my-test-gallery"
                    images={[
                        {
                            largeURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
                            width: 1875,
                            height: 2500,
                        },
                        {
                            largeURL:
                                'https://raw.githubusercontent.com/dinesh-tathekalva/pipixel/main/Images/LargeImg.jpeg',
                            // thumbnailURL:'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                            thumbnailURL:'https://raw.githubusercontent.com/dinesh-tathekalva/pipixel/main/Images/SmallImg.jpeg',
                            width: 2500,
                            height: 1666,
                        },
                        {
                            largeURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                            width: 2500,
                            height: 1666,
                        },
                        
                        {
                            largeURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-2500.jpg',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-200.jpg',
                            width: 1669,
                            height: 2500,
                        },
                        {
                            largeURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg',
                                width: 2500,
                                height: 1666,
                        },
                        {
                            largeURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-2500.jpg',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/5/img-200.jpg',
                            width: 2500,
                            height: 1666,
                        },
                        {
                            largeURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
                            width: 1669,
                            height: 2500,
                        },
                        {
                            largeURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/8/img-2500.jpg',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/8/img-200.jpg',
                                width: 2500,
                                height: 1666,
                        },
                        // {
                        //     largeURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
                        //     thumbnailURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                        //     width: 2500,
                        //     height: 1666,
                        // },
                        // {
                        //     largeURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
                        //     thumbnailURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                        //     width: 2500,
                        //     height: 1666,
                        // },
                        // {
                        //     largeURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
                        //     thumbnailURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                        //     width: 2500,
                        //     height: 1666,
                        // },
                        // {
                        //     largeURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
                        //     thumbnailURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                        //     width: 2500,
                        //     height: 1666,
                        // },
                        // {
                        //     largeURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
                        //     thumbnailURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                        //     width: 2500,
                        //     height: 1666,
                        // },
                        // {
                        //     largeURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
                        //     thumbnailURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                        //     width: 2500,
                        //     height: 1666,
                        // },
                        // {
                        //     largeURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
                        //     thumbnailURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                        //     width: 2500,
                        //     height: 1666,
                        // },
                        // {
                        //     largeURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
                        //     thumbnailURL:
                        //         'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
                        //     width: 2500,
                        //     height: 1666,
                        // },
                    ]}
                />
            </div>
        </div>
    )
}

export default Main;